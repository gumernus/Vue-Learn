<template>
<h1 v-if="!result">no response</h1>
<h1 v-else>{{result}}</h1>
</template>

<script>
import axios from "axios";
export default {
  name: 'Template',
data () {
    return {
      result: null
    }
  },
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.result = response.data.disclaimer))
  }
};
</script>

<style scoped>
</style>
