<template>
  <div id="sidenav">
    <div id="sidebar">
      <router-link to="/sms/people">人員</router-link>
      <router-link to="/sms/object">物品</router-link>
      <router-link to="/sms/article">文章</router-link>
      <router-link to="/sms/image">圖像</router-link>
      <router-link to="/sms/video">影音</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sidenav',
  data () {
    return {
    }
  },
  created: function () {
    // `this` points to the vm instance
    console.log('MainPage:this.$route.params=', this.$route.params)
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
