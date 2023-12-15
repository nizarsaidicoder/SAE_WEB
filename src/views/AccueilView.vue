<template>
  <h1 class="heading-section mt-48 ml-12">01 ACCUEIL</h1>
  <div class="accueil">
    <div class="accueil-text">
      <p class="accueil-text-para">
        Hello! 👋 WE ARE
        <span class="highlight highlight-full">EZWIN</span> Bienvenue sur notre
        site de compression d'images ! Découvrez comment notre approche
        novatrice, basée sur l'algorithme de Distance Euclidienne au Carré (SED)
        et les Boules Maximales, révolutionne la compression. Réduisez la taille
        des fichiers sans compromettre la qualité visuelle. Explorez notre
        contenu éducatif pour comprendre ces techniques en seulement quelques
        clics. Optez pour une compression intelligente et efficace dès
        aujourd'hui !
      </p>
    </div>
    <div class="accueil-img">
      <img
        class="accueil-img-1"
        src="../assets/images/image-accueil.png"
        alt="" />
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

  .heading-section {
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
  .accueil {
    margin: 3.2rem auto;
    max-width: 140rem;
    display: grid;
    grid-template-columns: 1fr 1fr; /* Creates 2 columns of equal width */
    grid-template-rows: auto; /* Creates 1 row that adjusts to the content */
    gap: 3.2rem; /* Adjust the gap as needed */
    // gap: 50rem;

    &-text {
      display: flex;
      gap: 10rem;
      flex-direction: column;
      &-para {
        font-size: 2.4rem;
        margin-left: 8rem;
      }
      // margin-left: 5rem;
    }
    &-img {
      position: relative;
      max-width: 50rem;
      &-1 {
        position: absolute;
        top: -35%;
        left: 20%;
      }
    }

    .highlight {
      position: relative;
      color: black;
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
        background-color: $accent;
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
