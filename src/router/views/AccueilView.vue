<template>
  <div class="section-accueil">
    <h1 class="heading-primary accueil-title">01 ACCUEIL</h1>
    <div class="accueil">
      <div class="accueil-text">
        <p class="accueil-text-para">
          Hello! 👋 <span class="highlight highlight-full">WE ARE EZWIN</span>
          Bienvenue sur notre site de compression d'images ! Découvrez comment
          notre approche novatrice, basée sur l'algorithme de Distance
          Euclidienne au Carré (SED) et les Boules Maximales, révolutionne la
          compression. Réduisez la taille des fichiers sans compromettre la
          qualité visuelle. Explorez notre contenu éducatif pour comprendre ces
          techniques en seulement quelques clics. Optez pour une compression
          intelligente et efficace dès aujourd'hui !
        </p>
        <div class="accueil-buttons">
          <RouterLink to="/carte-distance">
            <Button btnType="primary">Voir Plus</Button>
          </RouterLink>
          <RouterLink to="/a-propos">
            <Button btnType="secondary">About us</Button>
          </RouterLink>
        </div>
      </div>
      <div class="accueil-img">
        <img
          class="accueil-img-image"
          src="../../assets/images/hero-img.png"
          alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
  import Button from "../../components/Button.vue";
</script>

<style lang="scss">
  @import "../../assets/css/typography";
  @import "../../assets/css/variables";

  .section-accueil {
    margin: 6.4rem auto;
  }

  .accueil {
    display: flex;
    position: relative;

    // gap: 50rem;
    &-title {
      margin-left: 3.2rem;
      margin-bottom: 2.4rem;
    }
    &-text {
      display: flex;
      gap: 3.2rem;
      flex-direction: column;
      animation: text-enter-right 2s cubic-bezier(0.165, 0.84, 0.44, 1);
      max-width: 72rem;
      margin-left: 12rem;

      &-para {
        font-size: 2.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 3.9rem; /* 162.5% */
        letter-spacing: 2.4px;
      }
    }
    &-img {
      &-image {
        position: absolute;
        top: -50%;
        left: 50%;
        height: 100rem;
        animation: image-enter-left 1s ease-out;
      }
    }
    &-buttons {
      display: flex;
      gap: 3.6rem;
    }

    .highlight {
      position: relative;
      color: $accent;
      font-weight: 100;
      padding: 0.7rem 0;
      &::after {
        content: "";
        width: 80%;
        height: 50%;
        top: 35%;
        left: 5%;
        position: absolute;
        z-index: -1;
        display: block;
        @include apply-gradient-block($linear);
      }
      &:hover {
        .highlight::after {
          top: 35%;
          left: 20%;
        }
      }

      &-full::after {
        top: 0%;
        left: -2%;
        width: 105%;
        height: 100%;
      }
    }
  }
</style>
