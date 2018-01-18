<template>
  <div v-if="to==='login' || to==='logout'">
    <login-form :firebase="firebase"/>
  </div>
  <div v-else>
    <message-new/>
    <message-list :db="db"/>
  </div>
</template>

<script>
import MessageNew from './MessageNew.vue'
import MessageList from './MessageList.vue'
import LoginForm from './LoginForm.vue'

export default {
  name: 'mainContent',
  props: ['firebase', 'db', 'to'],
  data () {
    return {
    }
  },
  components: {
    MessageNew,
    MessageList,
    LoginForm
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
