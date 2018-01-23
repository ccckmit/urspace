<template>
  <div class="message">
    <div style="top:20px;">
      <h1>Domain: {{shared.user.uid}}</h1>
      <table style="width:100%">
        <tr><td style="width: 8em">欄位</td><td>內容</td></tr>
        <tr><td>{{mt('id')}}</td><td><input type="text" v-model="shared.user.uid"/></td></tr>
        <tr><td>{{mt('name')}}</td><td><input type="text" v-model="shared.user.displayName"/></td></tr>
        <tr><td>{{mt('editor')}}</td><td><input type="text" v-model="editor"></td></tr>
        <tr><td>{{mt('members')}}</td><td><input type="text" v-model="members"></td></tr>
        <tr><td>{{mt('dictionary')}}</td><td><textarea v-model="dictionaryText"></textarea></td></tr>
        <tr><td>{{mt('child domain')}}</td><td><textarea v-model="childDomainText"></textarea></td></tr>
      </table>
    </div>
  </div>
</template>

<script>
// import {db} from '../lib/service'
import mixin from '../lib/mixin'

export default {
  name: 'setting',
  mixins: [mixin],
  data () {
    return {
      editor: 'editor',
      members: '',
      dictionaryText: '',
      childDomainText: ''
      /*
      dictionaryText: '',
      childDomainText: '',
      id: this.shared.user.uid,
      name: this.shared.user.displayName,
      editor: [ this.shared.user ],
      dictionary: {},
      childDomain: {}
      */
    }
  },
  methods: {
    saveSetting () {
      /*
      var self = this
      var user = self.shared.user
      var record = {
        uid: user.uid,
        displayName: user.displayName,
        dictionary: JSON.parse(self.dictionaryText),
        childDomains: JSON.parse(self.childDomainText),
        time: db.TIMESTAMP
      }
      db.update('user/' + user.uid, record).then(function () {
        alert('存檔成功！')
      }).catch(function (err) {
        if (err) alert('存檔失敗：' + err)
      })
      */
    }
  }
}
</script>

<style scoped>
textarea { width: 90%; height:10em; }
input { width: 90%; }
</style>
