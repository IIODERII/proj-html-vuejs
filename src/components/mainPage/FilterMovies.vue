<template>
  <div class="container py-5">
    <div class="description">
      <h2 class="mb-2">New Movie</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesettin</p>
    </div>

    <div class="py-5">
      <ul class="d-flex list-unstyled fs-4">
        <li
          class="px-3"
          v-for="(category, index) in categories"
          :ref="'category'"
          @click="setActive(category, index)"
        >
          {{ category }}
        </li>
      </ul>

      <div class="row g-3 justify-content-start position-relative">
        <div
          v-for="movie in store.movies"
          class="col-4 p-0 mx-1 movies"
          ref="movies"
        >
          <MovieCard :movie="movie" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MovieCard from "../MovieCard.vue";
import { store } from "../../store";

export default {
  name: "FilterMovies",
  data() {
    return {
      store,
      categories: [
        "All",
        "Coming Soon",
        "Latest Movie",
        "Top Rating",
        "TV Series",
      ],
    };
  },
  methods: {
    setActive(cate, index) {
      const categories = this.$refs.category;
      categories.forEach((value) => {
        value.classList.remove("active");
      });
      categories[index].classList.add("active");

      const movies = this.$refs.movies;
      movies.forEach((value, index) => {
        if (this.store.movies[index].categoty === cate || cate === "All") {
          value.classList.remove("hidden");
        } else {
          value.classList.add("hidden");
        }
      });
    },
  },
  mounted() {
    this.setActive("All", 0);
  },
  components: { MovieCard },
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

ul {
  .active {
    color: $primaryColor;
    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      background-color: $primaryColor;
      margin-top: 5px;
      transition: all 0.2s ease-in;
    }
  }
  li {
    color: $textColor;
    transition: all 0.3s ease-in;

    &:first-child {
      &::after {
        display: none;
      }
    }

    &::after {
      content: "";
      display: block;
      width: 0%;
      height: 2px;
      background-color: $primaryColor;
      margin-top: 5px;
      transition: all 0.2s ease-in;
    }

    &:hover {
      cursor: pointer;
      color: $primaryColor;

      &::after {
        width: 100%;
      }
    }
  }
}

.movies {
  width: 32.5%;
  transition: all 0.5s ease;
}

.hidden {
  transition: all 0.5s ease;
  transform: translateY(-50%) scale(0) translateX(-50%) skew(90deg);
  position: absolute;
}
</style>
