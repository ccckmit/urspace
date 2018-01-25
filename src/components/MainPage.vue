<template>
  <div>
    <headbar :domain="domain" :op="op"/>
    <div>
      <leftbar :domain="domain"/>
      <rightbar :domain="domain"/>
      <div>
        <div id="content" style="min-height: 100vh">
          <main-content :page="page" :domain="domain" :op="op" :uid="uid"/>
          <div id="footer"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Headbar from './Headbar.vue'
import Leftbar from './Leftbar.vue'
import Rightbar from './Rightbar.vue'
import MainContent from './MainContent.vue'

export default {
  name: 'mainPage',
  props: ['page', 'domain', 'op', 'uid'],
  components: {
    Headbar,
    Leftbar,
    Rightbar,
    MainContent
  },
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      console.log('page=', this.page, 'domain=', this.domain, 'op=', this.op, 'uid=', this.uid)
    }
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
