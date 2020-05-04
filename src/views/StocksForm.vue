<template>
  <v-container text-xs-center>
    <v-layout row wrap justify-center>
      <v-flex xs12 class="text-center">
        <h1>銘柄を追加</h1>
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
                v-model="stocks.getStockPrice"
                label="取得単価"
              ></v-text-field>
              <v-text-field
                v-model="stocks.stockCount"
                label="株数"
              ></v-text-field>
              <v-text-field
                v-model="stocks.currentStockPrice"
                label="現在値"
              ></v-text-field>
              <v-text-field
                v-model="stocks.profitAndLoss"
                label="損益"
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
  data() {
    return {
      stocks: {},
    };
  },
  methods: {
    submit() {
      this.addStocksData(this.stocks);
      this.$router.push({ name: 'Stocks' });
      this.stocks = {};
    },
    ...mapActions(['addStocksData']),
  },
};
</script>
