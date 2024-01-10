<script>
  import { ref, computed, watch, onMounted } from "vue";
  import { useAlgoStore } from "@/data/algoStore";
  import { useSectionStore } from "@/data/sectionStore";
  import AlgoSection from "@/components/AlgoSection.vue";
  import { VueperSlides, VueperSlide } from "vueperslides";
  import "vueperslides/dist/vueperslides.css";
  export default {
    setup() {
      const algos = useAlgoStore().algorithmes[0];
      const sections = useSectionStore();
      const activeAlgo = ref(
        sections.activeSubSection == "carte-distance-brute-force"
          ? algos.algoTypes[0]
          : algos.algoTypes[1]
      );
      const slides = algos.images;
      watch(
        () => sections.activeSubSection,
        (newVal) => {
          activeAlgo.value =
            newVal == "carte-distance-brute-force"
              ? algos.algoTypes[0]
              : algos.algoTypes[1];
        }
      );

      return {
        activeAlgo,
        slides,
      };
    },
    components: {
      AlgoSection,
      VueperSlides,
      VueperSlide,
    },
  };
</script>

<template>
  <div
    class="documentation"
    id="carte-distance">
    <h1 class="documentation-title">Carte Distance Euclidienne au carré</h1>
    <AlgoSection
      v-if="activeAlgo"
      :algo="activeAlgo" />
    <section id="visualisation">
      <h1 class="visualisation-title">VISUALISATION</h1>
      <vueper-slides
        class="no-shadow"
        :visible-slides="3"
        :slide-ratio="1 / 3"
        :gap="3"
        :dragging-distance="70">
        <vueper-slide
          v-for="(slide, i) in slides"
          :key="i"
          :image="slide"
          :style="`background-size: contain; background-repeat: no-repeat; background-position: center; background-color: white;`"
          class="border" />
      </vueper-slides>
    </section>
  </div>
</template>

<style lang="scss">
  @import "@/assets/css/main";
  @import "@/assets/css/variables";
  @import "@/assets/css/mixins";
  .visualisation-title {
    font-size: 4.8rem;
    font-weight: 500;
    @include apply-gradient-text;
    color: transparent;
    margin: 3.2rem 0;
  }
  .vueperslides__bullet .default {
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid $secondary;
    box-shadow: none;
    transition: 0.3s;
    width: 16px;
    height: 16px;
  }

  .vueperslides__bullet--active .default {
    @include apply-gradient-block($linear);
    border: none;
  }
  .vueperslide--active {
    transform: scale(1) !important;
  }
  .vueperslide {
    transform: scale(0.9);
    transition: 0.3s;
  }
  .vueperslides__bullet span {
    display: block;
    color: #fff;
    font-size: 10px;
    opacity: 0.8;
  }
  .border {
    @include apply-gradient-border-box;
  }
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
  @media (max-width: 1340px) {
    .documentation-title {
      font-size: 4rem;
    }
  }
  @media (max-width: 1080px) {
    .documentation-title {
      font-size: 3.6rem;
    }
  }
  @media (max-width: 780px) {
    .documentation-title {
      font-size: 3.4rem;
    }
  }
  @media (max-width: 580px) {
  }
  @media (max-width: 512px) {
  }
</style>
