<template>
  <ScrollSpy class="doc-navigation" />
  <div class="doc-content">
    <CarteDistanceDocs v-if="activeSection === 'carte-distance'" />
    <BoulesMaxDocs v-if="activeSection === 'boules-maximales'" />
    <ReconstructionDocs v-if="activeSection === 'reconstruction'" />
  </div>
</template>

<script setup>
  import { ref, watch, onMounted } from "vue";
  import { useSectionStore } from "@/data/sectionStore";
  import ScrollSpy from "@/components/ScrollSpy.vue";
  import CarteDistanceDocs from "./CarteDistance/CarteDistanceDocs.vue";
  import BoulesMaxDocs from "./BoulesMax/BoulesMaxDocs.vue";
  import ReconstructionDocs from "./Reconstruction/ReconstructionDocs.vue";

  const store = useSectionStore();
  const activeSection = ref(store.activeSection);
  onMounted(() => {
    store.setSectionsFromRoute();
  });
  // Watch for changes in the store's activeSection
  watch(
    () => store.activeSection,
    (newValue) => {
      activeSection.value = newValue;
    }
  );
</script>

<style lang="scss">
  @import "@/assets/css/variables";
  .doc {
    &-container {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      margin: 6.4rem 3.6rem;
      gap: 3rem;
    }

    &-navigation {
      position: fixed;
      top: 20%;
      left: 2%;
      height: fit-content;
      padding: 0rem 2rem;
    }
    &-content {
      margin: 10% 6.4rem 9.6rem 22%;
    }
  }

  .algo-title {
    font-size: 2.4rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
</style>
