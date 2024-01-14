<template>
  <div
    class="card-container"
    :class="'card-container-' + theme">
    <div
      class="card-image"
      :style="{
        backgroundImage: 'url(/profiles/' + backImage + ')',
      }">
      <h1
        class="card-image-name"
        :class="'card-image-name-' + theme">
        {{ name }}
      </h1>
    </div>
    <div class="card-text">
      <div class="card-text-profile">
        <div
          class="card-profile-image"
          :class="'card-profile-image-' + theme">
          <img
            class="card-text-profile-image"
            :src="'src/assets/images/profiles/' + image"
            alt="profile picture " />
        </div>

        <div class="card-text-profile-info">
          <h1 class="card-text-profile-info-name">{{ name }}</h1>
          <h2
            class="card-text-profile-info-job"
            :class="'card-text-profile-info-job-' + theme">
            {{ job }}
          </h2>
        </div>
      </div>
      <p class="card-text-description">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
  import { defineProps } from "vue";

  const props = defineProps({
    name: String,
    job: String,
    description: String,
    backImage: String,
    image: String,
    theme: String,
  });
</script>

<style lang="scss">
  @import "../assets/css/mixins.scss";
  @import "../assets/css/variables";

  .card {
    // Add your styles here
    &-container {
      height: 100%;
      max-width: 36rem;
      border-radius: 1rem;
      border: solid 4px #8a30d0;
      background-color: $accent;
      box-shadow: 0px 0.6rem 2rem rgba(255, 255, 255, 0.117);
      overflow: hidden;
      transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      &:hover {
        box-shadow: 0px 2rem 4rem rgba(255, 255, 255, 0.161);
        transform: translateY(-0.4rem);
      }
      &:active {
        transform: translateY(0.2rem);
      }
      &-nizar {
        border-color: $accent;
      }
      &-amine {
        border-color: #0c0731;
      }
      &-nesrine {
        border-color: #8a30d0;
      }
      &-romain {
        border-color: #467ac7;
      }
      &-aurelie {
        border-color: #ffb4af;
      }
    }

    &-image {
      background-image: url("../assets/images/nes-back.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;
      z-index: 1;
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(
          to top,
          rgba(0, 0, 0, 0.896),
          rgba(0, 0, 0, 0)
        );
        z-index: -1;
      }
      &-name {
        @include apply-color-border;
        color: #8a30d0;
        text-align: center;
        font-size: 4.8rem;
        font-weight: 800;
        padding: 8rem 0;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        &-nizar {
          @include apply-color-border($accent);
          color: #151515;
        }
        &-amine {
          @include apply-color-border($accent);
          color: #0c0731;
        }
        &-nesrine {
          @include apply-color-border($primary);
          color: #8a30d0;
        }
        &-romain {
          @include apply-color-border(#467ac7);
          color: #467ac7;
        }
        &-aurelie {
          @include apply-color-border(#ffb4af);
          color: #ffb4af;
        }
        // Add your styles here
      }
    }
    &-text {
      color: $primary;
      display: flex;
      flex-direction: column;
      margin-top: 2.4rem;
      gap: 2rem;
      font-weight: 500;
      font-size: 1.8rem;
      padding: 0 2.4rem 2.4rem 2.4rem;
      // Add your styles here
      &-profile {
        display: flex;
        gap: 1.2rem;
        &-info {
          display: flex;
          flex-direction: column;
          justify-content: center;

          &-name {
            font-size: 2.4rem;
            font-weight: 400;
            letter-spacing: 3.96px;
            text-transform: uppercase;
          }
          &-job {
            // Add your styles here
            @include apply-gradient-block($nesrine-linear);
            border-radius: 8rem;
            text-align: center;
            color: $accent;
            padding: 0 1.2rem;
            &-nizar {
              @include apply-gradient-block($nizar-linear);
              color: $accent;
            }
            &-amine {
              @include apply-gradient-block($amine-linear);
              color: $accent;
            }
            &-nesrine {
              @include apply-gradient-block($nesrine-linear);
            }
            &-romain {
              @include apply-gradient-block(#467ac7);
              color: $accent;
            }
            &-aurelie {
              @include apply-gradient-block(#ffb4af);
              color: $primary;
            }
          }
        }
      }
      &-description {
        text-align: center;
      }
    }
  }
  .card-profile-image {
    height: 7.2rem;
    width: 7.2rem;
    border-radius: 50%;
    overflow: hidden;
    &-nizar {
      background-color: #151515;
    }
    &-amine {
      background-color: #0c0731;
    }
    &-nesrine {
      background-color: #8a30d0;
    }
    &-romain {
      background-color: #467ac7;
    }
    &-aurelie {
      background-color: #ffb4af;
    }
  }
  @media (max-width: 1280px) {
    .card {
      &-container {
        max-width: 32rem;
      }
    }
  }
  @media (max-width: 1025px) {
    .card {
      &-container {
        max-width: 28rem;
      }
      &-image {
        &-name {
          font-size: 3.6rem;
        }
      }
      &-text {
        &-profile {
          &-info {
            &-name {
              font-size: 2rem;
            }
            &-job {
              font-size: 1.6rem;
            }
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    .card {
      &-container {
        max-width: 36rem;
      }
      &-image {
        &-name {
          font-size: 5.6rem;
        }
      }
      &-text {
        &-profile {
          &-info {
            &-name {
              font-size: 2.8rem;
            }
            &-job {
              font-size: 2rem;
            }
          }
        }
      }
    }
  }
  @media (max-width: 512px) {
    .card {
    }
  }
</style>
