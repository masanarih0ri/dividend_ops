<template>
  <v-app>
    <v-card color="grey lighten-4" flat tile>
      <v-toolbar>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>資産管理ツール</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
    </v-card>
    <v-content>
      <SideNav />
    </v-content>
  </v-app>
</template>

<script>
import SideNav from './components/Sidenav.vue';

export default {
  name: 'App',

  components: {
    SideNav,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss" scoped></style>
