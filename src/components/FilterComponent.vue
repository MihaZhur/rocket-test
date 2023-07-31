<template>
  <v-col cols="12">
    <seacrh-contry-component />
    <type-accommodation-component />
    <checkboxes-stars-component />
    <reviews-count-component />
    <range-component />

    <v-btn
      @click="handlerFiltered"
      variant="outlined"
      class="outlined d-block w-100 mb-3 bg-primary"
    >
      Применить фильтр
    </v-btn>
    <button-reset-filter />
  </v-col>
</template>
<script>
import RangeComponent from "./RangeComponent.vue";
import SeacrhContryComponent from "./SeacrhContryComponent.vue";
import TypeAccommodationComponent from "./TypeAccommodationComponent.vue";
import CheckboxesStarsComponent from "./CheckboxesStarsComponent.vue";
import ReviewsCountComponent from "./ReviewsCountComponent.vue";
import ButtonResetFilter from "./ButtonResetFilter.vue";

export default {
  methods: {
    handlerFiltered() {
      this.$store.dispatch("filteredAction");
    },
  },
  components: {
    RangeComponent,
    SeacrhContryComponent,
    TypeAccommodationComponent,
    CheckboxesStarsComponent,
    ReviewsCountComponent,
    ButtonResetFilter,
  },
};
</script>

<style></style>
