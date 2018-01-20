<template>
  <div id="headbar">
    <a @click="menuToggle('left')">&#9776;</a> &nbsp;
    <router-link to="/sms/all">{{mt('all')}}</router-link> /
    <router-link v-if="(domain||'all') != 'all'" :to="domainLink" class="captalize">{{mt(domain)}}</router-link>
    <div class="dropdown" style="width:2em">
      <a id="keepToggle"  @click="menuToggle('right')">&#9776;</a>
    </div>
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
        <router-link to="/user">{{shared.user ? shared.user.displayName : 'Login'}}</router-link>
      </button>
      <div class="dropdown-content">
        <router-link to="/login">{{mt('login')}}</router-link>
        <router-link to="/login" v-on:click.native="logout">{{mt('logout')}}</router-link>
        <router-link to="/signup">{{mt('signup')}}</router-link>
        <router-link to="/setting">{{mt('setting')}}</router-link>
      </div>
    </div>
    <div class="dropdown">
      <button class="dropbtn">{{mt('new')}}</button>
      <div class="dropdown-content">
        <router-link :to="toLink('new')" class="captalize">{{mt('new')}}</router-link>
        <router-link :to="toLink('hot')" class="captalize">{{mt('hot')}}</router-link>
        <router-link :to="toLink('near')" class="captalize">{{mt('near')}}</router-link>
        <router-link :to="toLink('my')" class="captalize">{{mt('my')}}</router-link>
        <router-link :to="toLink('follow')" class="captalize">{{mt('follow')}}</router-link>
        <router-link :to="toLink('read')" class="captalize">{{mt('read')}}</router-link>
        <router-link :to="toLink('random')" class="captalize">{{mt('random')}}</router-link>
      </div>
    </div>
    <div class="dropdown">
      <button class="dropbtn">{{mt('UrSpace')}}</button>
      <div class="dropdown-content">
        <router-link to="/" class="captalize">{{mt('home')}}</router-link>
        <router-link to="/help" class="captalize">{{mt('help')}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import mixin from '../lib/mixin'

export default {
  name: 'headbar',
  props: [ 'shared', 'domain' ],
  mixins: [mixin],
  data () {
    return {
    }
  },
  mounted: function () {
    if (window.innerWidth <= 1000) this.menuToggle('right')
    if (window.innerWidth <= 700) this.menuToggle('left')
  },
  computed: {
    domainLink: function () {
      return `/sms/${this.domain || 'all'}`
    }
  },
  methods: {
    toLink: function (op) {
      return `/sms/${this.domain}/${op}`
    },
    menuToggle: function (menuName) {
      var sidenav = document.getElementById(menuName + 'nav')
      //      var sidebar = document.getElementById(menuName + 'bar')
      sidenav.style.width = (sidenav.style.width === '0px') ? '200px' : '0px'
      //      sidebar.style.width = (sidebar.style.width === '0px') ? '200px' : '0px'
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
