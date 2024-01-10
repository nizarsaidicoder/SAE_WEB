<template>
  <nav class="profiles-menu">
    <ul class="profiles-menu-list">
      <router-link
        to="/a-propos/nesrine"
        class="profiles-menu-item profiles-menu-item-nesrine"
        :class="data.name == 'nesrine' ? 'link-active' : ''">
        <li class="profiles-menu-link">
          <span class="profiles-menu-link-text">Nesrine</span>
        </li>
      </router-link>
      <router-link
        to="/a-propos/nizar"
        class="profiles-menu-item profiles-menu-item-nizar"
        :class="data.name == 'nizar' ? 'link-active' : ''">
        <li class="profiles-menu-link">
          <span class="profiles-menu-link-text">Nizar</span>
        </li>
      </router-link>
      <router-link
        to="/a-propos/amine"
        class="profiles-menu-item profiles-menu-item-amine"
        :class="data.name == 'amine' ? 'link-active' : ''">
        <li class="profiles-menu-link">
          <span class="profiles-menu-link-text">Amine</span>
        </li>
      </router-link>
    </ul>
  </nav>
  <div
    class="about-background-lines"
    :style="'background-image: url(' + data.backImage + ')'">
    <section
      id="about-me"
      class="about-container">
      <div class="profile">
        <div
          class="profile-img"
          :class="'profile-img-' + data.name">
          <img
            :src="data.image"
            alt="" />
        </div>
        <div class="profile-name">
          <h1 class="">{{ data.lastName }}</h1>
          <h1 :class="data.name">{{ data.name }}</h1>
        </div>
      </div>
      <div class="project">
        <div class="project-info">
          <div class="project-title">Avis concernant le projet :</div>
          <p class="project-desc">{{ data.projectReview }}</p>
          <div class="rating">
            NOTE SAE 1.1 :
            <span v-for="i in data.rating1">&starf;</span>
            <span v-for="i in 5 - data.rating1">&star;</span>
          </div>
          <div class="rating">
            NOTE SAE 1.2 : <span v-for="i in data.rating1">&starf;</span>
            <span v-for="i in 5 - data.rating1">&star;</span>
          </div>
        </div>
        <div class="project-img">
          <img
            :src="data.sideImage"
            alt="" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
  import { useRoute } from "vue-router";
  import { useAboutStore } from "@/data/aboutStore";
  import { computed } from "vue";
  const route = useRoute();
  const aboutStore = useAboutStore();
  const data = computed(() => {
    const profile = route.params.name;
    return aboutStore.profiles.find((p) => p.name === profile);
  });
</script>

<style lang="scss">
  @import "@/assets/css/variables";
  @import "@/assets/css/typography";
  @import "@/assets/css/mixins";

  .profiles-menu {
    font-family: "JetBrains Mono", monospace;
    height: 6.4rem;
    &-list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      border-bottom: 1px solid $accent;
    }
    &-item {
      list-style: none;
      text-align: center;
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
      width: 100%;
      height: 100%;
      border-right: 2px solid $primary;
      gap: 1rem;
      &:hover {
        // background-color: $accent;
        .profiles-menu-link-text {
          color: $primary;
        }
      }
      &:after {
        background: none repeat scroll 0 0 transparent;
        position: absolute;
        display: block;
        bottom: 0; /* Adjust the value to position the underline */
        content: "";
        height: 100%;
        z-index: -1;
        left: 0;
        background-color: $accent;
        transition: width 0.2s ease 0s, left 0.2s ease 0s, height 0.1s ease 0s;
        width: 0;
      }
      &:hover:after {
        width: 80%;
        left: 0;
      }
      &:active:after {
        height: 100%;
        width: 100%;
      }
    }
    &-link {
      text-decoration: none;
      color: $primary;
      font-size: 1.6rem;
      font-weight: 500;
      font-style: normal;
      letter-spacing: 1.6px;
      text-transform: uppercase;
      transition: all 0.2s ease-in-out;
      &-text {
        color: $accent;
        text-transform: uppercase;
        font-size: 2.2rem;
        font-weight: 700;
        z-index: 999;
      }
    }
  }
  .about-background-lines {
    background-repeat: no-repeat;
    background-size: 100%;
    background-position-y: 100%;
    height: 120vh;
    overflow-y: hidden;
  }
  .about-container {
    max-width: 148rem;
    margin: 6.4rem auto;
    display: flex;
    flex-direction: column;
    gap: 6.4rem;
  }

  .profile {
    font-family: "JetBrains Mono", monospace;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 3.2rem;

    // &-img {
    //   width: 20rem;
    //   height: 20rem;
    //   border-radius: 50%;
    //   overflow: hidden;
    //   img {
    //     width: 100%;
    //     height: 100%;
    //     object-fit: cover;
    //   }
    // }
    &-img {
      height: 12.8rem;
      width: 12.8rem;
      border-radius: 50%;
      overflow: hidden;
      &-nizar {
        @include apply-gradient-block($nizar-linear);
      }
      &-amine {
        @include apply-gradient-block($amine-linear);
      }
      &-nesrine {
        @include apply-gradient-block($nesrine-linear);
      }
    }
    &-name {
      display: flex;
      gap: 4rem;
      & h1 {
        font-size: 8.4rem;
        font-style: normal;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 9.6px;
        background-clip: text;
      }
    }
  }
  .project {
    display: flex;
    &-info {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      max-width: 72rem;
    }
    &-title {
      font-size: 2.4rem;
      font-weight: 700;
      font-style: normal;
      letter-spacing: 2.4px;
    }
    &-desc {
      font-size: 1.4rem;
      font-weight: 500;
    }
    &-img {
      width: 80%;
      display: flex;
      justify-content: flex-end;
      align-items: flex-start;
      margin-top: -10%;

      & img {
        width: 65%;
        height: 100%;
      }
    }
  }
  .rating {
    font-family: "JetBrains Mono", monospace;
    font-size: 2.4rem;
    font-weight: 500;
  }
  .nesrine {
    @include apply-gradient-text($nesrine-linear);
    color: transparent;
  }
  .nizar {
    @include apply-gradient-text($nizar-linear);
    color: transparent;
  }
  .amine {
    @include apply-gradient-text($amine-linear);
    color: transparent;
  }
  .link-active {
    background-color: $accent;
    border-bottom: 3px solid $accent;
    .profiles-menu-link-text {
      color: $primary;
    }
  }
</style>
