<template>
  <div id="sms">
    <headbar/>
    <div>
      <sidenav/>
      <div id="content">
        <div id="main">
          <message-new/>
          <message-list/>
          <div id="footer">footer</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Headbar from './headbar.vue'
import Sidenav from './sidenav.vue'
import MessageNew from './MessageNew.vue'
import MessageList from './MessageList.vue'

export default {
  name: 'sms',
  data () {
    return {
    }
  },
  components: {
    Headbar,
    Sidenav,
    MessageNew,
    MessageList
  },
  methods: {
  }
}
</script>

<style scoped>
html, body {
  background-color: #336699;
}
</style>
