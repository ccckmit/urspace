<template>
  <div id="headbar">
    <a id="menuToggle"  @click="menuToggle">&#9776;</a> &nbsp;
    <router-link to="/">UrSpace</router-link>
    <div class="dropdown">
      <button class="dropbtn">繁體中文</button>
      <div class="dropdown-content">
        <a href="#en">English</a>
        <a href="#zh-tw">繁體中文</a>
        <a href="#zh-cn">简体中文</a>
      </div>
    </div>
    <div class="dropdown">
      <button class="dropbtn">
        <router-link to="/user">{{shared.user ? shared.user.displayName : '登入'}}</router-link>
      </button>
      <div class="dropdown-content">
        <router-link to="/login">登入</router-link>
        <router-link to="/login" v-on:click.native="logout">登出</router-link>
        <router-link to="/signup">註冊</router-link>
        <router-link to="/setting">設定</router-link>
      </div>
    </div>
    <div class="dropdown">
      <button class="dropbtn">最新</button>
      <div class="dropdown-content">
        <router-link to="/sms/new">最新</router-link>
        <router-link to="/sms/near">鄰近</router-link>
        <router-link to="/sms/tracking">追蹤</router-link>
        <router-link to="/sms/random">隨機</router-link>
      </div>
    </div>
    <div class="dropdown">
      <button class="dropbtn">人員</button>
      <div class="dropdown-content">
        <router-link to="/sms/people">人員</router-link>
        <router-link to="/sms/object">物品</router-link>
        <router-link to="/sms/text">文章</router-link>
        <router-link to="/sms/image">圖像</router-link>
        <router-link to="/sms/video">影片</router-link>
        <router-link to="/sms/book">書籍</router-link>
        <router-link to="/sms/">全部</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headbar',
  props: [ 'shared' ],
  data () {
    return {
    }
  },
  mounted: function () {
    if (window.innerWidth <= 700) this.menuToggle()
  },
  methods: {
    menuToggle: function (event) {
      var sidenav = document.getElementById('sidenav')
      var sidebar = document.getElementById('sidebar')
      sidenav.style.width = (sidenav.style.width === '0px') ? '200px' : '0px'
      sidebar.style.width = (sidebar.style.width === '0px') ? '200px' : '0px'
    },
    logout: function (event) {
      this.shared.clearUser()
      // this.$router.push({path: '/login'})
    }
  }
}
</script>
<style>
</style>
