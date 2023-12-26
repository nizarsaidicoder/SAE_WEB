<script setup>
  import AlgoSection from "@/components/AlgoSection.vue";
</script>

<template>
  <div
    class="documentation"
    id="carte-distance">
    <h1 class="documentation-title">Carte Distance Euclidienne au carré</h1>
    <p class="documentation-description">
      La "Carte Distance Euclidienne au Carré" est une mesure fondamentale en
      traitement d'images. Elle évalue la distance entre deux points dans un
      espace pixel. Plus spécifiquement, elle quantifie la différence de
      luminosité entre les pixels. Cette mesure est souvent utilisée dans des
      contextes tels que la segmentation d'image et la détection de contours.
    </p>
    <AlgoSection />
  </div>
</template>

<style lang="scss">
  @import "@/assets/css/main";
  .documentation {
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    &-title {
      font-size: 4.8rem;
      font-weight: bold;
      font-weight: 800;
    }
    &-description {
      font-size: 1.8rem;
      font-weight: 500;
      margin-bottom: 1rem;
    }
  }
</style>
