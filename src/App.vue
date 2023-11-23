<template>
  <MainPage v-if="store.page === 'home'" />
  <SearchPage v-else-if="store.page === 'search'" />
</template>

<script>
import { store } from "./store";
import axios from "axios";
import MainPage from "./components/mainPage/MainPage.vue";
import SearchPage from "./components/searchPage/SearchPage.vue";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    MainPage,
    SearchPage,
  },
  // methods: {
  //   callMovies() {
  //     const url = this.store.apiUrl + this.store.endPoint;
  //     axios.get(url, { params: this.store.params }).then((res) => {
  //       this.store.movies = res.data.results;
  //     });
  //   },
  // },
  // created() {
  //   this.callMovies();
  // },
};
</script>

<style lang="scss" scoped></style>
