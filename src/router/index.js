import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import MainPage from '@/components/MainPage'
import LandingPage from '@/components/LandingPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: __dirname,
  routes: [
    { path: '/', component: LandingPage },
    { path: '/:to', component: MainPage, props: true },
    { path: '/:to/:domain', component: MainPage, props: true },
    { path: '/:to/:domain/:orderBy', component: MainPage, props: true },
    { path: '/:to/:domain/:orderBy/:sort', component: MainPage, props: true }
    /*
    { path: '/login', component: MainPage, props: { to: 'login' } },
    { path: '/main', component: MainPage, props: { to: 'sms' } },
    { path: '/sms', component: MainPage, props: { to: 'sms' } },
    { path: '/sms/:domain', component: MainPage, props: { to: 'sms' } },
    { path: '/sms/:domain/:sortby', component: MainPage, props: { to: 'sms' } }
    */
  ]
})
