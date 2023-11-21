<template>
  <div>
    <div
      class="my-5 container d-flex justify-content-between align-items-center"
    >
      <div class="description">
        <h2 class="mb-2">New Movie</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesettin</p>
      </div>
      <div class="d-flex fs-2">
        <div class="left px-1" @click="scrollBack()">
          <i class="fa-regular fa-circle-left"></i>
        </div>
        <div class="right px-1" @click="scrollForward()">
          <i class="fa-regular fa-circle-right"></i>
        </div>
      </div>
    </div>
    <div
      class="d-flex container justify-content-between mx-auto align-items-center"
    >
      <MovieCard
        :movie="store.movies[prevIndex()]"
        class="cards p-0 rounded-5 prev"
      />
      <MovieCard
        :movie="store.movies[currentIndex]"
        class="cards attivo p-0 rounded-5"
      />
      <MovieCard
        :movie="store.movies[nextIndex()]"
        class="cards p-0 rounded-5 next"
      />
    </div>
  </div>
</template>

<script>
import { store } from "../../store";
import MovieCard from "../MovieCard.vue";
export default {
  name: "NewMovie",
  components: {
    MovieCard,
  },
  data() {
    return {
      store,
      currentIndex: 0,
    };
  },
  methods: {
    prevIndex() {
      if (this.currentIndex === 0) {
        return this.store.movies.length - 1;
      } else {
        return this.currentIndex - 1;
      }
    },
    nextIndex() {
      if (this.currentIndex === this.store.movies.length - 1) {
        return 0;
      } else {
        return this.currentIndex + 1;
      }
    },
    scrollForward() {
      if (this.currentIndex === this.store.movies.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
    },
    scrollBack() {
      if (this.currentIndex === 0) {
        this.currentIndex = this.store.movies.length - 1;
      } else {
        this.currentIndex--;
      }
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

i {
  color: $primaryColor;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    color: $textColor;
  }
}

.cards {
  width: 32%;
  height: 500px;
  transition: all 0.5s ease;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    transition: all 0.3s ease;
  }
}

.attivo {
  width: 500px;
  height: 700px;
  margin: 0 20px;

  &::after {
    display: none;
  }
}
</style>
