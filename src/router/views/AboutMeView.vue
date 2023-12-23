<template>
  <div>
    <AmineView v-if="profile === 'amine'" />
    <NizarView v-if="profile === 'nizar'" />
    <NesrineView v-if="profile === 'nesrine'" />
  </div>
</template>

<script setup>
  import { useRoute } from "vue-router";
  import AmineView from "./AmineView.vue";
  import NizarView from "./NizarView.vue";
  import NesrineView from "./NesrineView.vue";

  const route = useRoute();
  const profile = route.params.name;
</script>

<style lang="scss" scoped></style>
