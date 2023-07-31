<template>
  <v-fade-transition>
    <v-card variant="outlined" class="px-4 py-4 mb-10" v-show="expand">
      <v-card-actions class="justify-space-between">
        <v-card-title class="text-h6 text-md-h5 text-lg-h4">{{
          hotel.name
        }}</v-card-title>
        <v-card-title class="text-h6 text-md-h5 text-lg-h4"
          >{{ price }} ₽</v-card-title
        >
      </v-card-actions>
      <v-card-actions>
        <v-rating
          class="h-25 mr-10"
          readonly
          half-increments
          color="grey"
          size="30"
          active-color="yellow-darken-3"
          bg-color="grey"
          v-model="hotel.rating"
        ></v-rating>

        <v-row class="align-center">
          <span class="mr-10">{{ hotel.type }}</span>

          <div class="mr-10 d-flex align-center">
            <i class="material-icons mr-1">rate_review</i>
            <div class="mr-10">{{ hotel.reviews_amount }} отзыва</div>
          </div>
          <div class="mr-10 d-flex align-center">
            <i class="material-icons">location_pin</i>
            <div class="mr-10">{{ hotel.country }}</div>
          </div>
        </v-row>
      </v-card-actions>
      <v-card-actions class="px-4">
        <v-row justify="space-between">
          <v-col cols="8">
            <div>
              {{ hotel.description }}
            </div>
          </v-col>
        </v-row>
        <v-btn prepend-icon="credit_card" class="bg-primary w-25 d-flex"
          >Забронировать</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-fade-transition>
</template>
<script>
// check
export default {
  props: {
    hotel: {
      type: Object,
      requered: true,
    },
  },
  data() {
    return {
      rating: 3.5,
      expand: false,
    };
  },
  mounted() {
    this.expand = true;
  },
  computed: {
    price() {
      return Math.floor(this.hotel.min_price).toLocaleString("ru-RU");
    },
  },
};
</script>
