<template>
  <h1 class="comparaison-title">COMPARAISON</h1>

  <div class="comparaison-container">
    <section
      class="comparaison-section"
      v-for="(comparaison, index) in comparaisonData"
      :key="comparaison.id">
      <div class="comparaison-section__title">
        <h2>{{ comparaison.name }}</h2>
      </div>
      <div class="comparaison-section__sections">
        <div
          class="comparaison-section__sections__content comparaison-section__sections__content--forme">
          <h2 class="comparaison-section__sections__content__title">
            Impact des pixels de la forme
          </h2>
          <div class="comparaison-section__sections__content__text">
            <p>
              {{ comparaison.impactForme }}
            </p>
          </div>
          <div class="comparaison-section__sections__content__image">
            <img
              :src="comparaison.imageForme"
              alt="comparaison" />
          </div>
        </div>
        <div
          class="comparaison-section__sections__content comparaison-section__sections__content--bruit">
          <h2 class="comparaison-section__sections__content__title">
            Impact de bruit
          </h2>

          <div class="comparaison-section__sections__content__text">
            <p>
              {{ comparaison.impactBruit }}
            </p>
          </div>
          <div class="comparaison-section__sections__content__image">
            <img
              :src="comparaison.imageBruit"
              alt="comparaison" />
          </div>
        </div>
      </div>
      <div class="comparaison-section__conclusion">
        <div class="comparaison-section__conclusion--title">Conclusion :</div>
        <div class="comparaison-section__conclusion--text">
          {{ comparaison.performance }}
        </div>
        <div class="rating">
          <div class="rating-item">
            <div class="rating-item__text rating-item__text--bruit">
              Tolérance au bruit :
            </div>
            <div class="rating-item__stars">
              <span v-for="star in comparaison.bruit"> &starf;</span>
              <span v-for="star in 5 - comparaison.bruit">&star;</span>
            </div>
          </div>
          <div class="rating-item">
            <div class="rating-item__text rating-item__text--forme">
              Influence des pixels de la forme :
            </div>

            <div class="rating-item__stars">
              <span v-for="star in comparaison.forme"> &starf;</span>
              <span v-for="star in 5 - comparaison.forme">&star;</span>
            </div>
          </div>
          <div class="rating-item">
            <div class="rating-item__text rating-item__text--vitesse">
              Vitesse de l'algorithme :
            </div>
            <div class="rating-item__stars">
              <span v-for="star in comparaison.vitesse"> &starf;</span>
              <span v-for="star in 5 - comparaison.vitesse">&star;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      v-if="data.pourcentageImage"
      class="reconstruction-pourcentage">
      <h2>Pourcentage de la reconstruction de l'image</h2>
      <div class="container-pourcentage">
        <div class="pourcentage__text">
          <div>Une reconstruction efficace de</div>
          <p>96%</p>
        </div>
        <img
          :src="data.pourcentageImage"
          alt="pourcentage" />
      </div>
    </section>
    <div class="dernier-mots">{{ data.comparaisonResults }}</div>
  </div>
</template>

<script>
  import { defineProps } from "vue";
  import { useSectionStore } from "@/data/sectionStore";

  export default {
    props: {
      data: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        sections: useSectionStore(),
        comparaisonData: this.data.comparaison,
      };
    },
  };
</script>

<style lang="scss">
  @import "@/assets/css/variables";
  @import "@/assets/css/mixins";
  .animate-image {
    animation: animate-image 1.2s ease-in-out;
  }
  .comparaison {
    &-title {
      font-size: 3.6rem;
      font-weight: 600;
      color: $accent;
      margin: 1.2rem 0;
      @include apply-gradient-block($secondary);
      display: inline;
      width: fit-content;
      padding: 0 1.2rem;
    }
    &-container {
      display: flex;
      flex-direction: column;
      gap: 3.6rem;
    }
    &-section {
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid $secondary;
      padding-bottom: 2.4rem;
      gap: 2rem;
      &__conclusion {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        &--title {
          font-size: 2.4rem;
          font-weight: 500;
          color: $accent;
          @include apply-gradient-block($secondary);
          font-weight: 600;
          display: inline;
          width: fit-content;
          padding: 0 1.2rem;
        }
      }
      &__title {
        font-size: 3.2rem;
        color: $secondary;
        font-weight: 500;
      }
      &__sections {
        display: flex;
        gap: 4.2rem;

        &__content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          width: 50%;
          &__title {
            font-size: 2.4rem;
            color: #65b2fb;
          }
          &__text {
            font-size: 1.6rem;
          }
          &__image {
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            & > img {
              width: 100%;
              height: 100%;
              object-fit: contain;
              animation: animate-image 1.2s forwards;
            }
          }
        }
      }
    }
  }
  @keyframes animate-image {
    0% {
      transform: translateX(-100%) scale(0.5);
    }
    100% {
      transform: translateX(0%) scale(1);
    }
  }

  .reconstruction-pourcentage {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    & > h2 {
      font-size: 3.6rem;
      color: $accent;
      font-weight: 500;
    }
  }
  .container-pourcentage {
    display: flex;
    align-items: center;
    & > img {
      width: 100%;
      height: 100%;
    }
  }
  .comparaison-section__sections__content--forme {
    border-right: 1px solid $secondary;

    /* Add your styles here */
  }
  .comparaison-section__conclusion {
    font-size: 1.6rem;

    /* Add your styles here */
  }
  .pourcentage__text {
    font-family: "JetBrains Mono", monospace;
    width: 70%;

    & p {
      font-size: 12.8rem;

      text-align: center;
      @include apply-gradient-text;
      color: transparent;
      font-weight: 900;
    }
    & div {
      font-family: "Montserrat", monospace;

      font-size: 2.8rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 4px;
      color: $accent;
    }
  }

  .rating {
    /* Add your styles here */
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .rating-item {
    /* Add your styles here */
    display: flex;
    align-items: center;
    gap: 2rem;
    font-size: 1.8rem;
  }

  .rating-item__text {
    /* Add your styles here */
    padding: 0 1.2rem;
    &--bruit {
      @include apply-gradient-block(#8d1bba6d);
    }
    &--forme {
      @include apply-gradient-block(#a33d26ba);
    }
    &--vitesse {
      @include apply-gradient-block(#1d7691b0);
    }
  }

  .rating-item__stars {
    /* Add your styles here */
    color: $secondary;
    font-size: 2.4rem;
  }
  .dernier-mots {
    /* Add your styles here */
    font-size: 2.4rem;
    color: $accent;
    padding: 2rem 2.4rem;
    border-radius: 4px;
    font-weight: 500;
    border: 2px solid $accent;
    font-weight: 600;
    display: inline;
    width: fit-content;
    position: relative;
    &::before {
      content: "Dernier mots :";
      position: absolute;
      top: -8%;
      left: 2%;
      font-size: 1.6rem;
      padding: 0.2rem 0.9rem;
      border-radius: 2px;
      color: $primary;
      background-color: white;
    }
  }
  @media (max-width: 768px) {
    .comparaison {
      &-section {
        &__sections {
          flex-direction: column;
          gap: 2rem;
          &__content {
            width: 100%;
            border-right: none;
            &__image {
              height: 32rem;
            }
          }
        }
      }
    }
  }
  @media (max-width: 576px) {
    .comparaison {
      &-section {
        &__sections {
          &__content {
            &__image {
              height: 24rem;
            }
          }
        }
      }
    }
  }
</style>
