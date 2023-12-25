<template>
  <ScrollSpy class="doc-navigation" />
  <!-- <div class="doc-container">
    <nav class="doc-navigation">
      <h1 class="algo-title">Carte Distance</h1>

      <h1 class="algo-title">Boules Max</h1>
      <ScrollSpy
        :sections="sections"
        :activeSection="activeSection" />
    </nav>

    <DocContent
      class="doc-content"
      @active-section-update="handleActiveSectionUpdate"
      @all-ids="handleAllIds" />
  </div> -->
</template>

<script setup>
  import { ref, watch } from "vue";
  import { useRoute } from "vue-router";
  const route = useRoute();
  console.log(route.path);

  import ScrollSpy from "@/components/ScrollSpy.vue";
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
      top: 15%;
      left: 2%;
      height: fit-content;
      border-right: $accent 2px solid;
      padding: 0rem 2rem;
    }
    &-content {
      grid-column-start: 3;
      grid-column-end: 10;
    }
  }

  .algo-title {
    font-size: 2.4rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
</style>
