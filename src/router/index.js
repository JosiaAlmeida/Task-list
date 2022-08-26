import { createRouter, createWebHashHistory } from 'vue-router'
import taskMain from '../views/taskMain.vue'

const routes = [
  {
    path: '/',
    name: 'taskMain',
    component: taskMain
  }
   
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
