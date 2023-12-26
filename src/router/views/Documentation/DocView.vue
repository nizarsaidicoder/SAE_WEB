<template>
  <ScrollSpy class="doc-navigation" />
  <div class="doc-content">
    <CarteDistanceDocs v-if="activeSection === 'carte-distance'" />
    <BoulesMaxDocs v-if="activeSection === 'boules-maximales'" />
    <ReconstructionDocs v-if="activeSection === 'reconstruction'" />
  </div>
</template>

<script setup>
  import { ref, watch } from "vue";
  import { useSectionStore } from "@/data/sectionStore";
  import ScrollSpy from "@/components/ScrollSpy.vue";
  import CarteDistanceDocs from "./CarteDistance/CarteDistanceDocs.vue";
  import BoulesMaxDocs from "./BoulesMax/BoulesMaxDocs.vue";
  import ReconstructionDocs from "./Reconstruction/ReconstructionDocs.vue";
  const store = useSectionStore();
  const activeSection = ref(store.activeSection);

  // Watch for changes in the store's activeSection
  watch(
    () => store.activeSection,
    (newValue) => {
      activeSection.value = newValue;
    }
  );
  // const route = useRoute();
  // const path = ref(route.path);
  // console.log(path.value);

  // import DocContent from "@/components/DocContent.vue";
  // const activeSection = ref(null);
  // const handleActiveSectionUpdate = (sectionId) => {
  //   activeSection.value = sectionId;
  //   console.log(sectionId);
  // };

  // const sections = ref([]);

  // const handleAllIds = (ids) => {
  //   sections.value = [...ids];
  // };

  // watch(activeSection, (newValue) => {
  //   console.log("Active section changed:", newValue);
  // });
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
      border-right: $accent 2px solid;
      padding: 0rem 2rem;
    }
    &-content {
      position: fixed;
      top: 20%;
      left: 24%;
      width: 100rem;
      background-color: red;
    }
  }

  .algo-title {
    font-size: 2.4rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
</style>
