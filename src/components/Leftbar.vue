<template>
  <div id="leftnav">
    <div id="leftbar">
      <router-link :to="domainLink(domain)" class="captalize">{{mt(domain)}}</router-link>
      <router-link v-for="(child, index) in childDomain[domain || 'all']" :key="index" :to="domainLink(child)" class="captalize"> – {{mt(child)}}</router-link>
    </div>
  </div>
</template>
<script>
import mixin from '../lib/mixin'
import {urspace} from '../lib/dbDataSetup'

export default {
  name: 'leftbar',
  mixins: [mixin],
  data () {
    return {
      childDomain: JSON.parse(urspace.childDomainText)
    }
  }
}
</script>
