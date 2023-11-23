<template>
  <div class="py-3">
    <div class="jumbo-search">
      <div class="jum">
        <div>
          <h2>Your results:</h2>
          <span
            ><span class="text-green" @click="store.page = 'home'"
              >moviestar</span
            >
            >{{ store.searchedOptions }}</span
          >
        </div>
      </div>
    </div>
    <div class="container py-5">
      <div class="row justify-content-center g-3">
        <div
          class="col-4"
          v-for="movie in store.searchedMovies"
          :key="movie.id"
        >
          <MovieCard :movie="movie" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../../store";
import MovieCard from "../MovieCard.vue";
export default {
  name: "SearchedComponent",
  components: {
    MovieCard,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;
.jumbo-search {
  background-image: url("/images/barc.jpg");
  background-size: cover;
  min-height: 600px;
  position: relative;

  .jum {
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;

    > div {
      transform: translateY(-90%);
    }
    .text-green {
      color: $primaryColor;
      cursor: pointer;
    }
  }
}
</style>
