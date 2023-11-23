<template>
  <MainPage v-if="store.page === 'home'" />
  <SearchPage v-else-if="store.page === 'search'" />
  <div id="chevron" @click="scrollUp">
    <i class="fa-solid fa-chevron-up"></i>
  </div>
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
  methods: {
    scrollUp() {
      window.scrollTo(0, 0);
    },
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

<style lang="scss" scoped>
@use "./assets/styles/partials/variables" as *;
#chevron {
  position: fixed;
  bottom: 25px;
  right: 25px;
  width: 3em;
  height: 3em;
  background-color: $textColor;
  color: $backgroundColor;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: $primaryColor;
    color: $textColor;
  }
}
</style>
