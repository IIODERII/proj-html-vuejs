<template>
  <header>
    <div class="oder-line-bottom">
      <div
        class="container d-flex flex-wrap align-items-center justify-content-between p-3"
      >
        <div class="d-flex align-items-center">
          <span
            ><i class="fa-regular fa-envelope"></i> Superhit Top Movie
            <strong class="oder-text-primary"> ** King Star ** </strong>
          </span>
          <ul class="d-flex list-unstyled px-2 m-0">
            <li v-for="social in store.socials" class="px-2 fs-6">
              <a :href="social.link"
                ><i
                  :class="social.class"
                  :style="'color: ' + social.color"
                  class="oder-hover-primary"
                ></i
              ></a>
            </li>
          </ul>
        </div>
        <div class="oder-hover-primary">
          <span><i class="fa-solid fa-lock"></i> Login</span>
        </div>
      </div>
    </div>

    <div class="oder-line-bottom">
      <div
        class="container p-3 pb-5 d-flex flex-wrap justify-content-between align-items-center"
      >
        <div @click="store.page = 'home'" class="logo" a>
          <img src="/images/cropped-logo.png" alt="logo" />
        </div>

        <div class="d-flex align-items-center justify-content-end search">
          <select
            name=""
            id=""
            class="oder-bg"
            placeholder="All Movie"
            v-model="store.selectedCategory"
            @change="search"
          >
            <option
              v-for="category in store.moviesCategories"
              :value="category"
              class="bg-white text-black"
            >
              {{ category }}
            </option>
          </select>

          <input
            type="text"
            class="oder-bg w-50"
            placeholder="Search..."
            v-model="store.searchedOptions"
            @keyup.enter="search"
          />
          <button class="btn btn-dark rounded-0 oder-bg" @click="search">
            Search
          </button>
        </div>
      </div>
    </div>

    <div>
      <div
        class="container d-flex flex-wrap align-items-center justify-content-between"
      >
        <nav>
          <ul class="d-flex flex-wrap list-unstyled p-3 m-0 fw-bold fs-5">
            <li v-for="item in store.headerNav" class="pe-4">
              <span class="oder-hover-primary"
                >{{ item.name }} <i class="fa-solid fa-caret-down"></i
              ></span>
              <ul class="list-unstyled fs-6 py-4 rounded-1">
                <li
                  v-for="subItem in item.elements"
                  class="oder-hover-primary px-4"
                >
                  {{ subItem }}
                </li>
              </ul>
            </li>

            <li v-for="item in store.headerNavDouble" class="pe-4">
              <span class="oder-hover-primary"
                >{{ item.name }}<i class="fa-solid fa-caret-down"> </i
              ></span>
              <ul class="list-unstyled fs-6 py-4 rounded-1">
                <li v-for="subItem in item.elements" class="px-4">
                  <span
                    class="oder-hover-primary d-flex justify-content-between align-items-center"
                    >{{ subItem.name }}<i class="fa-solid fa-chevron-right"></i
                  ></span>

                  <ul class="list-unstyled fs-6 py-4 rounded-1">
                    <li
                      v-for="subSubItem in subItem.subElements"
                      class="px-4 oder-hover-primary"
                    >
                      <span>{{ subSubItem }}</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li v-for="item in store.headerNavSingle" class="pe-4">
              <span class="oder-hover-primary">{{ item }}</span>
            </li>
          </ul>
        </nav>

        <div>
          <span class="oder-hover-primary cart pb-5"
            ><i class="fa-solid fa-basket-shopping"></i>
            <div
              class="d-flex align-items-center justify-content-center counter"
            >
              <span>{{ store.cart.length }}</span>
            </div>
            <div class="list p-0">
              <div v-if="store.cart.length === 0" class="p-4">
                No products in the cart
              </div>
              <ul v-else class="list-unstyled m-0">
                <li v-for="(product, index) in store.cart" class="px-5 w-100">
                  <div class="row">
                    <img
                      :src="product.image"
                      :alt="product.title"
                      class="col-4"
                    />
                    <span class="col-8 fw-bold fs-6">{{ product.title }}</span>
                    <i
                      class="fa-regular fa-trash-can"
                      @click="store.cart.splice(index, 1)"
                    ></i>
                  </div>
                </li>
              </ul>
            </div>
          </span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { store } from "../store";
export default {
  name: "HeaderComponent",
  data() {
    return {
      store,
    };
  },
  methods: {
    search() {
      if (this.store.selectedCategory === "All Movie Category") {
        this.store.searchedMovies = this.store.movies;
      } else {
        this.store.searchedMovies = this.store.movies.filter(
          (movie) => movie.categoty === this.store.selectedCategory
        );
      }

      this.store.searchedMovies = this.store.searchedMovies.filter((movie) =>
        movie.title
          .toLowerCase()
          .includes(this.store.searchedOptions.toLowerCase())
      );

      this.store.page = "search";
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.logo {
  cursor: pointer;
}

.oder-text-primary {
  color: $primaryColor;
}

.oder-hover-primary {
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    color: $primaryColor !important;
  }
}

.search {
  width: 50%;
  .oder-bg {
    background-color: $backgroundColor;
    border: 1px solid $linesColor;
    color: $textColor;
    padding: 15px;
  }

  button.oder-bg {
    background-color: $primaryColor;

    &:hover {
      background-color: $primaryHover;
    }
  }
}

li {
  position: relative;
  ul {
    opacity: 0;
    transition: all 0.5s ease;
    width: 200px;
    position: absolute;
    padding-top: 50px;
    z-index: -1;
    background-color: $backgroundColor;
    top: 0px;

    li {
      padding: 10px 0;

      ul {
        top: 0;
        left: 100%;
      }
    }
  }

  &:hover {
    > ul {
      z-index: 1;
      opacity: 1;

      top: 40px;
    }
  }
}

.cart {
  position: relative;

  li {
    padding: 10px 0;
    border-top: 2px solid $linesColor;
    border-bottom: 2px solid $linesColor;
    background-color: $backgroundColor;
    color: $textColor;
    transition: all 0.5s ease;
    cursor: pointer;
    position: relative;

    &:hover {
      background-color: $primaryColor;
      color: $backgroundColor;
    }

    i {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      font-size: 1.5em;
      transition: all 0.3s ease;
      width: auto;

      &:hover {
        color: $textColor;
      }
    }
  }

  .counter {
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
    background-color: $primaryColor;
    color: $textColor;
    font-size: 0.8em;
    position: absolute;
    top: -15px;
    right: -15px;
    padding-bottom: 2px;
  }

  .list {
    margin-top: 40px;
    position: absolute;
    top: 50px;
    right: 0;
    background-color: $textColor;
    color: $backgroundColor;
    padding: 25px;
    width: 300px;
    opacity: 0;
    transition: all 0.5s ease;
    cursor: default;
  }

  &:hover {
    > .list {
      z-index: 1;
      opacity: 1;
      top: 0px;
    }
  }
}

.oder-line-bottom {
  border-bottom: 1px solid $linesColor;
}
</style>
