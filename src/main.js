import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import AppCustomers from '@/components/AppCustomers'
import AppProducts from '@/components/AppProducts'

const routes = [{
    path: '/customers',
    component: AppCustomers
  },
  {
    path: '/products',
    component: AppProducts
  }
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')