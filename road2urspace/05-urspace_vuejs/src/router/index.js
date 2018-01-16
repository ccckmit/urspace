import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import urspace from '@/components/urspace'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'urspace',
      component: urspace
    },
    {
      path: '/hello-world',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
