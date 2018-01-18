<template>
  <div>
    <headbar :shared="shared"/>
    <div>
      <sidenav/>
      <div>
        <div id="content">
          <main-content :shared="shared" :to="to"/>
          <div id="footer"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import Headbar from './Headbar.vue'
import Sidenav from './Sidenav.vue'
import MainContent from './MainContent.vue'

var firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCmc44S50DGj-f9LbagNPLgnVHHaphIZhI',
  authDomain: 'ccc-urspace.firebaseapp.com',
  databaseURL: 'https://ccc-urspace.firebaseio.com',
  projectId: 'ccc-urspace',
  storageBucket: '',
  messagingSenderId: '1023578722292'
})

var debug = true
var userJson = sessionStorage.getItem('urspace_user')

var shared = {
  user: userJson ? JSON.parse(userJson) : null,
  firebase: firebase,
  firebaseApp: firebaseApp,
  db: firebaseApp.database(),
  setUser (user) {
    if (debug) console.log('setUser:', user)
    this.user = user
    sessionStorage.setItem('urspace_user', JSON.stringify(user))
  },
  clearUser () {
    if (debug) console.log('clearUser:', this.user)
    this.user = null
    sessionStorage.removeItem('urspace_user')
  },
  isLogin () {
    return (this.user != null)
  }
}

export default {
  name: 'mainPage',
  props: ['to'],
  data () {
    return {
      shared: shared
    }
  },
  components: {
    Headbar,
    Sidenav,
    MainContent
  },
  created: function () {
  },
  methods: {
  }
}
</script>

<style scoped>
html, body {
  background-color: #336699;
}
</style>
