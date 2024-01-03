<template>
  <div class="container">
    <div class="heading">
      <h1 class="heading-section-border">Boules</h1>
      <h1 class="heading-section">maximales</h1>
    </div>
    <p class="text">
      Nuxt is an open source framework that makes web development intuitive and
      powerful.Create performant and production-grade full-stack web apps and
      websites with confidence.
    </p>
    <div class="buttons">
      <RouterLink to="/boules-maximales/optimise">
        <Button
          btnType="primary"
          @click="changeAlgo(1)"
          >Algorithme Optimise</Button
        >
      </RouterLink>
      <RouterLink to="/boules-maximales/brute-force">
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
    const section = algos.getSection("boules-maximales");
    const subSection =
      id === 0 ? section?.subSections[0] : section?.subSections[1];
    const subSubSection = subSection?.subSections[0];
    algos.setActiveAlgo(section);
    algos.setActiveAlgoType(subSection?.id);
    algos.setActiveSection(subSubSection?.id);
  };
</script>

<style lang="scss" scoped>
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
  @media (max-width: 1280px) {
    .container {
      max-width: 96rem;
      & .heading-section-border {
        font-size: 8.2rem;
      }
    }
  }
  @media (max-width: 1024px) {
    .container {
      max-width: 92rem;
      & .heading-section-border {
        font-size: 7.6rem;
      }
    }
  }
  @media (max-width: 768px) {
    .container {
      max-width: 76rem;
      & .heading-section-border {
        font-size: 5.4rem;
      }
      & .heading-section {
        font-size: 5.4rem;
      }
      & .text {
        text-align: center;
      }
    }
  }
  @media (max-width: 580px) {
    .heading {
      align-items: flex-start;
      justify-content: flex-start;
      text-align: left;
    }
    .container {
      max-width: 72rem;
    }
  }
  @media (max-width: 512px) {
    .container {
      margin: 9.2rem 2.4rem;
      align-items: flex-start;
      & .text {
        text-align: left;
      }
      & .heading-section {
        font-size: 4.2rem;
        max-width: 100%;
        letter-spacing: 0.5rem;

        &-border {
          font-size: 4.2rem;
          letter-spacing: 0.5rem;
        }
      }
    }
  }
</style>
