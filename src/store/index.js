import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
  },
  mutations: {
    // mutationsのメソッドには自動でstateが渡ってくる
    toggleSideNav(state) {
      state.drawer = !state.drawer;
    },
  },
  actions: {
    // actionsのメソッドには自動でcontextオブジェクトが渡される。
    // 下の書き方だとcontext.commitメソッドだけを受け取る事になる。
    toggleSideNav({ commit }) {
      // このcommitメソッドはmutationsのメソッドを呼び出すために使われる。
      commit('toggleSideNav');
    },
  },
  modules: {},
});
