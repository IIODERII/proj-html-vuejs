<template>
  <div class="news-card" :style="{ backgroundImage: `url(${news.image})` }">
    <div class="details">
      <span class="rounded-start-pill date">{{ news.date }}</span>
      <div>
        <h3 class="p-4">{{ news.title }}</h3>
        <div class="d-flex justify-content-between pe-3">
          <span class="rounded-end-pill">Details</span>
          <div>
            <span>{{ news.author }}</span>
            <span class="px-3">{{ news.comments.length }} Comments</span>
            <span class="share"
              >Share
              <div class="rounded-start-pill socials">
                <a v-for="icon in store.socials" :href="icon.link"
                  ><i :class="icon.class"></i
                ></a>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
export default {
  name: "NewsCard",
  props: {
    news: Object,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
.news-card {
  height: 500px;
  width: 500px;
  position: relative;

  .details {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    overflow: hidden;
    transition: all 0.3s ease;

    &:hover {
      background-image: linear-gradient(
        rgba($color: #13be13, $alpha: 0.4),
        rgba($color: #000000, $alpha: 0.4)
      );
      .rounded-start-pill {
        right: 0;
      }
    }

    .date {
      background-color: $primaryColor;
      position: absolute;
      padding: 10px 20px;
      top: 20px;
      right: -100%;
      transition: all 0.5s ease;
    }
    > div {
      position: absolute;
      bottom: 25px;
      left: 0;

      h3,
      span {
        cursor: pointer;
      }

      .rounded-end-pill {
        background-color: $backgroundColor;
        padding: 10px 20px;
        cursor: pointer;
        transition: all 0.5s ease;
        font-weight: bold;

        &:hover {
          background-color: $primaryColor;
        }
      }

      .share {
        .socials {
          background-color: $primaryColor;
          padding: 10px 20px;
          transition: all 0.5s ease;
          display: flex;
          position: absolute;
          bottom: 0;
          right: -100%;

          > a {
            text-decoration: none;
            color: $textColor;
            background-color: $backgroundColor;
            width: 2em;
            height: 2em;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            transition: all 0.5s ease;
            margin: 0 5px;

            &:hover {
              background-color: $textColor;
              color: $backgroundColor;
            }
          }
        }
        &:hover {
          .socials {
            right: 0;
          }
        }
      }
    }
  }
}
</style>
