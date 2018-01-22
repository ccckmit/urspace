<template>
  <div v-if="page==='login'">
    <login-form/>
  </div>
  <div v-else>
    <sms :domain="domain" :op="op"/>
  </div>
</template>

<script>
import Sms from './Sms.vue'
import LoginForm from './LoginForm.vue'
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
    LoginForm
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
