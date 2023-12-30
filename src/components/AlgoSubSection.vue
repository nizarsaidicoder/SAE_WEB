<template>
  <div>
    <div
        v-for="section in algo.sections"
        :key="section.id"
        class="algo-section">
      <h3 class="algo-section-title">{{ section.name }}</h3>
      <div class="algo-section-content">
        <p class="algo-section-description">
          {{ section.description }}
        </p>
        <div v-if="section.etapes" >
          <h1 class="algo-section-steps-title">Etapes</h1>
          <ul class="algo-section-steps">
            <li v-for="etape in section.etapes" class="algo-section-etape"><span class="bold">{{etape.name}} :</span>{{etape.description}}
            <ul v-if="etape.subStep" class="algo-section-subSteps">
              <li v-for="step in etape.subStep" class="algo-section-subStep">{{step}}</li>
            </ul>
            </li>
          </ul>
        </div>
        <CodeBlock :code="section.code" />
      </div>
    </div>
  </div>
</template>

<script setup>
import CodeBlock from "@/components/CodeBlock.vue";
const props = defineProps({
  algo: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" >
@import "@/assets/css/variables";
@import "@/assets/css/mixins";
.algo-section {
  border-top: #555 1px solid;
  padding: 2rem 0;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  &-title {
    font-size: 2.4rem;
    font-weight: 500;
    @include apply-gradient-text;
    color: transparent;
  }
  &-content {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }
  &-description {
    font-size: 1.6rem;
    font-weight: 400;
  }
  &-steps {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    margin:1.2rem 0 0 3.2rem;
    &-title {
      font-size: 2rem;
      font-weight: 500;
      color: #8e47ea;
    }
  }
  &-etape {
    font-size: 1.6rem;
    font-weight: 400;
    list-style: circle;

  }
  &-subSteps {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    margin:1.2rem 0 0 2.4rem;


  }
&-subStep {
    font-size: 1.6rem;
    font-weight: 400;
  list-style: disc;
  }

}
.bold{
  font-weight: 600;
  margin-right: 1rem;
}
</style>
