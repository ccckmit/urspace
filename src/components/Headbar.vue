<template>
  <div id="headbar">
    <div class="dropdown" style="float:left">
      <button @click="menuToggle('left')" class="dropbtn"><i class="fa fa-bars" aria-hidden="true"></i><!--&#9776;--></button>
    </div>
    <!--
    <div class="dropdown" style="float:left">
      <button class="dropbtn">
        <router-link :to="domainLink('all')" class="captalize"><i class="fa fa-home" aria-hidden="true"></i></router-link>
      </button>
    </div>
    -->
    <div class="dropdown" style="float:left">
      <button class="dropbtn">
        <!-- <router-link :to="toLink(domain, op, urspace.uid)">{{mt('UrSpace')}}</router-link> -->
        <router-link :to="toLink('all', op, '')" class="captalize">{{mt('UrSpace')}}</router-link>
      </button>
      <div class="dropdown-content">
        <router-link to="/" class="captalize">{{mt('home')}}</router-link>
        <router-link to="/help" class="captalize">{{mt('help')}}</router-link>
      </div>
    </div>
    <div class="dropdown" style="width:3em">
      <button @click="menuToggle('right')" class="dropbtn"><i class="fa fa-bars" aria-hidden="true"></i><!--&#9776;--></button>
    </div>
    <div class="dropdown">
      <button class="dropbtn">
        <router-link :to="toLink(domain, op, shared.user != null ? shared.user.uid : '')">{{mt(shared.user != null ? shared.user.displayName : 'Login')}}</router-link> <!--  -->
      </button>
      <div class="dropdown-content">
        <router-link to="/login">{{mt('login')}}</router-link>
        <router-link to="/login" v-on:click.native="logout">{{mt('logout')}}</router-link>
        <router-link to="/signup">{{mt('signup')}}</router-link>
        <router-link to="/setting">{{mt('setting')}}</router-link>
      </div>
    </div>
    <div class="dropdown">
      <button class="dropbtn">{{mt(shared.language)}}</button>
      <div class="dropdown-content">
        <a @click="shared.setVar('language', 'en')">English</a>
        <a @click="shared.setVar('language', 'tw')">繁體中文</a>
        <a @click="shared.setVar('language', 'cn')">简体中文</a>
        <a @click="shared.setVar('language', 'jp')">日本語</a>
        <!--
        <router-link :to="toLink(domain, op, 'en')" class="captalize"></router-link>
        <router-link :to="toLink(domain, op, 'zh-tw')" class="captalize">繁體中文</router-link>
        <router-link :to="toLink(domain, op, 'zh-cn')" class="captalize">简体中文</router-link>
        <router-link :to="toLink(domain, op, 'jp')" class="captalize">日本語</router-link>
        -->
      </div>
    </div>
    <div class="dropdown">
      <button class="dropbtn captalize">{{mt('new')}}</button>
      <div class="dropdown-content">
        <router-link :to="toLink(domain, 'new')" class="captalize">{{mt('new')}}</router-link>
        <router-link :to="toLink(domain, 'hot')" class="captalize">{{mt('hot')}}</router-link>
        <router-link :to="toLink(domain, 'near')" class="captalize">{{mt('near')}}</router-link>
        <router-link :to="toLink(domain, 'my')" class="captalize">{{mt('my')}}</router-link>
        <router-link :to="toLink(domain, 'follow')" class="captalize">{{mt('follow')}}</router-link>
        <router-link :to="toLink(domain, 'read')" class="captalize">{{mt('read')}}</router-link>
        <router-link :to="toLink(domain, 'random')" class="captalize">{{mt('random')}}</router-link>
      </div>
    </div>
    <div class="dropdown" style="float:right">
      <input type="text" :value="q"/>
      <button class="success">搜尋</button>
    </div>
  </div>
</template>

<script>
import mixin from '../lib/mixin'

export default {
  name: 'headbar',
  props: [ 'you', 'me' ],
  mixins: [mixin],
  data () {
    return {
      q: '',
      urspace: { uid: 'yRK5q5iZ14V2OJRW47dotv9FjTA3' }
    }
  },
  mounted: function () {
    if (window.innerWidth <= 1000) this.menuToggle('right')
    if (window.innerWidth <= 700) this.menuToggle('left')
  },
  computed: {
    /*
    domainLink: function () {
      return `/sms/${this.$route.params.domain} || 'all'}`
    }
    */
  },
  methods: {
    /*
    toLink: function (domain, op) {
      return `/sms/${domain}/${op}`
    },
    */
    menuToggle: function (menuName) {
      var sidenav = document.getElementById(menuName + 'nav')
      var sidebar = document.getElementById(menuName + 'bar')
      sidenav.style.width = (sidenav.style.width === '0px') ? '200px' : '0px'
      sidebar.style.width = (sidebar.style.width === '0px') ? '200px' : '0px'
    },
    logout: function (event) {
      this.shared.clearVar('user')
      // this.$router.push({path: '/login'})
    }
  }
}
</script>
<style>
</style>
