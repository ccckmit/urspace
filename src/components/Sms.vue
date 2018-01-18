<template>
<div>
  <div>
    <div id="message" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
      <div v-if="shared.isLogin()" class="message">
        <div><a href="#">{{shared.user.displayName}}</a></div>
        <div class="messageContent">
          <textarea v-model="messageContent" placeholder="新增貼文"></textarea>
        </div>
        <div>
          <button class="info" @click="postMessage">發佈</button>&nbsp;
          <button class="info">清除</button>
        </div>
      </div>
      <div v-for="message in messages" :key="message.id" class="message">
        <div><a href="#">{{message.by}}</a><label class="right">{{timeToIso(message.time)}}</label></div>
        <div class="messageContent" v-html="md2html(message.content)"></div>
        <div><button>回覆</button>&nbsp;<button>編輯</button></div>
      </div>
    </div>
    <div v-if="isEnd===false" class="center">載入新資料中，請等候 ...</div>
    <div v-else class="center">資料全部載入完畢，已到結尾！</div>
  </div>
</div>
</template>

<script>
import marked from 'marked'

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
})

/* eslint-disable */
export default {
  name: 'Sms',
  props: ['shared'],
  data () {
    return {
      messageContent: '',
      messages: [],
      isEnd: false,
      busyLoadMore: false
    }
  },
  methods: {
    postMessage () {
      var self = this
      var user = self.shared.user
      var db = self.shared.db
      var ref = db.ref('/messages/');
      var mid = ref.push().key
      var record = {
        uid: user.uid,
        by: user.displayName,
        content:self.messageContent,
        time: self.shared.firebase.database.ServerValue.TIMESTAMP,
      }
      let updates = {}
      updates['/messages/' + mid] = record
      updates['/user-messages/' + user.uid + '/' + mid] = record
      self.shared.db.ref().update(updates).then(function () {
        // var newRec = { uid: record.uid, by: record.by, content: record.content, time: Date.now() }
        record.time = Date.now()
        self.messages.unshift(record)
        self.messageContent = ''
      }).catch(function (err) {
        if (err) alert('新增訊息失敗：' + err);
      })
    },
    md2html: function (md) {
      return marked(md)
    },
    loadMore: function () {
      const step = 10
      if (this.busyLoadMore || this.isEnd) return
      this.busyLoadMore = true
      setTimeout(() => {
        let self = this
        // let beginId = (this.messages.length === 0) ? 0 : this.messages[this.messages.length-1].id + 1
        let start = (this.messages.length === 0) ? 0 : this.messages[this.messages.length-1].time + 1
        var ref = this.shared.db.ref('/messages/').orderByChild('time').startAt(start).limitToFirst(step)
        ref.once('value').then(function (snapshot) {
          if (snapshot.numChildren() < step) {
            self.isEnd = true
          }
          snapshot.forEach(function (childSnapshot) {
            let msg = childSnapshot.val()
            self.messages.push(msg)
          })
          // console.log('isEnd', self.isEnd)
        })
        this.busyLoadMore = false
      }, 500)
    },
    timeToIso(timestamp) {
      return new Date(timestamp).toISOString()
    }
  }
}
</script>

<style scoped>
.messageContent {
  border-top:1px solid #dddddd;
  border-bottom:1px solid #dddddd;
  display: inline-block;
  width: 100%;
}
textarea {
  width: 95%;
  height: 100px;
  padding: 10px;
}
</style>
