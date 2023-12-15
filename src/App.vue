<script setup>
  import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <Navbar></Navbar>
  <div class="container">
    <h2>01 ACCUEIL</h2>
  </div>
</template>

<style lang="scss" scoped>
  @import "./assets/css/variables";
  .container {
    margin-top: 9rem;
  }
  h2 {
    -webkit-text-stroke: 1px white;
    position: relative;
    display: inline-block;
    font-size: 96px;
    font-style: normal;
    font-weight: 800;
    line-height: 24px; /* 25% */
    letter-spacing: 9.6px;
    color: rgba(0, 0, 0, 0);
    transition: all 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
    &:after {
      background: none repeat scroll 0 0 transparent;
      position: absolute;
      display: block;
      bottom: 0;
      content: "";
      height: 3px;
      left: 60%;
      bottom: -200%;
      background: $secondary;
      transition: width 0.3s ease 0s, left 0.3s ease 0s, height 0.1s ease 0s;
      width: 0;
    }
    &:hover:after {
      width: 100%;
      left: 0;
    }
    &:hover {
      color: $secondary;
      -webkit-text-stroke: 0px white;
      padding-left: 8rem;
    }
  }
</style>
