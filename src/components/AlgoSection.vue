<template>
  <section
    class="algo-container"
    :id="algo.id">
    <h2 class="algo-title">Algorithme {{ algo.type }}</h2>
    <div class="algo-explanation">
      <p class="algo-description">
        {{ algo.description }}
      </p>
      <div class="algo-sections">
        <AlgoSubSection :algo="algo" />
      </div>
    </div>
    <div class="algo-code">
      <CodeBlock :code="algo.code" />
    </div>
  </section>
</template>

<script>
  import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
  import CodeBlock from "@/components/CodeBlock.vue";
  import AlgoSubSection from "@/components/AlgoSubSection.vue";
  import { useSectionStore } from "@/data/sectionStore";
  export default {
    components: {
      CodeBlock,
      AlgoSubSection,
    },
    props: {
      algo: {
        type: Object,
        required: true,
      },
    },
  };
</script>

<style lang="scss">
  @import "@/assets/css/variables";
  .algo {
    &-container {
      border-top: $accent 1px solid;
      margin: 2rem 0;
      padding: 2rem 0;
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
    }
    &-title {
      font-size: 3.2rem !important;
      font-weight: 500;
    }
    &-explanation {
      display: flex;
      flex-direction: column;

      gap: 3.2rem;
    }
    &-description {
      font-size: 1.8rem;
      font-weight: 400;
    }
  }
</style>
