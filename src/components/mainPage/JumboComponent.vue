<template>
  <div
    class="jumbo mt-4 d-flex justify-content-center align-items-center"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <div class="left" @click="changeImage">
      <i class="fa-regular fa-circle-left"></i>
    </div>

    <div class="text-center page-one" v-if="pageOne">
      <strong>Welcome to our Movie Site</strong>
      <h1 class="text-uppercase display-5 py-3">
        our special <span class="oder-text-primary">movies</span>
      </h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industrioy. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s, when an unknown
      </p>
      <button class="rounded-pill px-3 py-2">Read More</button>
    </div>

    <div class="text-center page-two" v-else>
      <strong>Welcome to our Movie Site</strong>
      <h1 class="text-uppercase display-5 py-3">
        our special <span class="oder-text-primary">movies</span>
      </h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industrioy. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s, when an unknown
      </p>
      <button class="rounded-pill px-3 py-2">Read More</button>
    </div>
    <div class="right" @click="changeImage">
      <i class="fa-regular fa-circle-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "JumboComponent",
  data() {
    return {
      pageOne: true,
      bgImage: "/images/slider.jpg",
    };
  },
  methods: {
    changeImage() {
      if (this.bgImage === "/images/slider.jpg") {
        this.bgImage = "/images/slider-2.jpg";
        this.pageOne = false;
      } else {
        this.bgImage = "/images/slider.jpg";
        this.pageOne = true;
      }
    },
  },
  mounted() {
    setInterval(() => {
      this.changeImage();
    }, 5000);
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;
.jumbo {
  height: 700px;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 1s ease;
  position: relative;

  .oder-text-primary {
    color: $primaryColor;
  }

  &:hover {
    .left,
    .right {
      opacity: 1;
    }
  }

  .left,
  .right {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 40px;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    opacity: 0;

    &:hover {
      color: $primaryColor;
      transform: translateY(-50%) scale(1.2);
    }
  }

  .left {
    left: 10px;
  }

  .right {
    right: 10px;
  }

  > .page-one {
    transition: all 0.8s ease;
    max-width: 530px;
    overflow: hidden;

    h1 {
      font-family: "roboto", sans-serif;
    }

    button {
      background-color: $primaryColor;
      border: none;
      transition: all 0.5s ease;
      color: $textColor;
      font-weight: 600;

      &:hover {
        background-color: $textColor;
        color: $backgroundColor;
      }
    }
    strong,
    button {
      animation-name: go-down;
      animation-duration: 0.8s;
      position: relative;
      @keyframes go-down {
        from {
          bottom: 50px;
        }
        to {
          bottom: 0;
        }
      }
    }

    h1,
    p {
      animation-name: go-right;
      animation-duration: 0.8s;
      position: relative;
      @keyframes go-right {
        from {
          right: 300px;
        }
        to {
          right: 0;
        }
      }
    }
  }

  .page-two {
    transition: all 0.8s ease;
    max-width: 530px;
    overflow: hidden;

    h1 {
      font-family: "roboto", sans-serif;
    }

    button {
      background-color: $primaryColor;
      border: none;
      transition: all 0.5s ease;
      color: $textColor;
      font-weight: 600;

      &:hover {
        background-color: $textColor;
        color: $backgroundColor;
      }
    }

    button {
      animation-name: go-up;
      animation-duration: 0.8s;
      position: relative;
      @keyframes go-up {
        from {
          top: 50px;
        }
        to {
          top: 0;
        }
      }
    }
  }
}
</style>
