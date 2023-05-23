import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'player',
    component: () => import('@/views/player/index.vue')
  },
  {
    path: '/cat',
    name: 'cat',
    component: () => import('@/views/cat.vue')
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/wedding',
    name: 'wedding',
    component: () => import('@/views/wedding.vue')
  },
  {
    path: '/tables',
    name: 'tables',
    component: () => import('@/views/tables/index.vue'),
    props: true,
    redirect: {name: 'list1'},
    children: [{
      path: 'list1',
      name: 'list1',
      component: () => import('@/views/tables/list1.vue'),
      props: true,
    },{
      path: 'list2',
      name: 'list2',
      component: () => import('@/views/tables/list2.vue'),
      props: true,
    },{
      path: 'list3',
      name: 'list3',
      component: () => import('@/views/tables/list3.vue'),
      props: true,
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/cat',
  routes
})

export default router
