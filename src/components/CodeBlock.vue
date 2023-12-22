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
  .code {
    max-width: fit-content;
    // margin: 8rem;
    font-size: 1.8rem;
    font-weight: bold;
  }
  code {
    border-radius: 1rem;
    font-weight: bold;
  }
</style>
