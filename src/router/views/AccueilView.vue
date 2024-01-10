<template>
  <div class="section-accueil">
    <h1 class="heading-primary accueil-title">ACCUEIL</h1>
    <div class="accueil">
      <div class="accueil-text">
        <div
          id="typewriter"
          class="typewriter"></div>
        <p class="accueil-text-para">
          Bienvenue sur notre site de compression d'images ! Découvrez comment
          notre approche novatrice, basée sur l'algorithme de la Carte de
          Distance Euclidienne au Carré (SEDT) et les Boules Maximales,
          révolutionne la compression, spécifiquement pour les images binaires
          au format BMP. Réduisez la taille des fichiers sans compromettre la
          qualité visuelle. Explorez notre contenu éducatif pour comprendre ces
          techniques en seulement quelques clics. Optez pour une compression
          intelligente et efficace dès aujourd'hui !
        </p>
        <div class="accueil-buttons">
          <RouterLink to="/carte-distance">
            <Button btnType="primary">Voir Plus</Button>
          </RouterLink>
          <RouterLink to="/a-propos">
            <Button btnType="secondary">About us</Button>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Button from "../../components/Button.vue";
  export default {
    components: {
      Button,
    },
    mounted() {
      this.typewriterEffect();
    },
    methods: {
      typewriterEffect() {
        const text = "Hello👋, Nous sommes EZWIN !";
        let i = 0;
        const speed = 120; // Speed in milliseconds

        function typeWriter() {
          if (i < text.length) {
            document.getElementById("typewriter").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
          }
        }

        typeWriter();
      },
    },
  };
</script>

<style lang="scss">
  @import "../../assets/css/typography";
  @import "../../assets/css/variables";

  .section-accueil {
    max-width: 120rem;
    margin: 6.4rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .accueil {
    // gap: 50rem;

    &-text {
      display: flex;
      gap: 3.2rem;
      text-align: center;
      flex-direction: column;
      align-items: center;
      animation: text-enter-right 2s cubic-bezier(0.165, 0.84, 0.44, 1);

      &-para {
        font-size: 2rem;
        font-style: normal;
        font-weight: 500;
        line-height: 3.9rem; /* 162.5% */
        letter-spacing: 2.4px;
        letter-spacing: 1.4px;
      }
    }

    &-buttons {
      display: flex;
      gap: 3.6rem;
    }

    .highlight {
      position: relative;
      color: $accent;
      font-weight: 100;
      padding: 0.7rem 0;
      transition: all 0.3s ease-in-out;

      &::after {
        content: "";
        width: 80%;
        height: 50%;
        top: 35%;
        left: 5%;
        position: absolute;
        z-index: -1;
        display: block;
        @include apply-gradient-block($linear);
        transition: all 0.3s ease-in-out;
      }
      &:hover::after {
        width: 110%;
        left: -5%;
      }
      &:hover {
        font-weight: 600;
      }

      &-full::after {
        top: 0%;
        left: -2%;
        width: 105%;
        height: 100%;
      }
    }
  }
  @keyframes typewriter {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
  .typewriter {
    position: relative;
    overflow: hidden;
    font-family: "JetBrains Mono";
    font-size: 2.4rem;
    white-space: nowrap;
    letter-spacing: 0.15em;
    padding: 0.4rem;
    color: $secondary;
    font-weight: 800;
  }

  .typewriter::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 1%;
    width: 1.6rem;
    height: 0.15rem;
    background-color: $accent;
    animation: blink-caret 1s step-end infinite;
  }

  @keyframes blink-caret {
    from,
    to {
      background-color: transparent;
    }
    50% {
      background-color: $accent;
    }
  }

  @media (max-width: 1280px) {
    .section-accueil {
      max-width: 96rem;
    }
  }
  @media (max-width: 1024px) {
    .section-accueil {
      max-width: 92rem;
    }
  }
  @media (max-width: 768px) {
    .section-accueil {
      max-width: 76rem;
    }
  }
  @media (max-width: 512px) {
    .section-accueil {
      max-width: max-content;
      margin: 6.4rem 2.4rem;
      align-items: flex-start;
      gap: 2rem;
    }
    .accueil {
      &-text {
        align-items: flex-start;
        text-align: left;
        &-para {
          font-size: 1.8rem;
          line-height: 3rem;
        }
      }
    }
    .typewriter {
      font-size: 1.8rem;
    }
  }
</style>
