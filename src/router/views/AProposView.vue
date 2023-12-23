<template>
  <div class="about-us-container">
    <h1 class="heading-section">About Us</h1>
    <div class="cards-container">
      <RouterLink
        v-for="profile in profiles"
        :to="'/a-propos/' + profile.name">
        <ProfileCard
          :key="profile.id"
          :name="profile.name"
          :job="profile.job"
          :description="profile.description"
          :backImage="profile.backImage"
          :image="profile.image"
          :theme="profile.theme"
      /></RouterLink>
    </div>
  </div>
</template>

<script setup>
  import ProfileCard from "@/components/ProfileCard.vue";
  import { useAboutStore } from "@/data/aboutStore.js";

  const { profiles } = useAboutStore();
</script>

<style lang="scss">
  /* Add your component's styles here */
  .about-us-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 6.4rem;
    gap: 3.2rem;
  }
  .cards-container {
    display: flex;
    gap: 3.2rem;
  }
</style>
