<template>
  <link
    rel="stylesheet"
    href="https://cdn-uicons.flaticon.com/2.0.0/uicons-regular-rounded/css/uicons-regular-rounded.css" />
  <div>
    <nav class="navbar">
      <div class="navbar-container">
        <img
          src="../assets/images/Logo.svg"
          alt="logo "
          class="logo-img highlight highlight-full" />
        <ul class="navbar-list">
          <RouterLink
            class="navbar-item"
            to="/"
            ><i class="fi fi-rr-home navbar-item-icon"></i>
            <div class="navbar-item-text">Accueil</div></RouterLink
          >
          <RouterLink
            class="navbar-item"
            to="/carte-distance"
            ><i class="fi fi-rr-route navbar-item-icon"></i>
            <div class="navbar-item-text">Carte Distance</div></RouterLink
          >
          <RouterLink
            class="navbar-item"
            to="/boules-maximales"
            ><i class="fi fi-rr-ball-pile navbar-item-icon"></i>
            <div class="navbar-item-text">Boules maximales</div></RouterLink
          >
          <RouterLink
            class="navbar-item"
            to="/reconsrtuction"
            ><i class="fi fi-rr-build-alt navbar-item-icon"></i>
            <div class="navbar-item-text">Reconstruction</div></RouterLink
          >
          <RouterLink
            class="navbar-item"
            to="/a-propos"
            ><i class="fi fi-rr-images navbar-item-icon"></i>
            <div class="navbar-item-text">A propos</div></RouterLink
          >
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  @import "@/assets/css/variables";
  .navbar {
    background-color: $primary;
    &-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      padding: 1.6rem 2rem;
    }
    &-item {
      color: $accent;
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
      &:hover {
        .navbar-item-icon {
          font-size: 3.2rem;
          transition: all cubic-bezier(0.39, 0.575, 0.565, 1) 0.3s;
        }
      }
      &:after {
        background: none repeat scroll 0 0 transparent;
        position: absolute;
        display: block;
        bottom: 0;
        content: "";
        height: 3px;
        left: 50%;
        border-radius: 3px;
        background: $secondary;
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
  ul {
    padding: 0;
    list-style: none;
    display: flex;
    gap: 6rem;
    font-size: 1.8rem;
  }
</style>
