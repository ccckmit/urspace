<template>
  <div>
    <headbar :domain="domain" :op="op" :you="you" :me="me"/>
    <div>
      <!-- <leftbar :domain="domain"/> -->
      <side-menu :who="you" :side="'left'"/>
      <!-- <rightbar :domain="domain"/> -->
      <side-menu :who="me" :side="'right'"/>
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
import SideMenu from './SideMenu.vue'
import MainContent from './MainContent.vue'
import mixin from '../lib/mixin'
import { urspace, ccckmit, userSetup } from '../lib/dbDataSetup'

userSetup(urspace)
userSetup(ccckmit)

export default {
  name: 'mainPage',
  mixins: [mixin],
  // props: ['page', 'domain', 'op', 'uid'],
  components: {
    Headbar,
    Leftbar,
    Rightbar,
    SideMenu,
    MainContent
  },
  data () {
    return {
      you: urspace,
      me: ccckmit
    }
  },
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      console.log('page=', this.page, 'domain=', this.domain, 'op=', this.op, 'uid=', this.uid)
    }
  },
  created: function () {
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
