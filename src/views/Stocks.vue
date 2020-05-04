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
          <template v-slot:items="props">
            <td class="text-xs-left">{{ props.item.stockName }}</td>
            <td class="text-xs-left">{{ props.item.getStockPrice }}</td>
            <td class="text-xs-left">{{ props.item.stockCount }}</td>
            <td class="text-xs-left">{{ props.item.currentStockPrice }}</td>
            <td class="text-xs-left">{{ props.item.profitAndLoss }}</td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: '銘柄名', value: 'stockName' },
        { text: '取得単価', value: 'getStockPrice' },
        { text: '株数', value: 'stockCount' },
        { text: '現在値', value: 'currentStockPrice' },
        { text: '損益', value: 'profitAndLoss' },
      ],
      stocks: [
        {
          stockName: 'KDDI',
          getStockPrice: '2555',
          stockCount: '100',
          currentStockPrice: '3087',
          profitAndLoss: '53200',
        },
        {
          stockName: 'オリックス',
          getStockPrice: '1692',
          stockCount: '300',
          currentStockPrice: '1249.5',
          profitAndLoss: '-132750',
        },
      ],
    };
  },
};
</script>
