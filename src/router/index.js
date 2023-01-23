import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MovieDetails from '../components/MovieDetails.vue'
import ActorsList from '../components/ActorsList.vue'
import ActorDetails from '../components/ActorDetails.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/movie/:id',
    name: 'home',
    component: MovieDetails
  },
  {
    path: '/actors',
    name: 'actors',
    component: ActorsList
  },
  {
    path: '/actor/:id',
    name: 'actors',
    component: ActorDetails
  },
  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/TheContact.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "about" */ '../components/TheProfile.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
