import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginUser: null,
    drawer: false,
    stocks: [],
  },
  mutations: {
    // mutationsのメソッドには自動でstateが渡ってくる
    toggleSideNav(state) {
      state.drawer = !state.drawer;
    },
    addStocksData(state, stocks) {
      state.stocks.push(stocks);
    },
    setLoginUser(state, user) {
      state.loginUser = user;
    },
    deleteLoginUser(state) {
      state.loginUser = null;
    },
  },
  actions: {
    login() {
      const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(googleAuthProvider);
    },
    logout() {
      firebase.auth().signOut();
    },
    // actionsのメソッドには自動でcontextオブジェクトが渡される。
    // 下の書き方だとcontext.commitメソッドだけを受け取る事になる。
    toggleSideNav({ commit }) {
      // このcommitメソッドはmutationsのメソッドを呼び出すために使われる。
      commit('toggleSideNav');
    },
    addStocksData({ commit }, stocks) {
      commit('addStocksData', stocks);
    },
    setLoginUser({ commit }, user) {
      commit('setLoginUser', user);
    },
    deleteLoginUser({ commit }) {
      commit('deleteLoginUser');
    },
  },
  modules: {},
});
