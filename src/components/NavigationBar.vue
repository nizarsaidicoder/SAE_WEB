<template>
  <link
    rel="stylesheet"
    href="https://cdn-uicons.flaticon.com/2.0.0/uicons-regular-rounded/css/uicons-regular-rounded.css" />
  <div>
    <nav class="navigation">
      <div class="navigation-container">
        <img
          src="../assets/images/Logo.svg"
          alt="logo "
          class="logo-img highlight highlight-full" />
        <button
          class="navigation-toggle"
          @click="toggleMenu">
          <i class="fi fi-rr-menu-burger"></i>
        </button>
        <ul
          class="navigation-list"
          :class="{ 'show-menu appear': isMenuOpen }">
          <RouterLink
            class="navigation-item"
            to="/"
            ><i class="fi fi-rr-home navigation-item-icon"></i>
            <p class="navigation-item-text">Accueil</p></RouterLink
          >
          <RouterLink
            class="navigation-item"
            to="/carte-distance"
            ><i class="fi fi-rr-route navigation-item-icon"></i>
            <p class="navigation-item-text">Carte Distance</p></RouterLink
          >
          <RouterLink
            class="navigation-item"
            to="/boules-maximales"
            ><i class="fi fi-rr-ball-pile navigation-item-icon"></i>
            <p class="navigation-item-text">Boules maximales</p></RouterLink
          >
          <RouterLink
            class="navigation-item"
            to="/reconstruction"
            ><i class="fi fi-rr-build-alt navigation-item-icon"></i>
            <p class="navigation-item-text">Reconstruction</p></RouterLink
          >
          <RouterLink
            class="navigation-item"
            to="/a-propos"
            ><i class="fi fi-rr-images navigation-item-icon"></i>
            <p class="navigation-item-text">A propos</p></RouterLink
          >
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup>
  import { ref } from "vue";

  const isMenuOpen = ref(false);
  const isSmallScreen = ref(false);
  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
  }
</script>

<style lang="scss">
  @import "@/assets/css/variables";
  @import "@/assets/css/mixins";
  .navigation {
    background-color: $primary;
    border-bottom: 1px solid $accent;
    &-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      padding: 0.6rem 2rem;
      width: 100vw;
      // max-width: fit-content;
    }
    &-item {
      text-transform: uppercase;
      text-decoration: none;
      font-weight: 600;
      letter-spacing: 0.1rem;
      font-size: 1.6rem;
      padding: 0.8rem 0;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      &-text {
        @include apply-gradient-text;
      }
      &:hover {
        .navigation-item-icon {
          transition: all cubic-bezier(0.39, 0.575, 0.565, 1) 0.3s;
          @include apply-gradient-text;
          color: transparent;
          transform: scale(1.4);
        }
        .navigation-item-text {
          @include apply-gradient-text;
          color: transparent;

          // color: red;
        }
      }
      &:after {
        background: none repeat scroll 0 0 transparent;
        position: absolute;
        display: block;
        bottom: -7px; /* Adjust the value to position the underline */
        content: "";
        height: 3px;
        left: 0;
        border-radius: 3px;
        @include apply-gradient-block($linear);
        transition: width 0.3s ease 0s, left 0.3s ease 0s, height 0.1s ease 0s;
        width: 0;
      }
      &:hover:after {
        width: 100%;
        left: 0;
      }
      &:active:after {
        height: 5px;
        width: 100%;
      }
    }
  }
  /* LOGO */
  .logo-img {
    height: 6.4rem;
  }

  /* NAVBAR LIST */
  .navigation-container > ul {
    padding: 0;
    list-style: none;
    display: flex;
    gap: 6rem;
    font-size: 1.8rem;
  }
  .navigation-toggle {
    display: none;
  }
  /* RESPONSIVE STYLES */
  @media (max-width: 768px) {
    .navigation-container {
      flex-direction: column;
      align-items: flex-start;
      position: relative;
    }
    .navigation-toggle {
      display: block;
      font-size: 4.6rem;
      color: $accent;
      cursor: pointer;
      margin-top: 1.2rem;
      position: absolute;
      top: 0;
      right: 5%;
    }
    .navigation-list {
      display: none;
      flex-direction: column;
      gap: 2rem;
      padding: 1rem 0;
      width: 100%;
      &.show-menu {
        display: flex;
      }
    }
    .navigation-item {
      width: 100%;
      text-align: center;
    }
  }
</style>
