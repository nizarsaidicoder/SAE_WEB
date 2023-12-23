<template>
  <div class="about-us-container">
    <h1 class="heading-section">About Us</h1>
    <div class="cards-container">
      <ProfileCard
        name="Nesrine"
        job="Developpeuse"
        :description="`💻 Développeuse passionnée créant des merveilles numériques ! 🚀<br>
                  🌟 Donnant vie aux idées avec du code et de la créativité. 🎨`"
        backImage="nes-back.jpg"
        image="nezuko.png"
        theme="nesrine" />
      <ProfileCard
        name="Nizar"
        job="Designer"
        :description="`✨ Concevant l'avenir, un pixel à la fois. 🎨<br>
                  🚀 Transformant l'imagination en réalités visuellement époustouflantes. ☕`"
        backImage="niz-back.png"
        image="nizar.png"
        theme="nizar" />
      <ProfileCard
        name="Amine"
        job="Developpeur"
        :description="`🖥️ Confectionnant des solutions puissantes avec la magie du code ! ✨<br>
                  🌐 Transformant les problèmes complexes en solutions logicielles élégantes. 💡`"
        backImage="amine-back.png"
        image="amine.png"
        theme="amine" />
    </div>
  </div>
</template>

<script setup>
  import ProfileCard from "@/components/ProfileCard.vue";
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
