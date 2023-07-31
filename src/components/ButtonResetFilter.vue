<template>
  <v-btn
    variant="outlined"
    @click="$store.dispatch(`resetFilterAction`)"
    class="outlined d-block w-100 mb-3"
  >
    Очистить фильтр
  </v-btn>
</template>
<script>
export default {};
</script>
<style></style>
