// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 1. Define route components.
// These can be imported from other files
const One = { template: '<div>one</div>' }
const Two = { template: '<div>two</div>' }
const Three = { template: '<div>three</div>' }
const Four = { template: '<div>four</div>' }
const Five = { template: '<div>five</div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
const routes = [
  {
    path: '',
    redirect: '/one',
    component: App,
    children: [
      {
        path: '/one',
        component: One
      },
      {
        path: '/two',
        component: Two
      },
      {
        path: '/three',
        component: Three
      },
      {
        path: '/four',
        component: Four
      },
      {
        path: '/five',
        component: Five
      }
    ]
  }

]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router
})

app.$mount('#app')

