import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import MainView from '@/components/MainView'
import LogManger from '@/components/MainRouterView/LogManger'
import SetThemes from '@/components/Themes/SetThemes'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Login', component: Login},
    {path: '/MainView', name: 'MainView', component: MainView,
    children: [
      {path:'/LogManger',component: LogManger},
      {path:'/SetThemes',component: SetThemes},
    ]}
  ]
})
