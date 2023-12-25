<template>
  <div class="scroll-spy">
    <ScrollSpyMenu
      v-for="section in sections"
      :menuTitle="section.title"
      :menuSections="section.subSections"
      :id="section.id" />
  </div>
</template>

<script setup>
  import ScrollSpyMenu from "./ScrollSpyMenu.vue";
  import { useSectionStore } from "@/data/sectionStore.js";
  const { sections} = useSectionStore();
</script>

<style lang="scss">
  @import "@/assets/css/variables";


  .scroll-spy {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    &-arrow {
      font-size: 1.5rem;
      margin-left: 3rem;
    }
    // ul {
    //   display: flex;
    //   flex-direction: column;
    //   position: relative;
    // }
  }
</style>
