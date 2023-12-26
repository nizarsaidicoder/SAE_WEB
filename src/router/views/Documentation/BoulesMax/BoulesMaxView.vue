<template>
  <div class="container">
    <div class="heading">
      <h1 class="heading-section-border">Boules</h1>
      <h1 class="heading-section">maximales</h1>
    </div>
    <p class="text">
      Nuxt is an open source framework that makes web development intuitive and
      powerful.Create performant and production-grade full-stack web apps and
      websites with confidence.
    </p>
    <div class="buttons">
      <RouterLink to="/boules-maximales/optimise">
        <Button btnType="primary">Algorithme Optimise</Button>
      </RouterLink>
      <RouterLink to="/boules-maximales/brute-force">
        <Button btnType="secondary">Algorithme Brute Force</Button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
  import Button from "@/components/Button.vue";
</script>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 6.4rem auto;
    max-width: 120rem;
    gap: 3.2rem;
  }
  .heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .buttons {
    display: flex;
    gap: 2.4rem;
  }
</style>
