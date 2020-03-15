import VueRouter from 'vue-router';
import Main from '../pages/Main.vue';
import Friends from '../pages/Friends.vue';
import Mine from '../pages/Mine.vue';

export default new VueRouter({
  routes: [
    {path: '/', redirect: '/main'},
    {path: '/main', component: Main},
    {path: '/friends', component: Friends},
    {path: '/mine', component: Mine},
  ]
})
