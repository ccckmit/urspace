import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import MainPage from '@/components/MainPage'
import LandingPage from '@/components/LandingPage'

Vue.use(Router)

function setProps (route) {
  return {
    page: route.params.page || 'sms',
    domain: route.params.domain || 'all',
    op: route.params.op || 'new',
    uid: route.params.uid || ''
  }
}

export default new Router({
  // mode: 'history',
  // base: __dirname,
  routes: [
    { path: '/', component: LandingPage },
    // { path: '/login', component: MainPage, props: { page: 'login' } },
    { path: '/:page', component: MainPage, props: setProps },
    { path: '/:page/:domain', component: MainPage, props: setProps }, // props: true
    { path: '/:page/:domain/:op', component: MainPage, props: setProps },
    { path: '/:page/:domain/:op/:uid', component: MainPage, props: setProps }
  ]
})
