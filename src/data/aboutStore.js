import { defineStore } from "pinia";

export const useAboutStore = defineStore("about", {
  state: () => {
    return {
      profiles: [
        {
          id: 0,
          name: "nesrine",
          lastName: "haggui",
          job: "Developpeuse",
          description:
            "💻 Développeuse passionnée créant des merveilles numériques ! 🚀",
          image: "nezuko.png",
          projectReview:
            "Le projet de développement web et de compression d'images en C# a été vraiment passionnant ! J'ai apprécié l'aspect créatif du design et la manière dont j'ai réussi à surmonter les défis de codage. C'est vraiment gratifiant de constater l'évolution de mes compétences. J'attends avec impatience les futurs projets et les créations à venir ! ",
          rating1: 4,
          rating2: 4,
          cardImage: "nesrine-card.webp",
          backImage: "nesrine-back.svg",
          sideImage: "nesrine-side.svg",

          theme: "nesrine",
          details: "",
        },
        {
          id: 1,
          name: "nizar",
          lastName: "saidi",

          job: "Designer",
          description: "✨ Concevant l'avenir, un pixel à la fois. ☕",
          image: "nizar.png",
          cardImage: "nizar-card.png",
          backImage: "nizar-back.svg",
          sideImage: "nizar-side.svg",
          projectReview:
            "Alors, le projet de développement web et de compression d'images en C#, c'était vraiment cool ! J'ai adoré la créativité dans le design et comment j'ai pu relever les défis de codage. C'est super de voir mes compétences évoluer. J'ai hâte de voir ce que je vais créer à l'avenir ! 🚀",
          theme: "nizar",
          rating1: 5,
          rating2: 5,
          details: "",
        },

        {
          id: 2,
          name: "amine",
          lastName: "belhaj",

          job: "Developpeur",
          description:
            "🖥️ Confectionnant des solutions puissantes avec la magie du code ! ✨",
          image: "amine.png",
          cardImage: "amine-card.png",
          backImage: "amine-back.svg",
          sideImage: "amine-side.svg",
          projectReview:
            "Le projet de développement web et de compression d'images en C# a été une expérience enrichissante. J'ai apprécié les choix de conception et la résolution des défis. Cette expérience a renforcé mes compétences en informatique et a été stimulante. Merci pour cette opportunité d'apprentissage ! 👍",
          theme: "amine",
          rating1: 3,
          rating2: 5,
          details: "",
        },
        {
          id: 3,
          name: "romain",
          lastName: "perrin",

          job: "Professeur",
          description:
            "🖥️ Le meilleur professeur de l'IUT de Robert Schuman; Oops Correction : du monde ! ✨",
          image: "romain-card.png",
          cardImage: "romain-back.png",
          backImage: "amine-back.svg",
          sideImage: "romain-side.svg",
          projectReview:
            "Les étudiants ont fait un travail remarquable sur ce projet. Ils ont fait preuve de créativité et ont réussi à surmonter les défis de codage. C'est vraiment gratifiant de voir leurs compétences évoluer. J'ai hâte de voir ce qu'ils vont créer à l'avenir ! 👍",
          theme: "romain",
          rating1: 5,
          rating2: 5,
          details: "",
        },
        {
          id: 4,
          name: "aurelie",
          lastName: "leborgne",

          job: "ph.D",
          description:
            " 🖥️ Professeur de l'IUT de Robert Schuman, spécialiste en informatique et en intelligence artificielle ! ✨",
          image: "aurelie.jpeg",
          cardImage: "aurelie-card.jpg",
          backImage: "nesrine-back.svg",
          sideImage: "aurelie-side.svg",
          projectReview:
            "Les étudiants ont fait un travail remarquable sur ce projet. Ils ont fait preuve de créativité et ont réussi à surmonter les défis de codage. C'est vraiment gratifiant de voir leurs compétences évoluer. J'ai hâte de voir ce qu'ils vont créer à l'avenir ! 👍",
          theme: "aurelie",
          rating1: 5,
          rating2: 5,
          details: "",
        },
      ],
    };
  },

  actions: {},
});
