<template>
<div>
  <div v-if="page==='login'">
    <login/>
  </div>
  <div v-if="page==='setting'">
    <setting/>
  </div>
  <div v-else>
    <sms :domain="domain" :op="op"/>
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
  props: ['page', 'domain', 'op'],
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
