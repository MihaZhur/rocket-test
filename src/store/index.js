import { createStore } from "vuex";
import { getField, updateField } from "vuex-map-fields";

import { multipleChoiceFiltering } from "../utils/multiple-choice-filtering";
import { priceFiltered } from "../utils/price-filter";
import { reviewsFilter } from "../utils/reviews-filter";

export default createStore({
  state: {
    hotels: [],
    cachesHostels: [],
    currentPageHotels: [],
    selectType: [],
    page: 1,
    loading: false,
    valueRange: [0, 100],
    limit: 3,
    countries: [],
    maxValuePrice: 0,
    cachesMaxValuePrice: 0,
    filterHotels: {
      searchCountry: [],
      type: [],
      stars: [
        { id: 1, value: 1, checked: false },
        { id: 2, value: 2, checked: false },
        { id: 3, value: 3, checked: false },
        { id: 4, value: 4, checked: false },
        { id: 5, value: 5, checked: false },
      ],
      reviews: "",
      price: {
        min: 0,
        max: 0,
      },
    },
  },
  getters: {
    hotels: (state) => state.hotels,
    currentPageHotels: (state) => {
      const startIndex = (state.page - 1) * state.limit;
      const endIndex = startIndex + state.limit;
      return state.hotels.slice(startIndex, endIndex);
    },
    sizePagination: (state) => Math.ceil(state.hotels.length / state.limit),
    countries: (state) => state.countries,
    selectType: (state) => state.selectType,
    loading: (state) => state.loading,
    getField,
  },
  mutations: {
    setHotels(state, hotels) {
      state.countries = [...new Set(hotels.map((item, i) => item.country))].map(
        (country, idx) => {
          return {
            id: idx + 1,
            name: country,
            checked: false,
          };
        }
      );
      state.cachesMaxValuePrice = hotels.reduce((max, item) => {
        return item.min_price > max ? item.min_price : max;
      }, 0);
      state.maxValuePrice = state.cachesMaxValuePrice;
      state.hotels = hotels;
      state.cachesHostels = hotels;
    },
    setFilter(state) {
      state.hotels = state.cachesHostels;

      let filteredCards = multipleChoiceFiltering(
        state.hotels,
        `country`,
        state.filterHotels.searchCountry
      );
      filteredCards = multipleChoiceFiltering(
        filteredCards,
        "type",
        state.filterHotels.type
      );
      const selectedStars = state.filterHotels.stars
        .filter((star) => star.checked)
        .map((star) => star.value);

      filteredCards = multipleChoiceFiltering(
        filteredCards,
        "stars",
        selectedStars
      );

      filteredCards = reviewsFilter(filteredCards, state.filterHotels.reviews);

      filteredCards = priceFiltered(filteredCards, state.filterHotels.price);

      state.hotels = filteredCards;
      state.page = 1;
      // console.log(state.hotels);
    },

    setCountriesFilter(state, checkboxes) {
      state.filterHotels.searchCountry = checkboxes.map((item) => item.name);
    },
    setTypeFilter(state, select) {
      state.filterHotels.type = select;
    },
    setStarsFilter(state, stars) {
      state.filterHotels.stars = stars;
    },
    setReviewsFilter(state, reviews) {
      state.filterHotels.reviews = reviews;
    },
    setPriceFilter(state, price) {
      state.filterHotels.price.min = price[0];
      state.filterHotels.price.max = price[1];
    },
    resetFilter(state) {
      state.filterHotels.price.max = 0;
      state.filterHotels.price.min = 0;
      state.filterHotels.reviews = "";
      state.filterHotels.type = [];
      state.filterHotels.searchCountry = [];
      state.hotels = state.cachesHostels;
      state.countries.forEach((item) => (item.checked = false));
      state.maxValuePrice = state.cachesMaxValuePrice;
      state.valueRange[0] = 0;
      state.valueRange[1] = 100;
      state.filterHotels.stars.forEach((item) => (item.checked = false));
    },
    updateField,
  },
  actions: {
    async getHotels({ commit }) {
      try {
        const response = await fetch("./hotels.json");
        const data = await response.json();
        commit("setHotels", data.hotels);
      } catch (err) {
        console.log(err);
      }
    },

    filteredCountriesAction({ commit }, checkboxes) {
      commit("setCountriesFilter", checkboxes);
    },
    typeFilterAction({ commit }, select) {
      console.log(select);
      commit("setTypeFilter", select);
    },
    starActionFiltered({ commit }, stars) {
      console.log(stars);
      commit("setStarsFilter", stars);
    },
    reviewsActionFiltered({ commit }, value) {
      commit("setReviewsFilter", value);
    },
    priceActionFiltered({ commit }, price) {
      commit("setPriceFilter", price);
    },
    filteredAction({ commit }) {
      commit("setFilter");
    },
    resetFilterAction({ commit }) {
      commit("resetFilter");
    },
  },
  modules: {},
});
