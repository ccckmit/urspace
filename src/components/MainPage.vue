<template>
  <div>
    <headbar :firebase="firebase"/>
    <div>
      <sidenav/>
      <div>
        <div id="content">
          <main-content :firebase="firebase" :db="db" :to="to"/>
          <div id="footer">footer</div>
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

var db = firebaseApp.database()

export default {
  name: 'mainPage',
  props: ['to'],
  data () {
    return {
      firebase: firebase,
      firebaseApp: firebaseApp,
      db: db
    }
  },
  components: {
    Headbar,
    Sidenav,
    MainContent
  },
  created: function () {
    // `this` points to the vm instance
    console.log('op=', this.op)
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
