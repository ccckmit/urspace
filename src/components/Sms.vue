<template>
<div>
  <div>
    <div id="message" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
      <div v-if="shared.isLogin()" class="message">
        <div><a href="#">{{shared.user.displayName}}</a></div>
        <div class="messageContent">
          <textarea v-model="messageContent"></textarea>
        </div>
        <div>
          <button @click="postMessage">{{mt('publish')}}</button>&nbsp;
          <button>{{mt('clear')}}</button>
        </div>
      </div>
      <div v-for="message in messages" :key="message.id" class="message">
        <div><a href="#">{{message.by}}</a><label class="right">{{timeToIso(message.time)}}</label></div>
        <div class="messageContent" v-html="text2html(message.content)"></div>
        <div>
          <button>{{mt('reply')}}</button>
          <button>{{mt('view')}}</button>
          <button>{{mt('edit')}}</button>
          <button>{{mt('delete')}}</button>
        </div>
      </div>
    </div>
    <div v-if="isEnd===false" class="center">{{mt('wait_for_load')}}</div>
    <div v-else class="center">{{mt('end_of_data')}}</div>
  </div>
</div>
</template>

<script>
import markdown from '../lib/markdown'
import {db} from '../lib/service'
import mixin from '../lib/mixin'

var opMap = {
  'new': {orderBy: 'time', sort: 'desc'},
  'hot': {orderBy: 'priority'},
  'near': {},
  'my': {},
  'follow': {},
  'read': {},
  'random': {}
}

export default {
  name: 'Sms',
  mixins: [mixin],
  props: ['domain', 'op'],
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
      var record = {
        uid: user.uid,
        by: user.displayName,
        content: self.messageContent
      }
      // var ref = db.addMessage(record)
      db.addMessage(record).then(function (key) {
        record.time = Date.now()
        self.messages.unshift(record)
        self.messageContent = ''
      }).catch(function (err) {
        if (err) alert('新增訊息失敗：' + err)
      })
    },
    text2html (text) {
      return markdown.textToHtml(text)
    },
    loadMore () {
      const self = this
      const step = 10

      if (this.busyLoadMore || this.isEnd) return
      this.busyLoadMore = true
      if (self.isEnd) return
      let toOp = opMap[this.op]
      let sort = ''
      let orderBy = 'time'
      if (toOp != null) {
        sort = toOp.sort
        orderBy = toOp.orderBy
      }
      setTimeout(() => {
        let start = (this.messages.length === 0 || sort === 'desc') ? null : this.messages[this.messages.length - 1].time + 1
        let end = (this.messages.length === 0 || sort !== 'desc') ? null : this.messages[this.messages.length - 1].time - 1
        let q = { domain: this.domain, orderBy: orderBy, start: start, end: end, limit: step, sort: sort }
        console.log('loadMore:this.domain=', this.domain)
        db.queryMessage(q).then(function (qMsgList) {
          for (let qMsg of qMsgList) {
            self.messages.push(qMsg)
          }
          self.isEnd = (qMsgList.length < step)
        })
        this.busyLoadMore = false
      }, 500)
    },
    timeToIso (timestamp) {
      return new Date(timestamp).toISOString()
    }
  }
}
</script>

<style scoped>
.messageContent {
  border-top:1px solid #dddddd;
  border-bottom:1px solid #dddddd;
  width: 100%;
}
textarea {
  margin-left:auto;
  margin-right:auto;
  width: 95%;
  display: inline-block;
  height: 100px;
}
</style>
