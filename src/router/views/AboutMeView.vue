<template>
  <div>
    <AmineView v-if="profile === 'amine'" />
    <NizarView v-if="profile === 'nizar'" />
    <NesrineView v-if="profile === 'nesrine'" />
  </div>
</template>

<script setup>
  import { useRoute } from "vue-router";
  import AmineView from "./portfolios/AmineView.vue";
  import NizarView from "./portfolios/NizarView.vue";
  import NesrineView from "./portfolios/NesrineView.vue";

  const route = useRoute();
  const profile = route.params.name;
</script>

<style lang="scss" scoped></style>
