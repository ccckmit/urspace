<template>
  <div id="rightnav">
    <div id="rightbar">
      <a @click="setMyDomain(myDomain)" class="captalize">{{mt(myDomain)}}</a>
      <a v-for="(child, index) in childDomain[myDomain]" :key="index" @click="setMyDomain(child)" class="captalize"> – {{mt(child)}}</a>
    </div>
  </div>
</template>
<script>
import mixin from '../lib/mixin'
import {ccckmit} from '../lib/dbDataSetup'

export default {
  name: 'rightbar',
  mixins: [mixin],
  data () {
    return {
      myDomain: 'all',
      childDomain: JSON.parse(ccckmit.childDomainText)
    }
  },
  methods: {
    setMyDomain: function (domain) {
      this.myDomain = domain
    }
  }
}
</script>

<style scoped>
</style>
