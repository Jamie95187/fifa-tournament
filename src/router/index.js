import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
import Tournaments from '../views/tournaments/Tournaments.vue'
import Players from '../views/players/Players.vue'
import PlayerDetails from '../views/players/PlayerDetails.vue'
import TournamentDetails from '../views/tournaments/TournamentDetails.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/tournaments',
    name: 'Tournaments',
    component: Tournaments
  },
  {
    path: '/Players',
    name: 'Players',
    component: Players
  },
  {
    path: '/Players/:id',
    name: 'PlayerDetails',
    component: PlayerDetails,
    props: true
  },
  {
    path: '/Tournament/:id',
    name: 'TournamentDetails',
    component: TournamentDetails,
    props: true
  },
  // catchall 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
