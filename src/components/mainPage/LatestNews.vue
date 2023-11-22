<template>
  <div class="container py-5">
    <NewsCard :news="store.posts[0]" />
  </div>
</template>

<script>
import NewsCard from "../NewsCard.vue";
import { store } from "../../store";
export default {
  name: "LatestNews",
  components: { NewsCard },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped></style>
