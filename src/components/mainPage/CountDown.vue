<template>
  <div :style="{ 'background-image': `url(${bgImage})` }" class="my-5 bg">
    <div>
      <div class="text-uppercase text-center fw-bold fs-3">
        <p class="text-green m-0">coming soon movie</p>
        <h2 class="display-3">max still</h2>
        <div class="px-3 py-1 actors">
          jon player <span class="text-green">&</span> emily rose
        </div>

        <div class="d-flex justify-content-evenly fs-6">
          <div class="days">
            <div class="number">
              <span v-if="Math.floor(distance / (1000 * 60 * 60 * 24)) < 10"
                >0</span
              >
              {{ Math.floor(distance / (1000 * 60 * 60 * 24)) }}
            </div>
            <div>
              Day<span v-if="Math.floor(distance / (1000 * 60 * 60 * 24)) > 1"
                >s</span
              >
            </div>
          </div>
          <div class="hours">
            <div class="number">
              <span
                v-if="
                  Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                  ) < 10
                "
                >0</span
              >

              {{
                Math.floor(
                  (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                )
              }}
            </div>
            <div>
              Hour<span
                v-if="
                  Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                  ) > 1
                "
                >s</span
              >
            </div>
          </div>
          <div class="minutes">
            <div class="number">
              <span
                v-if="
                  Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) < 10
                "
                >0</span
              >
              {{ Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) }}
            </div>
            <div>
              Minute<span
                v-if="
                  Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) > 1
                "
                >s</span
              >
            </div>
          </div>
          <div class="seconds">
            <div class="number">
              <span v-if="Math.floor((distance % (1000 * 60)) / 1000) < 10"
                >0</span
              >
              {{ Math.floor((distance % (1000 * 60)) / 1000) }}
            </div>
            <div>
              Second<span v-if="Math.floor((distance % (1000 * 60)) / 1000) > 1"
                >s</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountDown",

  data() {
    return {
      bgImage: "/images/coming-bg.jpg",
      distance:
        new Date("Jan 5, 2028 00:00:00").getTime() - new Date().getTime(),
    };
  },
  methods: {
    countDown() {
      this.distance =
        new Date(" 20,oct 2026 05:30:00").getTime() - new Date().getTime();
    },
  },

  mounted() {
    setInterval(this.countDown, 1000);
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;
.bg {
  height: 800px;
  background-image: url();
  background-size: cover;
  background-position-x: 45%;
  background-repeat: no-repeat;
  position: relative;

  > div {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;

    > div {
      transform: translateX(50%);

      > .actors {
        background-color: rgba(0, 0, 0, 0.3);
      }

      .text-green {
        color: $primaryColor;
      }

      .hours,
      .minutes,
      .seconds,
      .days {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        .number {
          width: 3em;
          height: 3em;
          background-color: $backgroundColor;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

      .days {
        color: #13be13;
      }
      .hours {
        color: #ffa800;
      }
      .minutes {
        color: #6ffff3;
      }
      .seconds {
        color: #cedb38;
      }
    }
  }
}
</style>
