<template>
  <div>
    <HeaderComponent />

    <main>
      <JumboComponent />
    </main>
  </div>
</template>

<script>
import HeaderComponent from "../HeaderComponent.vue";
import JumboComponent from "./JumboComponent.vue";
export default {
  name: "MainPage",
  components: {
    HeaderComponent,
    JumboComponent,
  },
};
</script>

<style lang="scss" scoped></style>
