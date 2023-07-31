<template>
  <v-app id="inspire">
    <v-navigation-drawer style="width: 480px" v-model="drawer">
      <filter-component />
    </v-navigation-drawer>
    <v-app-bar :style="{ paddingLeft: drawer ? '230px' : '0px' }">
      <v-app-bar-nav-icon>
        <i class="material-icons">settings</i>
      </v-app-bar-nav-icon>

      <v-toolbar-title>Rocket test</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container :style="{ paddingLeft: drawer ? '230px' : '0px' }">
        <lits-cards-component />
        <pagination-component />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import FilterComponent from "../components/FilterComponent.vue";
import LitsCardsComponent from "../components/LitsCardsComponent.vue";
import PaginationComponent from "../components/PaginationComponent.vue";
export default {
  data: () => ({ drawer: true }),
  components: {
    FilterComponent,
    LitsCardsComponent,
    PaginationComponent,
  },
};
</script>

<style></style>
