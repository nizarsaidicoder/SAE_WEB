<template>
  <link
    rel="stylesheet"
    href="https://cdn-uicons.flaticon.com/2.0.0/uicons-regular-rounded/css/uicons-regular-rounded.css" />
  <div>
    <nav
      class="navigation"
      :class="isFixed ? 'fixed-nav' : ''">
      <div class="navigation-container">
        <img
          src="../assets/images/Logo.svg"
          alt="logo "
          class="logo-img highlight highlight-full" />
        <button
          class="navigation-toggle"
          @click="toggleMenu">
          <div
            class="hamburger-line"
            :class="isMenuOpen ? 'animate' : ''"></div>
          <div
            class="hamburger-line"
            :class="isMenuOpen ? 'animate' : ''"></div>
          <div
            class="hamburger-line"
            :class="isMenuOpen ? 'animate' : ''"></div>
        </button>
        <ul
          class="navigation-list"
          :class="isMenuOpen ? 'show-menu appear' : ''">
          <RouterLink
            @click="toggleMenu"
            class="navigation-item"
            to="/"
            ><i class="fi fi-rr-home navigation-item-icon"></i>
            <p class="navigation-item-text">Accueil</p></RouterLink
          >
          <RouterLink
            @click="toggleMenu"
            class="navigation-item"
            to="/carte-distance"
            ><i class="fi fi-rr-route navigation-item-icon"></i>
            <p class="navigation-item-text">Carte Distance</p></RouterLink
          >
          <RouterLink
            @click="toggleMenu"
            class="navigation-item"
            to="/boules-maximales"
            ><i class="fi fi-rr-ball-pile navigation-item-icon"></i>
            <p class="navigation-item-text">Boules maximales</p></RouterLink
          >
          <RouterLink
            @click="toggleMenu"
            class="navigation-item"
            to="/reconstruction"
            ><i class="fi fi-rr-build-alt navigation-item-icon"></i>
            <p class="navigation-item-text">Reconstruction</p></RouterLink
          >
          <RouterLink
            @click="toggleMenu"
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
  import { computed, ref, watch } from "vue";
  import { useRoute } from "vue-router";

  const route = useRoute();
  const isFixed = computed(() => {
    return (
      route.path.includes("/boules-maximales/") ||
      route.path.includes("/reconstruction/") ||
      route.path.includes("/carte-distance/")
    );
  });
  watch(
    () => isFixed.value,
    (newValue) => {
      isFixed.value = newValue;
    }
  );
  const isMenuOpen = ref(false);
  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/css/variables";
  @import "@/assets/css/animations";
  @import "@/assets/css/mixins";
  .navigation {
    background-color: $primary;
    border-bottom: 1px solid $accent;
    width: 100%;
    &-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      padding: 1.2rem 2rem;
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
          color: $secondary;
          transform: scale(1.4);
        }
        .navigation-item-text {
          color: $secondary;

          // color: red;
        }
      }
      &:after {
        background: none repeat scroll 0 0 transparent;
        position: absolute;
        display: block;
        bottom: -7px; /* Adjust the value to position the underline */
        content: "";
        height: 1px;
        left: 0;
        border-radius: 1px;
        background-color: $secondary;
        transition: width 0.3s ease 0s, left 0.3s ease 0s, height 0.1s ease 0s;
        width: 0;
      }
      &:hover:after {
        width: 100%;
        left: 0;
      }
      &:active:after {
        height: 2px;
        width: 100%;
      }
    }
  }
  /* LOGO */
  .logo-img {
    height: 4.8rem;
    transition: all 1s ease-in;
    animation: animate-logo-rotate 2s cubic-bezier(0.165, 0.84, 0.44, 1);
    &:hover {
      transform: rotate(720deg);
    }
  }

  /* NAVBAR LIST */
  .navigation-list {
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
    .navigation-container > ul {
      display: none;
    }
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
      position: absolute;
      background-color: $primary;
      z-index: 5;
      top: 90%;
      left: 0;
      display: none;
      flex-direction: column;
      gap: 2rem;
      padding: 1rem 0;
      width: 100%;
      padding: 2.4rem;
      border-bottom: $accent 2px solid;
      &.show-menu {
        display: flex;
      }
    }
    .navigation-item {
      width: 100%;
      text-align: center;
    }
  }
  .fixed-nav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
  }

  @media (max-width: 1440px) {
    .navigation {
      &-item {
        font-size: 1.5rem;
        gap: 0.8rem;
      }
      &-list {
        gap: 4rem;
      }
    }
  }
  @media (max-width: 1280px) {
    .navigation {
      &-item {
        font-size: 1.4rem;
        gap: 0.6rem;
      }
      &-list {
        gap: 4rem;
      }
    }
  }
  @media (max-width: 1024px) {
    .navigation {
      &-item {
        font-size: 1.3rem;
        gap: 0.4rem;
      }
      &-list {
        gap: 4rem;
      }
    }
  }
  @media (max-width: 768px) {
    .navigation {
      &-item {
        font-size: 1.2rem;
      }
    }
  }
  .hamburger-line {
    width: 35px;
    height: 5px;
    background-color: $accent;
    border-radius: 8px;
    margin: 6px 0;
    transition: all 0.4s ease-in;
  }

  /* Rotate first bar */
  .animate:first-child {
    transform: rotate(-45deg) translate(-8px, 5px);
  }

  /* Fade out the second bar */
  .animate:nth-child(2) {
    transform: translateX(100px);
  }

  /* Rotate last bar */
  .animate:nth-child(3) {
    transform: rotate(45deg) translate(-10px, -8px);
  }
</style>
