import Vue from 'vue'
import Router from 'vue-router'
import Verified from "../components/Verified";
//components
import MainPage from "../components/MainPage";

//grouped routes
import auth from "../pages/auth/auth";
import user from "../pages/user/user";

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    { path: '/', name: 'MainPage', component: MainPage },
    ...auth,
    ...user,
    {path: '/verify', name: 'Verified', component: Verified}
  ]
})
