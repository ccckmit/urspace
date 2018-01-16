<template>
  <div id="headbar">
    <a id="menuToggle"  v-on:click="menuToggle">&#9776;</a> &nbsp;
    <router-link to="/">Home</router-link>
    <div class="dropdown">
      <button class="dropbtn">繁體中文</button>
      <div class="dropdown-content">
        <a href="#en">English</a>
        <a href="#zh-tw">繁體中文</a>
        <a href="#zh-cn">简体中文</a>
      </div>
    </div>
    <div class="dropdown">
      <button class="dropbtn">User</button>
      <div class="dropdown-content">
        <a href="#login">登入</a>
        <a href="#logout">登出</a>
        <a href="#signin">註冊</a>
        <a href="#setting">設定</a>
      </div>
    </div>
    <div class="dropdown">
      <button class="dropbtn">最新</button>
      <div class="dropdown-content">
        <a href="#new">最新</a>
        <a href="#tracking">追蹤</a>
        <a href="#near">鄰近</a>
        <a href="#radnom">隨機</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headbar',
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
    }
  }
}
</script>

<style>
</style>
