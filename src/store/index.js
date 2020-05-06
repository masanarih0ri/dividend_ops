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
    updateStocksData(state, { id, stocks }) {
      const stocksIndex = state.stocks.findIndex((stock) => stock.id === id);
      // findIndexで引っ張ってきたindexの配列にデータをいれる
      state.stocks[stocksIndex] = stocks;
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
    updateStocksData({ getters, commit }, { id, stocks }) {
      if (getters.uid) {
        firebase
          .firestore()
          .collection(`users/${getters.uid}/stocks`)
          .doc(id)
          .update(stocks)
          .then(() => [commit('updateStocksData', { id, stocks })]);
      }
    },
  },
  getters: {
    // gettersにはstateが自動的に渡される
    userName: (state) => (state.loginUser ? state.loginUser.displayName : ''),
    photoURL: (state) => (state.loginUser ? state.loginUser.photoURL : ''),
    uid: (state) => (state.loginUser ? state.loginUser.uid : null),
    // 内側の関数(id) => state.stocks.find((stocks) => stocks.id === id)
    // これが返ってくる
    // つまりidを引数にして、stateのstocksからstocksのidと引数のidが同じものを返すということ
    // getttersを呼び出す時点でidを指定して、idにマッチするものを取得する
    getStocksById: (state) => (id) =>
      state.stocks.find((stocks) => stocks.id === id),
  },
  modules: {},
});
