<template>
  <footer>
    <div class="footer-top">
      <div class="py-5 overlay"></div>
      <div class="container py-5">
        <div class="row align-items-top py-5 justify-content-between">
          <div class="col-3">
            <h3 class="pb-3">About Us</h3>
            <p class="py-5">
              Mauris malesuada arcu eu posuere eleifen. Ut egestas tortor at leo
              egestas tincidunt. Nam tincidunt metus tristique tristique
              viverra. Mauris erat ante, egestas vitae dapibus seds.
            </p>
            <div class="d-flex">
              <a
                v-for="social in store.socials"
                :href="social.link"
                :style="`background-color: ${social.color}`"
                class="me-3"
                ><i :class="social.class"></i
              ></a>
            </div>
          </div>
          <div class="col-3">
            <h3>Movie Category</h3>
            <ul class="py-4 list-unstyled">
              <li v-for="category in store.moviesCategories" class="pb-4 links">
                {{ category }}
              </li>
            </ul>
          </div>
          <div class="col-3">
            <h3>Information</h3>
            <ul class="py-4 list-unstyled">
              <li class="pb-4 links">Youtube Video Post</li>
              <li class="pb-4 links">Actor Information</li>
              <li class="pb-4 links">New Promotion</li>
              <li class="pb-4 links">Latest Movie In English</li>
              <li class="pb-4 links">Latest Flim Product</li>
              <li class="pb-4 links">Video New Video</li>
            </ul>
          </div>
          <div class="col-3">
            <h3>Recent Posts</h3>
            <ul class="py-4 list-unstyled">
              <li v-for="news in lastPosts()" class="pb-4">
                <div class="row">
                  <img :src="news.image" :alt="news.title" class="col-4" />
                  <div class="col-8">
                    <h6>{{ news.title }}</h6>
                    <span>{{ news.date }}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom py-4">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <ul class="d-flex list-unstyled m-0">
            <li class="px-3"><a href="#">Term And Conditions</a></li>
            <li class="px-3"><a href="#">Policy</a></li>
            <li class="px-3"><a href="#">About</a></li>
          </ul>

          <span
            >© 2020 <a href="#" class="green">@Themepul</a> All Rights
            Reserved.</span
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { store } from "../store";
export default {
  name: "FooterComponent",
  data() {
    return {
      store,
    };
  },

  methods: {
    lastPosts() {
      return this.store.posts
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3);
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
.footer-top {
  background-image: url("/images/ft-bg.jpg");
  background-size: cover;
  position: relative;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba($color: #060f19, $alpha: 0.8);
  }

  .row {
    position: relative;
    z-index: 1;

    h3 {
      font-size: 1.3em;

      &::after {
        content: "";
        display: block;
        width: 15%;
        height: 3px;
        background-color: $textColor;
        margin-top: 5px;
        border-radius: 2px;
      }
    }
    a {
      width: 2.4em;
      height: 2.4em;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: $textColor;
      transition: all 0.7s ease;

      &:hover {
        background-color: $backgroundColor !important;
        color: $primaryColor;
      }
    }

    h6 {
      cursor: pointer;
      transition: all 0.5s ease;
      &:hover {
        color: $primaryColor;
      }
    }

    img {
      cursor: pointer;
    }

    .links {
      transition: all 0.5s ease;
      cursor: pointer;

      &:hover {
        color: $primaryColor;
      }
    }
  }
}

.footer-bottom {
  a {
    text-decoration: none;
    color: $textColor;
    transition: all 0.5s ease;
    &:hover {
      color: $primaryColor;
    }
  }

  .green {
    color: $primaryColor;
    transition: all 0.5s ease;
    &:hover {
      color: $textColor;
    }
  }
}
</style>
