import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import firebase from 'firebase';
Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: 'AIzaSyB4NWKqqUjXRuHwCRJQP_JHbxZ2tjurUjQ',
  authDomain: 'stocks-ops.firebaseapp.com',
  databaseURL: 'https://stocks-ops.firebaseio.com',
  projectId: 'stocks-ops',
  storageBucket: 'stocks-ops.appspot.com',
  messagingSenderId: '189512093186',
  appId: '1:189512093186:web:7de25ce281982dca9f211b',
  measurementId: 'G-HXBHEDYG0J',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
