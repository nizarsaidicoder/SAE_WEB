<template>
  <div class="container">
    <div class="heading">
      <h1 class="heading-section-border">CARTE DISTANCE</h1>
      <h1 class="heading-section">EUCLIDIENNE</h1>
    </div>
    <p class="text">
      La "Carte Distance Euclidienne au Carré" est une mesure fondamentale en
      traitement d'images. Elle évalue la distance entre deux points dans un
      espace pixel. Plus spécifiquement, elle quantifie la différence de
      luminosité entre les pixels. Cette mesure est souvent utilisée dans des
      contextes tels que la segmentation d'image et la détection de contours.
    </p>
    <div class="buttons">
      <RouterLink to="/carte-distance/optimise">
        <Button
          btnType="primary"
          @click="changeAlgo(1)"
          >Algorithme Optimise</Button
        >
      </RouterLink>
      <RouterLink to="/carte-distance/brute-force">
        <Button
          btnType="secondary"
          @click="changeAlgo(0)"
          >Algorithme Brute Force</Button
        >
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
  import Button from "@/components/Button.vue";
  import { useSectionStore } from "@/data/sectionStore";
  const algos = useSectionStore();
  const changeAlgo = (id) => {
    const section = algos.getSection("carte-distance");
    const subSection =
      id === 0 ? section?.subSections[0] : section?.subSections[1];
    const subSubSection = subSection?.subSections[0];
    algos.setActiveAlgo(section);
    algos.setActiveAlgoType(subSection?.id);
    algos.setActiveSection(subSubSection?.id);
  };
</script>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 6.4rem auto;
    max-width: 120rem;
    gap: 3.2rem;
  }
  .heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .buttons {
    display: flex;
    gap: 2.4rem;
  }
</style>
