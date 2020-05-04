import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
  },
  actions: {
    // actionsのメソッドには自動でcontextオブジェクトが渡される。
    // 下の書き方だとcontext.commitメソッドだけを受け取る事になる。
    toggleSideNav({ commit }) {
      // このcommitメソッドはmutationsのメソッドを呼び出すために使われる。
      commit('toggleSideNav');
    },
    addStocksData({ commit }, stocks) {
      commit('addStocksData', stocks);
    },
  },
  modules: {},
});
