<template>
  <div v-if="shared.to==='login'">
    <login-form :shared="shared"/>
  </div>
  <div v-else>
    <sms :shared="shared"/>
  </div>
</template>

<script>
import Sms from './Sms.vue'
import LoginForm from './LoginForm.vue'

export default {
  name: 'mainContent',
  props: ['shared'],
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
