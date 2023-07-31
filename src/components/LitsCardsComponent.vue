<template>
  <div class="list-items">
    <v-list lines="one" v-if="currentPageHotels.length > 0">
      <card-component
        v-for="hotel in currentPageHotels"
        :key="hotel.name"
        :hotel="hotel"
      />
    </v-list>
    <div v-else>
      <empty-list-component />
    </div>
  </div>
</template>
<script>
import CardComponent from "./CardComponent.vue";
import EmptyListComponent from "./EmptyListComponent.vue";
export default {
  mounted() {
    this.getHotels();
  },
  methods: {
    async getHotels() {
      await this.$store.dispatch("getHotels");
    },
  },
  computed: {
    currentPageHotels() {
      return this.$store.getters.currentPageHotels;
    },
  },
  components: {
    CardComponent,
    EmptyListComponent,
  },
};
</script>
<style></style>
