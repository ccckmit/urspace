import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import sms from '@/components/sms'
import landingPage from '@/components/landingPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landingPage',
      component: landingPage
    },
    {
      path: '/sms',
      name: 'sms',
      component: sms
    },
    {
      path: '/sms/:domain',
      name: 'smsDomain',
      component: sms
    },
    {
      path: '/sms/:domain/:sortby',
      name: 'smsDomainSortby',
      component: sms
    }
  ]
})
