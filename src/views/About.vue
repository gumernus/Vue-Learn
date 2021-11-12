<template>
  <h1 v-if="!result">
    <div class="placeholder-item"><br /></div>
    <br>
    <div class="placeholder-item"><br /><br /></div>
  </h1>

  <h1 v-else>
    <div class="placeholder-item">{{ result.chartName }}</div>
    <br />
    <div class="placeholder-item">{{ result.disclaimer }}</div>
  </h1>

  <!-- <h1>{{result.disclaimer}}</h1> -->
</template>

<script>
import axios from "axios";
export default {
  name: "Template",
  data() {
    return {
      result: null,
    };
  },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => (this.result = response.data));
  },
};
</script>

<style scoped>
.placeholder-item {
  box-shadow: 0 4px 10px 0 rgba(33, 33, 33, 0.15);
  border-radius: 20px;
  padding: 20px;
  position: relative;
  overflow: hidden;
  background-color: #fff;
}
</style>
