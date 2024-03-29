<template>
  <div class="menu">
    <RouterLink :to="'/' + id + '/brute-force'">
      <h3
        class="menu-section-title hover"
        :class="id == activeSection ? 'active' : ''"
        :id="id"
        @click="changeAlgo(id)">
        {{ menuTitle }}
      </h3>
    </RouterLink>

    <ul
      class="menu-sections"
      v-if="activeSection == id">
      <li
        v-for="section in menuSections"
        :key="section.id"
        class="menu-sections-section"
        :class="activeSubSection != section.id ? 'hover' : ''">
        <RouterLink
          :to="section.id ? section.id.replace(id + '-' ?? '', '') : ''">
          <span
            :class="section.id == activeSubSection ? 'active' : ''"
            @click="changeAlgoType(section.id)">
            {{ section.title }}
            <span
              v-if="section.id == activeSubSection"
              class="scroll-spy-arrow active"
              >&darr;</span
            >
            <span
              v-else
              class="scroll-spy-arrow"
              >&rarr;</span
            >
          </span>
        </RouterLink>
        <ul
          class="menu-sections-items"
          v-if="activeSubSection == section.id">
          <li
            v-for="subSection in section.subSections"
            :key="subSection.id"
            class="menu-sections-items-item">
            <span :class="subSection.id == activeSubSubSection ? 'active' : ''">
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
    const section = algos.getSection(id);
    const subSection = section?.subSections[0];
    const subSubSection = subSection?.subSections[0];
    algos.setActiveAlgo(id);
    algos.setActiveAlgoType(subSection?.id);
    algos.setActiveSection(subSubSection?.id);
  };
  const changeAlgoType = (id) => {
    console.log(id);

    const subSection = algos.getSubSection(id);
    const subSubSection = subSection?.subSections[0];
    algos.setActiveAlgoType(subSection?.id);
    algos.setActiveSection(subSubSection?.id);
  };
  const changeSection = (id) => {
    algos.setActiveSection(id);
  };

  watch(
    () => algos.activeSection,
    (newValue) => {
      activeSection.value = newValue || null;
    }
  );
  watch(
    () => algos.activeSubSection,
    (newValue) => {
      activeSubSection.value = newValue || null;
    }
  );
  watch(
    () => algos.activeSubSubSection,
    (newValue) => {
      activeSubSubSection.value = newValue || null;
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
    * {
      transition: all 0.3s ease-in-out;
    }
    &-section-title {
      font-size: 1.8rem;
      font-weight: 600;
      margin-bottom: 1rem;
      cursor: pointer;
      position: relative;
      &:hover {
        color: $secondary;
      }
    }
    &-sections {
      display: flex;
      flex-direction: column;
      border-left: 1px solid $grey;
      padding: 0 2rem;
      gap: 2.4rem;
      * {
        transition: all 0.3s ease-in-out;
      }
      &-section {
        display: flex;
        flex-direction: column;
        font-size: 1.6rem;
        gap: 1.2rem;
        cursor: pointer;
        position: relative;

        * {
          transition: all 0.3s ease-in-out;
        }
      }
      &-items {
        padding: 0 2rem;
        border-left: 1px solid $grey;
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        font-size: 1.4rem;
        cursor: default;
        * {
          transition: all 0.3s ease-in-out;
        }
      }
    }
  }
  .hidden {
    display: none;
  }
  .active {
    color: $secondary;
  }

  .scroll-spy-arrow {
    position: absolute;
    right: 0;
    font-size: 1.2rem;
    font-weight: 600;
  }
  .hover {
    position: relative;
    &:after {
      background: none repeat scroll 0 0 transparent;
      position: absolute;
      display: block;
      bottom: -7px; /* Adjust the value to position the underline */
      content: "";
      height: 3px;
      left: 0;
      border-radius: 3px;
      @include apply-gradient-block($linear);
      transition: width 0.3s ease 0s, left 0.3s ease 0s, height 0.1s ease 0s;
      width: 0;
    }
    &:hover:after {
      width: 80%;
      left: 0;
    }
    &:active:after {
      height: 5px;
      width: 100%;
    }
  }
  @media (max-width: 1024px) {
    .menu {
      &-section-title {
        font-size: 1.6rem;
      }
      &-sections {
        padding: 0 1.4rem;

        &-section {
          font-size: 1.4rem;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .menu {
      &-section-title {
        font-size: 1.4rem;
      }
      &-sections {
        padding: 0 1.2rem;

        &-section {
          font-size: 1.2rem;
        }
        &-items {
          font-size: 1.2rem;
        }
      }
    }
  }
  @media (max-width: 580px) {
    .menu {
      &-section-title {
        font-size: 1.3rem;
      }
      &-sections {
        padding: 0 1rem;

        &-section {
          font-size: 1rem;
        }
      }
    }
  }
  @media (max-width: 512px) {
    .menu {
      &-section-title {
        font-size: 1.6rem;
      }
      &-sections {
        padding: 0 1.4rem;

        &-section {
          font-size: 1.4rem;
        }
      }
    }
  }
</style>
