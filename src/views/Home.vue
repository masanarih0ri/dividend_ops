<template>
  <div class="home">
    <Stocks />
  </div>
</template>

<script>
// @ is an alias to /src
import Stocks from "@/components/Stocks.vue";

export default {
  name: "Home",
  components: {
    Stocks
  }
};
</script>
