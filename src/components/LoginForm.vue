<template>
  <div class="message center" style="height:80vh">
    <div v-if="isLogin()" style="top:80px; position:relative;">
      <div class="center">{{loginUser.displayName}}</div>
      <br/>
      <button @click="logout" class="center big">登出</button>
    </div>
    <div v-else style="top:80px; position:relative;">
      <div class="center">本網站目前僅支援使用 Google 帳號登入！</div>
      <br/>
      <button @click="googleLogin" class="center big" >Google登入</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginForm',
  props: ['firebase'],
  data () {
    return {
      loginUser: null
    }
  },
  created: function () {
  },
  methods: {
    isLogin: function () {
      return this.loginUser != null
    },
    logout: function (event) {
      console.log('logout')
      this.loginUser = null
      this.$router.push({path: '/login'})
    },
    googleLogin: function (event) {
      let self = this
      var googleProvider = new this.firebase.auth.GoogleAuthProvider()
      this.firebase.auth().signInWithPopup(googleProvider).then(function (result) {
        let user = result.user
        self.loginUser = { displayName: user.displayName, email: user.email, uid: user.uid }
        self.$router.push({path: '/logout'})
      }).catch(function (error) {
        alert(' 登入失敗！' + error)
      })
    }
  }
}
</script>

<style>

</style>
