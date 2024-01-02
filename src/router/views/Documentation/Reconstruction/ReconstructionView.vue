<template>
  <div class="container">
    <div class="heading">
      <h1 class="heading-section">Reconstruction</h1>
    </div>
    <p class="text">
      Nuxt is an open source framework that makes web development intuitive and
      powerful.Create performant and production-grade full-stack web apps and
      websites with confidence.
    </p>
    <div class="buttons">
      <RouterLink to="/reconstruction/optimise">
        <Button
          btnType="primary"
          @click="changeAlgo(1)"
          >Algorithme Optimise</Button
        >
      </RouterLink>
      <RouterLink to="/reconstruction/brute-force">
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
    const section = algos.getSection("reconstruction");
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
    margin: 12.8rem auto;
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
