<template>
  <div>
    <headbar :shared="shared"/>
    <div>
      <sidenav/>
      <div>
        <div id="content">
          <main-content :shared="shared" :to="to"/>
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
  created: function () {
    console.log('to=', this.to, 'domain=', this.domain, 'orderBy=', this.orderBy, 'sort=', this.sort)
    shared.to = this.to
    shared.domain = this.domain
    shared.orderBy = this.orderBy
    shared.sort = this.sort
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
