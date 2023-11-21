<template>
  <div class="py-5">
    <div class="container">
      <div class="description">
        <h2 class="mb-2">New Movie</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesettin</p>
      </div>

      <div class="row py-5">
        <div class="col-8">
          <iframe
            width="100%"
            height="560"
            :src="store.movies[currentIndex].trailer"
          >
          </iframe>
        </div>
        <div class="col-4 movie-list">
          <h3 class="pt-2 pb-0">New Movie</h3>
          <p class="py-1">Plying 24</p>
          <ul class="list-unstyled">
            <li v-for="(movie, index) in store.movies" class="py-2">
              <div class="d-flex justify-content-between">
                <div class="image-container">
                  <img :src="movie.image" :alt="movie.title" class="w-100" />
                </div>
                <div>
                  <h4
                    class="fs-5"
                    @click="currentIndex = index"
                    :class="greenText(index)"
                  >
                    {{ movie.title }}
                  </h4>
                  <strong>{{ movie.views }} Views</strong>
                  <div class="d-flex justify-content-between">
                    <p>{{ movie.release }}</p>
                    <p>2.30.00</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../../store";
export default {
  name: "MoviePlaylist",
  data() {
    return {
      store,
      currentIndex: 0,
    };
  },
  methods: {
    greenText(index) {
      if (index === this.currentIndex) {
        return "my-text-primary";
      } else {
        return "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;
.description {
  width: 90%;
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

.movie-list {
  max-height: 560px;
  background-color: $linesColor;
  padding: 0;

  & > * {
    padding: 15px;
  }

  h3 {
    font-size: 1.3em;
  }

  ul {
    border-top: 2px solid $backgroundColor;
    max-height: 470px;
    overflow-y: auto;

    li {
      cursor: pointer;
      .image-container {
        width: 110px;
        height: 110px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      > div {
        > div {
          width: 65%;

          .my-text-primary {
            color: $primaryColor;
          }

          h4 {
            transition: all 0.5s ease;

            &:hover {
              color: $primaryColor;
            }
          }
        }
      }
    }
  }
}
</style>
