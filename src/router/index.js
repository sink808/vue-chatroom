import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Start from '@/components/start/start'
import Friends from '@/components/home/friends/friends'
import Chatroom from '@/components/home/chatroom/chatroom'
import Log from '@/components/home/log/log'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          name: 'friends',
          path: 'friends',
          component: Friends
        },
        {
          name: 'chatroom',
          path: 'chatroom/:name',
          component: Chatroom
        },
        {
          name: 'log',
          path: 'log',
          component: Log
        }
      ]
    }
  ]
})
