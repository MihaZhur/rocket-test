<template>
  <div class="mb-3">
    <b> Количество отзывов (от) </b>
  </div>

  <v-text-field
    variant="outlined"
    :value="reviews"
    @input="(event) => validateNumInput(event.target.value)"
    label="Например, от 10"
    required
  ></v-text-field>
</template>
<script>
import { mapFields } from "vuex-map-fields";
export default {
  data() {
    return {
      ratingCount: ``,
    };
  },
  computed: {
    ...mapFields(["filterHotels.reviews"]),
  },
  methods: {
    validateNumInput(value) {
      const regex = /[^0-9]/g;
      const result = value.replace(regex, ``);
      this.ratingCount = result;
      this.$store.dispatch("reviewsActionFiltered", this.ratingCount);
    },
  },
};
</script>
<style></style>
