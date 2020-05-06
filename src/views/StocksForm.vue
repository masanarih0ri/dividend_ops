<template>
  <v-container text-xs-center>
    <v-layout row wrap justify-center>
      <v-flex xs12 class="text-center">
        <h1>銘柄を編集</h1>
      </v-flex>

      <v-flex xs5 mt-5>
        <v-card>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="stocks.stockName"
                label="銘柄名"
              ></v-text-field>
              <v-text-field
                v-model="stocks.dividendsCount"
                label="配当回数"
              ></v-text-field>
              <v-text-field v-model="stocks.dividendMonths" label="配当月">
              </v-text-field>
              <v-text-field
                v-model="stocks.dividendYield"
                label="直近配当利回り"
              ></v-text-field>
              <v-text-field
                v-model="stocks.commentForStock"
                label="コメント"
              ></v-text-field>
              <div class="text-center">
                <v-btn @click="$router.push({ name: 'Stocks' })"
                  >キャンセル</v-btn
                >
                <v-btn color="info" class="ml-2" @click="submit">保存</v-btn>
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  created() {
    if (!this.$route.params.stocks_id) return;
    // gettersメソッドの呼び出し
    // 引数にidを渡しstoreで作ったgetStocksByIdを使ってコンポーネントにデータを返す
    const stocks = this.$store.getters.getStocksById(
      this.$route.params.stocks_id
    );
    if (stocks) {
      this.stocks = stocks;
    } else {
      this.$router.push({ name: 'Stocks' });
    }
  },
  data() {
    return {
      stocks: {},
    };
  },
  methods: {
    submit() {
      if (this.$route.params.stocks_id) {
        this.updateStocksData({
          id: this.$route.params.stocks_id,
          stocks: this.stocks,
        });
      } else {
        this.addStocksData(this.stocks);
      }
      this.$router.push({ name: 'Stocks' });
      this.stocks = {};
    },
    ...mapActions(['addStocksData', 'updateStocksData']),
  },
};
</script>
