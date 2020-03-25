import VueRouter from 'vue-router';
import MainActivity from "../pages/MainActivity/MainActivity";
import LogIn from "../pages/Account/LogIn";
import SignIn from "../pages/Account/SignIn";
import Account from "../pages/Account/Account";
import EditProfile from "../pages/EditProfile/EditProfile";
import Setting from "../pages/Setting/Setting";

export default new VueRouter({
  routes: [
    { path: '/', redirect: '/account/login' },
    { path: '/main', name: 'main', component: MainActivity },
    {
      path: '/account',
      component: Account,
      children: [
        {path: 'login', name: "login", component:LogIn },
        {path: 'signin', name: "signin", component: SignIn},
      ]

    },
    { path: '/editProfile', name: 'edit', component: EditProfile },
    { path: '/setting', name: 'setting', component: Setting }
  ]
})
