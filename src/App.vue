<script setup>
  import NavigationBar from "./components/NavigationBar.vue";
  import { RouterView, useRoute } from "vue-router";
  import { computed } from "vue";
  const route = useRoute();
  const lineClass = computed(() => {
    return {
      "background-lines-hero layer": route.path === "/",
      "background-lines-a-propos ": route.path === "/a-propos",
      "background-lines-about-me layer": route.path === "/about-me",
      "background-lines-carte-distance layer": route.path === "/carte-distance",
      "background-lines-boules-maximales layer":
        route.path === "/boules-maximales",
      "background-lines-reconstruction layer": route.path === "/reconstruction",
    };
  });
</script>

<template>
  <div
    class="background-lines"
    :class="lineClass">
    <header>
      <NavigationBar />
    </header>

    <RouterView />
  </div>
</template>

<style lang="scss">
  .background-lines {
    position: relative;
    background-repeat: no-repeat;
    background-size: 120vw;
    height: 110vh;
    background-position-x: center;
    z-index: 0;
    &-hero {
      background-image: url("./assets/images/back.png");
      overflow-y: hidden;
    }
    &-a-propos {
      background-image: url("./assets/images/lines/Line-3.webp");
    }
    &-about-me {
      background-image: url("./assets/images/lines/Line-9.webp");
      overflow-y: hidden;
    }
    &-carte-distance {
      background-image: url("./assets/images/lines/Line-2.webp");
      overflow-y: hidden;
    }
    &-boules-maximales {
      background-image: url("./assets/images/lines/Line-8.webp");
      overflow-y: hidden;
    }
    &-reconstruction {
      background-image: url("./assets/images/lines/Line-1.webp");
      overflow-y: hidden;
    }
  }
  .layer {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 130vh;
      background-image: linear-gradient(
        to top,
        rgb(0, 0, 0),
        rgba(0, 0, 0, 0)
      ); /* Adjust the opacity as needed */
      z-index: -1; /* Ensure the dark layer is above the image */
    }
  }
  @media (max-width: 1280px) {
  }
  @media (max-width: 1024px) {
    .background-lines {
      background-size: cover;
      height: 110vh;
    }
    .layer {
      &::after {
        background-size: cover;
        height: 110vh;
      }
    }
  }
  @media (max-width: 768px) {
    .background-lines {
      // background-size: cover;
      height: 100vh;
    }
    .layer {
      &::after {
        // background-size: cover;
        height: 100vh;
      }
    }
  }
  @media (max-width: 512px) {
    .layer {
      &::after {
        // background-size: cover;
        height: 100vh;
      }
    }
  }
</style>
