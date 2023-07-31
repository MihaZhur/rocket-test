<template>
  <div class="mb-3">Количество звезд</div>
  <v-card variant="outlined" class="mb-5">
    <div variant="outline" v-for="(star, i) in stars">
      <v-checkbox
        class="hp-50"
        v-model="star.checked"
        :label="
          star.value +
          ' ' +
          getWordForm(
            star.value,
            starsLabel.singular,
            starsLabel.plural,
            starsLabel.pluralGenitive
          )
        "
      ></v-checkbox>
    </div>
  </v-card>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import { getWordForm } from "../utils/get-word-form";

export default {
  data() {
    return {
      select: [],
      starsLabel: {
        singular: "звезда",
        plural: "звезды",
        pluralGenitive: "звезд",
      },
    };
  },
  computed: {
    ...mapFields(["filterHotels.stars"]),
  },
  methods: {
    // handlerSelectStar(star) {
    //   const check = this.select.find((item) => item === star.value);
    //   if (!check) {
    //     this.select.push(star.value);
    //   } else {
    //     this.select = this.select.filter((item) => item != star.value);
    //   }
    //   this.$store.dispatch("starActionFiltered", this.select);
    // },
  },
  setup() {
    return { getWordForm };
  },
};
</script>
<style>
.hp-50 {
  height: 50px;
}
</style>
