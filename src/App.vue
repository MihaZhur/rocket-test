<template>
  <component :is="MainLayouts" />
</template>

<script setup>
import MainLayouts from "./layouts/MainLayouts.vue";
</script>

<script>
export default {
  components: {
    MainLayouts,
  },
};
</script>
