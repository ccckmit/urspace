<template>
<div>
  <div v-if="page==='login'">
    <login/>
  </div>
  <div v-else>
    <setting v-if="page==='setting'"/>
    <sms v-else :domain="domain" :op="op" :uid="uid"/>
  </div>
</div>
</template>

<script>
import Sms from './Sms.vue'
import Login from './Login.vue'
import Setting from './Setting.vue'
import mixin from '../lib/mixin'

export default {
  name: 'mainContent',
  props: ['page', 'domain', 'op', 'uid'],
  mixins: [mixin],
  data () {
    return {
    }
  },
  components: {
    Sms,
    Login,
    Setting
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
