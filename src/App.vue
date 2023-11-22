<template>
  <MainPage />
</template>

<script>
import { store } from "./store";
import axios from "axios";
import MainPage from "./components/mainPage/MainPage.vue";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    MainPage,
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
