<template>
  <div>
    <HeaderComponent />

    <main>
      <JumboComponent />
      <NewMovie />
      <MoviePlaylist />
      <CountDown />
      <FilterMovies />
      <LatestNews />
      <FormComponent />
    </main>

    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "../HeaderComponent.vue";
import JumboComponent from "./JumboComponent.vue";
import NewMovie from "./NewMovie.vue";
import MoviePlaylist from "./MoviePlaylist.vue";
import CountDown from "./CountDown.vue";
import FilterMovies from "./FilterMovies.vue";
import LatestNews from "./LatestNews.vue";
import FormComponent from "./FormComponent.vue";
import FooterComponent from "../FooterComponent.vue";
export default {
  name: "MainPage",
  components: {
    HeaderComponent,
    JumboComponent,
    NewMovie,
    MoviePlaylist,
    CountDown,
    FilterMovies,
    LatestNews,
    FormComponent,
    FooterComponent,
  },
};
</script>

<style lang="scss" scoped></style>
