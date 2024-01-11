<script>
  import { ref, computed, watch } from "vue";
  import { useAlgoStore } from "@/data/algoStore";
  import { useSectionStore } from "@/data/sectionStore";
  import ComparaisonSection from "@/components/ComparaisonSection.vue";
  import AlgoSection from "@/components/AlgoSection.vue";
  import { VueperSlides, VueperSlide } from "vueperslides";
  import Button from "@/components/Button.vue";
  import "vueperslides/dist/vueperslides.css";
  export default {
    setup() {
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };

      const algos = useAlgoStore().algorithmes[0];

      const sections = useSectionStore();
      const comparaison = ref(
        sections.activeSubSection == "carte-distance-comparaison" ? algos : null
      );
      const activeAlgo = ref(
        sections.activeSubSection == "carte-distance-brute-force"
          ? algos.algoTypes[0]
          : algos.algoTypes[1]
      );
      const slides = algos.images;
      const screenWidth = ref(window.innerWidth);
      const screenHeight = ref(window.innerHeight);
      const show = ref(false);
      const image = ref("");

      const changeAlgo = (id, change) => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        let section;
        if (change == 1) {
          section = sections.getSection("boules-maximales");
        } else if (change == 2) {
          section = sections.getSection("reconstruction");
        } else {
          section = sections.getSection("carte-distance");
        }
        const subSection =
          id === 0 ? section?.subSections[0] : section?.subSections[1];
        const subSubSection = subSection?.subSections[0];
        sections.setActiveAlgo(section.id);
        sections.setActiveAlgoType(subSection?.id);
        sections.setActiveSection(subSubSection?.id);
      };

      const updateScreenSize = () => {
        screenWidth.value = window.innerWidth;
        screenHeight.value = window.innerHeight;
      };
      const showImage = (slide) => {
        image.value = slide;
        show.value = true;
      };
      watch(
        () => sections.activeSubSection,
        (newVal) => {
          activeAlgo.value =
            newVal == "carte-distance-brute-force"
              ? algos.algoTypes[0]
              : algos.algoTypes[1];
        }
      );
      watch(
        () => sections.activeSubSection,
        (newVal) => {
          comparaison.value =
            newVal == "carte-distance-comparaison" ? algos : null;
        }
      );

      return {
        activeAlgo,
        screenWidth,
        screenHeight,
        showImage,
        slides,
        show,
        image,
        changeAlgo,
        algos,
        comparaison,
      };
    },
    components: {
      AlgoSection,
      VueperSlides,
      VueperSlide,
      ComparaisonSection,
      Button,
    },
  };
</script>

<template>
  <div
    class="documentation"
    id="carte-distance">
    <h1 class="documentation-title">Carte Distance Euclidienne au carré</h1>
    <ComparaisonSection
      v-if="comparaison"
      :data="comparaison" />
    <div v-else>
      <p
        class="text"
        style="text-align: left">
        {{ algos.description }}
      </p>
      <AlgoSection
        v-if="activeAlgo"
        :algo="activeAlgo" />

      <section id="visualisation">
        <h1 class="visualisation-title">VISUALISATION</h1>
        <vueper-slides
          class="no-shadow"
          :visible-slides="screenWidth < 768 ? 1 : 3"
          :slide-ratio="1 / 3"
          :gap="3"
          :dragging-distance="70">
          <vueper-slide
            v-for="(slide, i) in slides"
            :key="i"
            :image="slide"
            :style="`background-size: contain; background-repeat: no-repeat; background-position: center; background-color: #fff;`"
            @click="showImage(slide)"
            class="border" />
        </vueper-slides>
      </section>
      <div
        v-if="show"
        class="modal"
        @click="show = false">
        <div class="modal-content">
          <span
            @click="show = false"
            class="close"
            >&times;</span
          >
          <img
            :src="image"
            alt="Visualisation de l'algorithme"
            class="modal-image" />
        </div>
      </div>
    </div>
  </div>
  <div class="buttons">
    <RouterLink
      @click="changeAlgo(1)"
      to="/carte-distance/optimise">
      <Button btnType="secondary">Algorithme Optimise</Button>
    </RouterLink>
    <RouterLink
      to="/carte-distance/brute-force"
      @click="changeAlgo(0)">
      <Button btnType="secondary">Algorithme Brute force</Button>
    </RouterLink>
    <RouterLink
      to="/boules-maximales/brute-force"
      @click="changeAlgo(0, 1)">
      <Button btnType="secondary">Boules Maximales</Button>
    </RouterLink>
    <RouterLink
      to="/reconstruction/docs"
      @click="changeAlgo(0, 2)">
      <Button btnType="secondary">Reconstruction</Button>
    </RouterLink>
  </div>
</template>

<style lang="scss">
  @import "@/assets/css/main";
  @import "@/assets/css/variables";
  @import "@/assets/css/mixins";
  .buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 4.6rem;
  }
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }
  .modal-content {
    background-color: white;
    padding: 2rem;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    position: relative;
  }
  .close {
    position: absolute;
    top: -4%;
    right: 0.5rem;
    font-size: 6.4rem;
    color: $primary;
    cursor: pointer;
  }
  .modal-image {
    height: 64rem;
  }
  .visualisation-title {
    font-size: 2.4rem;
    font-weight: 500;
    @include apply-gradient-text;
    color: transparent;
    margin-bottom: 2rem;
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
  .vueperslides__arrow {
    color: white;
  }
  #visualisation {
    margin-bottom: 6.4rem;
  }
  @media (max-width: 768px) {
    .vueperslides__parallax-wrapper {
      height: 32rem;
    }
    .vueperslide {
      height: 32rem !important;
    }
    .vueperslides__arrow {
      color: black;
    }
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
