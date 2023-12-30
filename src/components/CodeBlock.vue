<template>
  <highlightjs
    language="csharp"
    :code="csharpCode"
    class="code" />
</template>

<script setup>
  import "highlight.js/lib/common";
  import hljsVuePlugin from "@highlightjs/vue-plugin";
  const props = defineProps({ code: String });
  const csharpCode = props.code;
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
