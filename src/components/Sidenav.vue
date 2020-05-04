<template>
  <v-container fluid>
    <v-navigation-drawer v-model="$store.state.drawer" absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img
            src="https://avatars2.githubusercontent.com/u/20497053?s=400&u=167ec6c698d580978c55920da8e921f7dd891346&v=4"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Masanari Hori</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: 'ホーム', icon: 'mdi-menu', link: { name: 'Home' } },
        { title: '銘柄一覧', icon: 'mdi-menu', link: { name: 'Stocks' } },
      ],
    };
  },
};
</script>
