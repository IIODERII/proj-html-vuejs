<template>
  <div class="container py-5">
    <div class="description">
      <h2 class="mb-2">Latest News</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesettin</p>
    </div>

    <div class="py-5 row justify-content-around">
      <div class="col-6 big-news">
        <NewsCard :news="store.posts[idToIndex()]" />
      </div>

      <div class="col-6 row">
        <NewsCard
          v-for="(post, index) in postNoActive()"
          :news="post"
          @click="activeId = post.id"
          class="col-6 small-news"
        />
      </div>
    </div>
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
      activeId: 1,
    };
  },
  methods: {
    postNoActive() {
      return this.store.posts.filter((post) => post.id !== this.activeId);
    },
    idToIndex() {
      return this.store.posts.findIndex((post) => post.id === this.activeId);
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;
.description {
  width: 100%;
  border-bottom: 1px solid $linesColor;
  border-left: 2px solid $primaryColor;
  padding-left: 10px;
}

.big-news {
  height: 600px;
  width: 600px;
}

.small-news {
  height: 300px;
  width: 300px;
  font-size: 0.8em !important;
  cursor: pointer;
}
</style>
