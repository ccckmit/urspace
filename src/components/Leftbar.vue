<template>
  <div id="leftnav">
    <div id="leftbar">
      <router-link :to="domainLink(domain)" class="captalize">{{mt(domain)}}</router-link>
      <router-link v-for="(sub, index) in subDomain[domain || 'all']" :key="index" :to="domainLink(sub)" class="captalize"> – {{mt(sub)}}</router-link>
    </div>
  </div>
</template>
<script>
import mixin from '../lib/mixin'
import {urspace} from '../lib/dbDataSetup'

export default {
  name: 'leftbar',
  props: [ 'domain' ],
  mixins: [mixin],
  data () {
    return {
      subDomain: JSON.parse(urspace.childDomainText)
    }
  },
  created: function () {
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
