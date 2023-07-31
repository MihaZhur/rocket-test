<template>
  <div class="mb-1"><b>Поиск</b></div>
  <v-text-field
    class="mb-5"
    density="compact"
    variant="outlined"
    placeholder="Поиск стран"
    prepend-inner-icon="search"
    v-model="searchContry"
    single-line
    hide-details
  ></v-text-field>
  <v-card variant="outlined" class="mb-5">
    <v-virtual-scroll
      :height="200"
      :items="filteredItems"
      v-if="filteredItems.length > 0"
    >
      <template v-slot:default="{ item }">
        <v-col cols="5`">
          <v-checkbox
            class="hp-40"
            :label="item.name"
            v-model="item.checked"
            label="success"
            @change="handlerCheckbox"
          />
        </v-col>
      </template>
    </v-virtual-scroll>
    <div v-else class="px-10 py-10 text-center">
      К сожалению, по вашему запросу ничего не найдено :(
    </div>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      searchContry: "",
    };
  },
  mounted() {
    this.handlerCheckbox();
  },
  computed: {
    filteredItems() {
      return this.$store.getters.countries.filter((country) =>
        country.name.includes(this.searchContry)
      );
    },
  },
  methods: {
    handlerCheckbox() {
      const itemChecked = this.$store.getters.countries.filter(
        (item) => item.checked
      );
      this.$store.dispatch("filteredCountriesAction", itemChecked);
    },
  },
};
</script>
<style>
.hp-40 {
  height: 40px;
}
</style>
