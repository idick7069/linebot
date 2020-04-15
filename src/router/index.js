import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Login from '../components/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
