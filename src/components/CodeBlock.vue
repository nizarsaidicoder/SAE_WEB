<template>
  <highlightjs
    language="csharp"
    :code="csharpCode"
    class="code" />
</template>

<script setup>
  import "highlight.js/lib/common";
  import { defineProps, watch, ref } from "vue";
  const props = defineProps({ code: String });
  const csharpCode = ref(props.code);
  watch(
    () => props.code,
    (newVal) => {
      csharpCode.value = newVal;
    }
  );
</script>
<style lang="scss">
  @import "@/assets/css/variables";
  @import "@/assets/css/mixins";
  .code {
    max-width: fit-content;
    // margin: 8rem;
    font-size: 1.8rem;
    font-weight: bold;
  }
  @media (max-width: 1080px) {
    .code {
      font-size: 1.6rem;
    }
  }
  @media (max-width: 768px) {
    .code {
      font-size: 1.4rem;
    }
  }
  @media (max-width: 580px) {
    .code {
      font-size: 1.2rem;
    }
  }

  code {
    border-radius: 1rem;
    font-weight: bold;
    border: 2px solid $accent;
    &::-webkit-scrollbar {
      height: 6px; /* Adjust the width as needed */
    }
    /* Define the styles for the scrollbar thumb (the draggable handle) */
    &::-webkit-scrollbar-thumb {
      @include apply-gradient-block($accent);
      border-radius: 6px; /* Add rounded corners to the thumb */
    }

    /* Define the styles for the scrollbar track when the thumb is being dragged */
    &::-webkit-scrollbar-track {
      background-color: $primary; /* Change the background color of the track */
    }

    /* Optionally, you can also style the scrollbar corner */
    &::-webkit-scrollbar-corner {
      background-color: $primary; /* Change the background color of the corner */
    }
  }
</style>
