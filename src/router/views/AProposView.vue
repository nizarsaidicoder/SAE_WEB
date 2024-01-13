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
          :backImage="profile.cardImage"
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
  .about-us-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 6.4rem auto;
    max-width: 120rem;
    gap: 3.2rem;
  }
  .cards-container {
    display: flex;
    justify-content: center;

    flex-wrap: wrap;
    gap: 3.2rem;
  }

  @media (max-width: 1280px) {
  }
  @media (max-width: 1024px) {
    .about-us-container {
      max-width: 92rem;
    }
  }
  @media (max-width: 768px) {
    .about-us-container {
      max-width: 76rem;
    }
    .cards-container {
      flex-direction: column;
    }
  }
  @media (max-width: 512px) {
    .about-us-container {
      // max-width: max-content;
      // margin: 6.4rem 2.4rem;
      // gap: 2rem;/
    }
  }
</style>
