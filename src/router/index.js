import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Login from '../components/login.vue'
import Root from '../components/root.vue'
import CustomerList from '../components/customerList.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/root',
      name: 'RootPage',
      component: Root,
      children: [{
        path: 'customerList',
        component: CustomerList
      }]
    }
  ]
})