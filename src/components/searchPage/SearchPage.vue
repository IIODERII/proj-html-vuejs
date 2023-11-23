<template>
  <div>
    <HeaderComponent />
    <SearchedComponent />
  </div>
</template>

<script>
import HeaderComponent from "../HeaderComponent.vue";
import SearchedComponent from "./SearchedComponent.vue";
export default {
  name: "SearchPage",
  components: { HeaderComponent, SearchedComponent },
};
</script>

<style lang="scss" scoped></style>
