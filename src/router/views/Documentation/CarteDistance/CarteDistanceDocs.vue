<script setup>
  import AlgoSection from "@/components/AlgoSection.vue";
  import { ref, computed, watch, onMounted } from "vue";
  import { useAlgoStore } from "@/data/algoStore";
  import { useSectionStore } from "@/data/sectionStore";
  const algos = useAlgoStore().algorithmes[0];
  const sections = useSectionStore();
  let activeAlgo = ref(
    sections.activeSubSection == "carte-distance-brute-force"
      ? algos.algoTypes[0]
      : algos.algoTypes[1]
  );
  watch(
    () => sections.activeSubSection,
    (newVal) => {
      activeAlgo.value =
        newVal == "carte-distance-brute-force"
          ? algos.algoTypes[0]
          : algos.algoTypes[1];
    }
  );
</script>

<template>
  <div
    class="documentation"
    id="carte-distance">
    <h1 class="documentation-title">Carte Distance Euclidienne au carré</h1>
    <AlgoSection
      v-if="activeAlgo"
      :algo="activeAlgo" />
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
