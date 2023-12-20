<script setup>
  import NavigationBar from "@/components/NavigationBar.vue";
  import { RouterView } from "vue-router";
</script>

<template>
  <header>
    <NavigationBar />
  </header>
  <div class="background-lines">
    <RouterView />
  </div>
</template>

<style lang="scss">
  @import "./assets/css/variables";
  body {
    // background-image: url("@/assets/images/lines/Line\ 8.png");
    // background-repeat: no-repeat;
    // background-size: 220rem;
    // background-position: 10%;
    // background-position-x: center;
  }
</style>
