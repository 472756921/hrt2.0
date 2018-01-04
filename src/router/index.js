import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import cour from '@/page/cour.vue';
//公告管理
import scrolles from '@/page/announcement/scroll.vue';
import a_list from '@/page/announcement/a_list.vue';
import add from '@/page/announcement/add.vue';
//团队管理
import t_list from '@/page/team/t_list.vue';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/cour',
      name: 'cour',
      component: cour
    },
    {
      path: '/scroll',
      name: 'scroll',
      component: scrolles
    },
    {
      path: '/a_list/:classes',
      name: 'a_list',
      component: a_list
    },
    {
      path: '/addAn',
      name: 'add',
      component: add
    },
    {
      path: '/t_list',
      name: 't_list',
      component: t_list
    },
  ]
})
