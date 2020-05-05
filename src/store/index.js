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
    // mutationsの役割はデータの更新
    // mutationsのメソッドには自動でstateが渡ってくる
    toggleSideNav(state) {
      state.drawer = !state.drawer;
    },
    addStocksData(state, { id, stocks }) {
      stocks.id = id;
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
    fetchStocks({ getters, commit }) {
      firebase
        .firestore()
        .collection(`users/${getters.uid}/stocks`)
        .get()
        .then((snapshot) => {
          // ここでデータを受け取り、stocksに追加している
          snapshot.forEach((doc) =>
            commit('addStocksData', { id: doc.id, stocks: doc.data() })
          );
        });
    },
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
    addStocksData({ commit, getters }, stocks) {
      if (getters.uid) {
        // addメソッドの処理結果として自動作成されたIDを受け取るとこができるので、mutationsに渡すようにする
        firebase
          .firestore()
          .collection(`users/${getters.uid}/stocks`)
          .add(stocks)
          .then((doc) => {
            commit('addStocksData', { id: doc.id, stocks });
          });
      }
    },
    setLoginUser({ commit }, user) {
      commit('setLoginUser', user);
    },
    deleteLoginUser({ commit }) {
      commit('deleteLoginUser');
    },
  },
  getters: {
    // gettersにはstateが自動的に渡される
    userName: (state) => (state.loginUser ? state.loginUser.displayName : ''),
    photoURL: (state) => (state.loginUser ? state.loginUser.photoURL : ''),
    uid: (state) => (state.loginUser ? state.loginUser.uid : null),
  },
  modules: {},
});
