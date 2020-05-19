import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "../store";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/event/:event',
    name: 'event',
    component: () => import('../views/Event.vue')
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import('../views/Gallery.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  store.commit('loading', true);
  return next();
});

router.afterEach(() => {
  setTimeout(() => store.commit('loading', false), 2000);
})


export default router
