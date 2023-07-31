<template>
  <div><b>Цена:</b></div>
  <v-card>
    <v-row class="mt-1 px-3 justify-space-between">
      <v-col cols="5" class="px-7 rounded-pill b-1">
        <span> от {{ resultMinValue }} ₽</span>
      </v-col>
      <v-col cols="1"> - </v-col>
      <v-col cols="5" class="px-7 rounded-pill b-1">
        <span>до {{ resultMaxValue }} ₽</span>
      </v-col>
    </v-row>

    <v-card-text>
      <v-range-slider
        v-model="valueRange"
        :start="handlerInputRange()"
        strict
      ></v-range-slider>
    </v-card-text>
  </v-card>
</template>
<script>
import { mapFields } from "vuex-map-fields";
export default {
  data() {
    return {
      value: [0, 100],
    };
  },

  computed: {
    ...mapFields(["valueRange"]),
    resultMaxValue() {
      return Math.floor(
        (this.$store.state.maxValuePrice / 100) * this.valueRange[1]
      ).toLocaleString("ru-RU");
    },
    resultMinValue() {
      return Math.floor(
        (this.$store.state.maxValuePrice * this.valueRange[0]) / 100
      ).toLocaleString("ru-RU");
    },
  },
  methods: {
    handlerInputRange() {
      const price = [
        Math.floor(
          (this.$store.state.maxValuePrice * this.valueRange[0]) / 100
        ),
        Math.floor(
          (this.$store.state.maxValuePrice / 100) * this.valueRange[1]
        ),
      ];
      this.$store.dispatch("priceActionFiltered", price);
    },
  },
};
</script>

<style>
.b-1 {
  border: 1px solid #000;
}
</style>
