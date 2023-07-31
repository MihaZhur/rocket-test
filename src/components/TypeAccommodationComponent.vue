<template>
  <v-combobox
    variant="outlined"
    v-model="type"
    :items="items"
    label="Выбрать тип"
    multiple
    class="mb-1"
  >
    <template v-slot:selection="data">
      <v-chip
        :key="JSON.stringify(data.item)"
        v-bind="data.attrs"
        :disabled="data.disabled"
        size="small"
        @click:close="data.parent.selectItem(data.item)"
      >
        <template v-slot:prepend>
          <v-avatar class="bg-accent text-uppercase" start>{{
            data.item.title.slice(0, 1)
          }}</v-avatar>
        </template>
        {{ data.item.title }}
      </v-chip>
    </template>
  </v-combobox>
</template>
<script>
import { mapFields } from "vuex-map-fields";
export default {
  data() {
    return {
      select: [],
      items: ["Апартаменты", "Отель"],
    };
  },
  computed: {
    ...mapFields(["filterHotels.type"]),
  },
};
</script>
