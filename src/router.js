import Vue from 'vue';
import Router from 'vue-router';

import TopPostsView from '@/views/TopPostsView'
import PostDetails from '@/views/PostDetails'


Vue.use(Router);

export const router = new Router({
  routes: [
    {
      path:'',
      name: 'top-posts',
      component: TopPostsView
    },
    {
      path:'/details',
      name:'post-details',
      component:PostDetails
    }
  ]
});
