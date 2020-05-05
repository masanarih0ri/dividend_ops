<template>
  <v-app>
    <v-card color="grey lighten-4" flat tile>
      <v-toolbar>
        <v-app-bar-nav-icon
          @click.stop="toggleSideNav"
          v-show="$store.state.loginUser"
        ></v-app-bar-nav-icon>
        <v-toolbar-title>資産管理ツール</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items v-if="$store.state.loginUser">
          <v-btn @click="logout">ログアウト</v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-card>
    <SideNav />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';
import SideNav from './components/Sidenav.vue';
import firebase from 'firebase';

export default {
  name: 'App',

  components: {
    SideNav,
  },

  created() {
    // onAuthStateChangedは引数に認証の状態が変わった時に呼び出されるコールバック関数を受け取る。ログインした場合はコールバック関数にuserのオブジェクトを渡し、ログアウトしたらnullを渡す
    firebase.auth().onAuthStateChanged((user) => {
      // userオブジェクトがある場合はsetLoginUserでuserオブジェクトをセットする
      if (user) {
        this.setLoginUser(user);
        this.fetchStocks();
        if (this.$router.currentRoute.name === 'Home') {
          this.$router.push({ name: 'Stocks' });
        }
      } else {
        this.deleteLoginUser();
        this.$router.push({ name: 'Home' });
      }
    });
  },

  data: () => ({
    //
  }),
  methods: {
    ...mapActions([
      'toggleSideNav',
      'setLoginUser',
      'logout',
      'deleteLoginUser',
      'fetchStocks',
    ]),
  },
};
</script>
<style lang="scss" scoped></style>
