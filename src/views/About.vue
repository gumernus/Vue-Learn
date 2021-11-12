<template>
<h1 v-if="count === 0">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
</template>

<script>
export default {
  name: 'Template',
  data() {
    return {
      count: 0
    }
  }
}
</script>

<style scoped>
</style>
