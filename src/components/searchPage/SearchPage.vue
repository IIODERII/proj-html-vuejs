<template>
  <div>
    <HeaderComponent />
    <SearchedComponent />
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from "../FooterComponent.vue";
import HeaderComponent from "../HeaderComponent.vue";
import SearchedComponent from "./SearchedComponent.vue";
export default {
  name: "SearchPage",
  components: { HeaderComponent, SearchedComponent, FooterComponent },
};
</script>

<style lang="scss" scoped></style>
