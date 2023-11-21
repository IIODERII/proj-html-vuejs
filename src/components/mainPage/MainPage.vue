<template>
  <div>
    <HeaderComponent />

    <main>
      <JumboComponent />
      <NewMovie />
    </main>
  </div>
</template>

<script>
import HeaderComponent from "../HeaderComponent.vue";
import JumboComponent from "./JumboComponent.vue";
import NewMovie from "./NewMovie.vue";
export default {
  name: "MainPage",
  components: {
    HeaderComponent,
    JumboComponent,
    NewMovie,
  },
};
</script>

<style lang="scss" scoped></style>
