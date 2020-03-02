import VueRouter from 'vue-router';
import Main from '../Pages/Main.vue';
import Friends from '../Pages/Friends.vue';
import Mine from '../Pages/Mine.vue';

export default new VueRouter({
  routes: [
    {path: '/', redirect: '/main'},
    {path: '/main', component: Main},
    {path: '/friends', component: Friends},
    {path: '/mine', component: Mine},
  ]
})