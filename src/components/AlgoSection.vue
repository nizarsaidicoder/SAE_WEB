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
    <section
      class="algo-code"
      id="code">
      <h1 class="code-heading">Etapes d'éxecutions</h1>
      <CodeBlock :code="algo.code" />
    </section>
  </section>
</template>

<script>
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
    data() {
      return {
        observer: null,
      };
    },
    created() {
      this.observer = new IntersectionObserver(this.onElementObserved, {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      });
    },
    watch: {
      // Watch for changes in data that should trigger scrolling
      // For example, if you have a variable named 'scrollToSection' that determines when to scroll
      scrollToSection(newValue, oldValue) {
        if (newValue !== oldValue) {
          this.scrollSectionIntoView();
        }
      },
    },
    mounted() {
      this.observeSections();
      const sectionStore = useSectionStore();

      const sectionElement = document.getElementById(
        sectionStore.activeSubSubSection
      );

      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    },

    beforeDestroy() {
      this.observer.disconnect();
    },
    methods: {
      scrollSectionIntoView() {
        const sectionStore = useSectionStore();

        const sectionElement = document.getElementById(
          sectionStore.activeSubSubSection
        );

        if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: "smooth" });
        }
      },
      observeSections() {
        this.$el.querySelectorAll("section[id]").forEach((section) => {
          this.observer.observe(section);
        });
      },
      onElementObserved(entries) {
        let activeSection = null;
        entries.forEach(({ target, isIntersecting }) => {
          const id = target.getAttribute("id");
          if (isIntersecting) {
            activeSection = id;
          }
        });
        if (activeSection == null) {
          return;
        }
        const sectionStore = useSectionStore();
        sectionStore.setActiveSection(activeSection);
      },
    },
  };
</script>

<style lang="scss">
  @import "@/assets/css/variables";
  .code-heading {
    font-size: 3.8rem;
    margin: 1.2rem 0;
  }
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
