<template>
  <v-container text-xs-center justify-center>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>銘柄一覧</h1>
      </v-flex>

      <v-flex xs12 mt-5 mr-5 text-right>
        <router-link :to="{ name: 'stocks_edit' }">
          <v-btn color="info">
            追加
          </v-btn>
        </router-link>
      </v-flex>

      <v-flex xs12 mt-5 justify-center>
        <v-data-table :headers="headers" :items="stocks">
          <template v-slot:item.action="{ item }">
            <router-link
              :to="{ name: 'stocks_edit', params: { stocks_id: item.id } }"
            >
              <v-icon small class="mr-2">mdi-pencil</v-icon>
            </router-link>

            <v-icon small class="mr-2" @click="deleteConfirm(item.id)"
              >mdi-delete</v-icon
            >
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  created() {
    // データをストアに取得しにいく
    this.stocks = this.$store.state.stocks;
  },
  data() {
    return {
      headers: [
        { text: '銘柄名', value: 'stockName' },
        { text: '配当回数', value: 'dividendsCount' },
        { text: '配当月', value: 'dividendMonths' },
        { text: '直近配当利回り', value: 'dividendYield' },
        { text: 'コメント', value: 'commentForStock' },
        { text: '編集', value: 'action', sortable: false },
      ],
      stocks: [],
    };
  },
  methods: {
    deleteConfirm(id) {
      if (confirm('本当に削除しますか？')) {
        this.deleteStocksData({ id });
      }
    },
    ...mapActions(['deleteStocksData']),
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>
