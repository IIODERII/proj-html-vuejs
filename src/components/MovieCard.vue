<template>
  <div class="mycard">
    <div class="overlay" v-if="overlay">
      <i class="fa-regular fa-circle-xmark x" @click="overlay = false"></i>
      <iframe width="900px" height="560" :src="movie.trailer"> </iframe>
      <div class="socials">
        <a v-for="social in store.socials" :href="social.link" class="me-3"
          ><i :class="social.class"></i
        ></a>
      </div>
    </div>
    <img :src="movie.image" alt="" />
    <div class="content position-absolute">
      <div class="rating">
        <i class="fa-solid fa-star"></i> {{ movie.rating }} / 10
      </div>

      <div class="generals text-start px-1">
        <div>
          <h3>{{ movie.title }}</h3>
          <h4 class="pb-3">Category: {{ movie.categoty }}</h4>
          <p>Release: {{ movie.release }}</p>
          <p>
            Genres:
            <span v-for="genre in movie.genres" :key="genre"
              >{{ genre }},
            </span>
          </p>
        </div>
      </div>

      <div class="d-flex justify-content-between align-items-center pills">
        <div class="rounded-end-pill p-2">Details</div>
        <div class="rounded-start-pill p-2">{{ movie.views }} Views</div>
      </div>

      <div class="play" @click="overlay = true">
        <i class="fa-regular fa-circle-play"></i>
      </div>

      <div class="green-pill rounded-end-pill">2.30.00</div>
      <div
        class="to-cart rounded-end-pill"
        @click="store.cart.push(movie)"
        v-if="!store.cart.includes(movie)"
      >
        <i class="fa-solid fa-basket-shopping pe-1"></i> Add to Cart
      </div>
      <div
        class="to-cart rounded-end-pill"
        @click="store.cart.splice(store.cart.indexOf(movie), 1)"
        v-if="store.cart.includes(movie)"
      >
        <i class="fa-solid fa-check pe-1"></i> Already in your Cart
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
export default {
  name: "MovieCard",
  props: {
    movie: Object,
  },
  data() {
    return {
      overlay: false,
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
.mycard {
  transition: all 0.5s ease;
  overflow: hidden;
  position: relative;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease;
    width: 100%;
    &:hover {
      cursor: pointer;
      background-size: 100%;
      transform: scale(1.3);
    }
  }

  .content {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.2);
    color: white;
    transition: all 0.3s ease;

    &:hover {
      background-color: rgba($color: #13be13, $alpha: 0.3);
    }

    .rating {
      position: absolute;
      top: 15px;
      right: 5px;
      cursor: pointer;

      i {
        color: $primaryColor;
      }
    }

    .generals {
      height: 85%;
      overflow: hidden;

      > div {
        position: relative;
        top: 89%;
        transition: all 0.5s ease;
        h3 {
          font-size: 20px;
        }

        h4 {
          font-size: 17px;
        }
      }
    }

    .pills {
      width: 100%;
      position: absolute;
      bottom: 40px;
      > div {
        background-color: $backgroundColor;
        color: white;
        cursor: pointer;
        transition: all 0.5s ease;

        &:hover {
          background-color: $primaryColor;
        }
      }
    }

    .play {
      position: absolute;
      bottom: 150%;
      left: 50%;
      transform: translateX(-50%);
      transition: all 0.5s ease;
      cursor: pointer;
      font-size: 3.5em;

      &:hover {
        color: $primaryColor;
      }
    }

    .green-pill {
      position: absolute;
      top: 20px;
      left: -150px;
      background-color: $primaryColor;
      color: white;
      cursor: default;
      transition: all 0.5s ease;
      padding: 8px 15px;
    }

    .to-cart {
      position: absolute;
      top: 70px;
      left: -250px;
      background-color: $primaryColor;
      color: white;
      cursor: default;
      transition: all 0.5s ease;
      padding: 8px 15px;
      cursor: pointer;

      &:hover {
        background-color: $backgroundColor;
        color: $primaryColor;
      }
    }

    &:hover {
      .generals {
        > div {
          top: 70%;
        }
      }

      .play {
        bottom: 55%;
      }

      .green-pill,
      .to-cart {
        left: 0;
      }
    }
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;

    .x {
      font-size: 3.5em;
      color: $textColor;
      cursor: pointer;
      position: absolute;
      top: 30px;
      right: 30px;
      transition: all 0.5s ease;

      &:hover {
        color: $primaryColor;
        transform: scale(1.2);
      }
    }

    .socials {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      a {
        text-decoration: none;
        display: block;
        width: 3em;
        height: 3em;
        border-radius: 50%;
        background-color: $textColor;
        color: $backgroundColor;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.5s ease;

        &:hover {
          background-color: $primaryColor;
          color: $textColor;
        }
      }
    }
  }
}
</style>
