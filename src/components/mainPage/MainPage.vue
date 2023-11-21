<template>
  <div>
    <HeaderComponent />

    <main>
      <JumboComponent />
      <NewMovie />
      <MoviePlaylist />
      <CountDown />
      <FilterMovies />
    </main>
  </div>
</template>

<script>
import HeaderComponent from "../HeaderComponent.vue";
import JumboComponent from "./JumboComponent.vue";
import NewMovie from "./NewMovie.vue";
import MoviePlaylist from "./MoviePlaylist.vue";
import CountDown from "./CountDown.vue";
import FilterMovies from "./FilterMovies.vue";
export default {
  name: "MainPage",
  components: {
    HeaderComponent,
    JumboComponent,
    NewMovie,
    MoviePlaylist,
    CountDown,
    FilterMovies,
  },
};
</script>

<style lang="scss" scoped></style>
