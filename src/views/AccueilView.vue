<template>
  <div class="section-accueil">
    <h1 class="heading-primary accueil-title">01 ACCUEIL</h1>
    <div class="accueil">
      <div class="accueil-text">
        <p class="accueil-text-para">
          Hello! 👋 WE ARE
          <span class="highlight highlight-full">EZWIN</span> Bienvenue sur
          notre site de compression d'images ! Découvrez comment notre approche
          novatrice, basée sur l'algorithme de Distance Euclidienne au Carré
          (SED) et les Boules Maximales, révolutionne la compression. Réduisez
          la taille des fichiers sans compromettre la qualité visuelle. Explorez
          notre contenu éducatif pour comprendre ces techniques en seulement
          quelques clics. Optez pour une compression intelligente et efficace
          dès aujourd'hui !
        </p>
      </div>
      <div class="accueil-img">
        <img
          class="accueil-img-image"
          src="@/assets/images/hero-img.png"
          alt="" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    setup() {
      return {};
    },
  };
</script>

<style lang="scss" scoped>
  @import "../assets/css/typography";
  @import "../assets/css/variables";
  @import "../assets/css/animations";
  @import "@/assets/css/mixins";

  .section-accueil {
    margin: 6.4rem auto;
  }

  .accueil {
    display: grid;
    grid-template-columns: 1fr 1fr; /* Creates 2 columns of equal width */
    grid-template-rows: auto; /* Creates 1 row that adjusts to the content */
    gap: 3.2rem; /* Adjust the gap as needed */
    // gap: 50rem;
    &-title {
      margin-left: 3.2rem;
      margin-bottom: 2.4rem;
    }
    &-text {
      display: flex;
      gap: 10rem;
      flex-direction: column;
      animation: text-enter-right 2s cubic-bezier(0.165, 0.84, 0.44, 1);
      &-para {
        font-size: 2.4rem;
        margin-left: 8rem;
      }
      // margin-left: 5rem;
    }
    &-img {
      position: relative;
      &-image {
        width: 100rem;
        position: absolute;
        top: -50%;
        left: 30%;
        transform: scale(1.1);
      }
    }

    .highlight {
      position: relative;
      color: $accent;
      font-weight: 100;
      &::after {
        content: "";
        width: 80%;
        height: 50%;
        top: 35%;
        left: 5%;
        position: absolute;
        z-index: -1;
        display: block;
        @include apply-gradient-block;
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
