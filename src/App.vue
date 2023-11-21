<template>
  <div class="text-primary">Ciao</div>
  <i class="fa-solid fa-house"></i>
</template>

<script>
import { store } from "./store";
import axios from "axios";
export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    callMovies() {
      const url = this.store.apiUrl + this.store.endPoint;
      axios.get(url, { params: this.store.params }).then((res) => {
        this.store.movies = res.data.results;
      });
    },
  },
  created() {
    this.callMovies();
  },
};
</script>

<style lang="scss" scoped></style>
