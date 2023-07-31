<template>
  <div class="text-center" v-if="$store.getters.sizePagination > 1">
    <v-container>
      <v-row justify="center">
        <v-col cols="8">
          <v-container class="max-width">
            <v-pagination
              v-model="$store.state.page"
              class="my-4"
              @update:modelValue="scrollTop"
              :length="$store.getters.sizePagination"
            ></v-pagination>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup>
import { scrollTop } from "../utils/scroll-top";
</script>
