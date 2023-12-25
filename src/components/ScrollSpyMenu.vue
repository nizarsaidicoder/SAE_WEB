<template>
  <div class="menu">
    <RouterLink :to="'/' + id + '/algo-brute-force'">
      <h3
        class="menu-section-title"
        :class="id == activeSection ? 'active' : ''"
        :id="id"
        @click="changeAlgo(id)">
        {{ menuTitle }}<span class="scroll-spy-arrow">&rarr;</span>
      </h3>
    </RouterLink>

    <ul
      class="menu-sections"
      v-if="activeSection == id">
      <li
        v-for="section in menuSections"
        :key="menuTitle + section"
        @click="changeAlgoType(section.id)"
        class="menu-sections-section">
        <span :class="section.id == activeSubSection ? 'active' : ''">
          {{ section.title }}
        </span>
        <ul
          class="menu-sections-items"
          v-if="activeSubSection == section.id">
          <li
            v-for="subSection in section.subSections"
            :key="menuTitle + section + subSection"
            @click="changeSection(subSection.title.toLowerCase())"
            class="menu-sections-items-item">
            <span
              :class="
                subSection.title.toLowerCase() == activeSubSubSection
                  ? 'active'
                  : ''
              ">
              {{ subSection.title }}
            </span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
  import { useSectionStore } from "@/data/sectionStore.js";
  import { ref, watch } from "vue";
  const props = defineProps({
    menuTitle: {
      type: String,
      required: true,
    },
    menuSections: {
      type: Array,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  });

  const algos = useSectionStore();
  const activeSection = ref(algos.activeSection);
  const activeSubSection = ref(algos.activeSubSection);
  const activeSubSubSection = ref(algos.activeSubSection);

  const changeAlgo = (id) => {
    algos.setActiveAlgo(id);
  };
  const changeAlgoType = (id) => {
    algos.setActiveAlgoType(id);
  };
  const changeSection = (id) => {
    algos.setActiveSection(id);
  };

  watch(
    () => algos.activeSection,
    (newValue) => {
      activeSection.value = newValue;
    }
  );
  watch(
    () => algos.activeSubSection,
    (newValue) => {
      activeSubSection.value = newValue;
    }
  );
  watch(
    () => algos.activeSubSubSection,
    (newValue) => {
      activeSubSubSection.value = newValue;
    }
  );
</script>

<style lang="scss">
  @import "@/assets/css/variables";
  @import "@/assets/css/mixins";
  .menu {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    &-section-title {
      font-size: 1.8rem;
      font-weight: 600;
      margin-bottom: 1rem;
      cursor: pointer;
    }
    &-sections {
      display: flex;
      flex-direction: column;
      border-left: 1px solid $grey;
      padding: 0 2rem;
      gap: 2.4rem;
      &-section {
        display: flex;
        flex-direction: column;
        font-size: 1.6rem;
        gap: 1.2rem;
        cursor: pointer;
      }
      &-items {
        padding: 0 2rem;
        border-left: 1px solid $grey;
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        font-size: 1.4rem;
        cursor: pointer;
      }
    }
  }
  .hidden {
    display: none;
  }
  .active {
    @include apply-gradient-text;
    color: transparent;
  }
  .x {
    color: red;
  }
</style>
