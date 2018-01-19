<template>
  <div>
    <headbar :shared="shared" :domain="domain"/>
    <div>
      <sidenav :shared="shared" :domain="domain"/>
      <div>
        <div id="content">
          <main-content :shared="shared" :to="to" :domain="domain"/>
          <div id="footer"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Headbar from './Headbar.vue'
import Sidenav from './Sidenav.vue'
import MainContent from './MainContent.vue'
import shared from '../lib/shared'

export default {
  name: 'mainPage',
  props: ['to', 'domain', 'orderBy', 'sort'],
  data () {
    return {
      shared: shared
    }
  },
  components: {
    Headbar,
    Sidenav,
    MainContent
  },
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      console.log('to=', this.to, 'domain=', this.domain, 'orderBy=', this.orderBy, 'sort=', this.sort)
      shared.to = this.to
      shared.domain = this.domain
      shared.orderBy = this.orderBy
      shared.sort = this.sort
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
