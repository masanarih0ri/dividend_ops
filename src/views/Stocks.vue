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
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  created() {
    // データをストアに取得しにいく
    this.stocks = this.$store.state.stocks;
  },
  data() {
    return {
      headers: [
        { text: '銘柄名', value: 'stockName' },
        { text: '取得単価', value: 'getStockPrice' },
        { text: '株数', value: 'stockCount' },
        { text: '現在値', value: 'currentStockPrice' },
        { text: '損益', value: 'profitAndLoss' },
        { text: '編集', value: 'action', sortable: false },
      ],
      stocks: [],
    };
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>
