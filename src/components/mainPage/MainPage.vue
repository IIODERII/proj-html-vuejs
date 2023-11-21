<template>
  <div>
    <HeaderComponent />

    <main>
      <JumboComponent />
      <NewMovie />
      <MoviePlaylist />
    </main>
  </div>
</template>

<script>
import HeaderComponent from "../HeaderComponent.vue";
import JumboComponent from "./JumboComponent.vue";
import NewMovie from "./NewMovie.vue";
import MoviePlaylist from "./MoviePlaylist.vue";
export default {
  name: "MainPage",
  components: {
    HeaderComponent,
    JumboComponent,
    NewMovie,
    MoviePlaylist,
  },
};
</script>

<style lang="scss" scoped></style>
