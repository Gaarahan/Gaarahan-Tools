import Vuex from 'vuex';
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      username: '',
      registerTime: 0,
      email: ''
    },
    friends: [],
    hasLogin: false
  },
  mutations: {
    setLoginInfo (state, val) {
      state.hasLogin = true;
      state.userInfo = Object.assign({}, val.userInfo);
      state.friends = Object.assign({}, val.friends);
    },
    setLogout (state) {
      state.hasLogin = false;
      state.userInfo = {
        username: '',
        registerTime: 0,
        email: ''
      };
      state.friends = [];
    }
  }
})
