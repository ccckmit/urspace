<template>
  <div :id="idNav">
    <div :id="idBar">
      <div style="float:right; padding: 0px 10px;">
        <!-- <router-link :to="toLink(atDomain, op, '')" class="captalize" title="Domain message"><i class="fa fa-list" aria-hidden="true"></i></router-link> -->
        <!-- <router-link :to="toLink(atDomain, op, who.uid)" class="captalize" title="Personal message"><i class="fa fa-address-card-o" aria-hidden="true"></i></router-link> -->
      </div>
      <!-- <a class="captalize" style="float:right">⮌</a> -->
      <!-- <button @click="popDomain()" style="float:right">{{mt('view')}}</button> -->
      <!-- <router-link :to="toLink(atDomain, op, who.uid)" class="captalize" style="color:#eeee44;">{{who.name}}</router-link>--> <!--  style="color:#eeee44;font-size:125%;;font-weight:bold;"-->
      <div>
        <a @click="popDomain()" title="Go Back" style="color:#eeee44;display: inline-block;">⮌ </a> <!-- <i class="fa fa-arrow-left" aria-hidden="true"></i> ⮌ -->
        <router-link :to="toLink(atDomain, op, who.uid)" class="captalize" style="color:#eeee44;display: inline-block;">{{who.name}}</router-link> /
        <router-link :to="toLink(atDomain, op, '')" class="captalize" style="color:#eeee44;display: inline-block;">{{mt(atDomain)}}</router-link> <!--  style="color:#eeee44;font-size:125%;;font-weight:bold;" -->
      </div>
      <!-- <a @click="pushDomain(atDomain)" class="captalize" style="color:#eeee44;font-size:125%;;font-weight:bold;"></a> -->
      <a v-for="(child, index) in who.childDomain[atDomain]" :key="index" @click="pushDomain(child)" class="captalize"> – {{mt(child)}}</a>
    </div>
  </div>
</template>
<script>
import mixin from '../lib/mixin'
// import {ccckmit} from '../lib/dbDataSetup'

export default {
  name: 'sidemenu',
  mixins: [mixin],
  props: [ 'who', 'side' ],
  data () {
    return {
      atDomain: 'all',
      domainHistory: []
    }
  },
  computed: {
    idNav: function () { return this.side + 'nav' },
    idBar: function () { return this.side + 'bar' }
  },
  methods: {
    pushDomain: function (domain) {
      if (domain === this.atDomain) return
      this.domainHistory.push(this.atDomain)
      this.atDomain = domain
    },
    popDomain: function () {
      if (this.domainHistory.length > 0) {
        this.atDomain = this.domainHistory.pop()
      }
    }
  }
}
</script>

<style scoped>
</style>
