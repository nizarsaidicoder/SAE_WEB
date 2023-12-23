import { defineStore } from "pinia";

export const useAboutStore = defineStore("about", {
  state: () => {
    return {
      profiles: [
        {
          id: 0,
          name: "nesrine",
          job: "Developpeuse",
          description:
            "💻 Développeuse passionnée créant des merveilles numériques ! 🚀",
          image: "nezuko.png",
          backImage: "nes-back.jpg",
          theme: "nesrine",
          details: "",
        },
        {
          id: 1,
          name: "nizar",
          job: "Designer",
          description: "✨ Concevant l'avenir, un pixel à la fois. ☕",
          image: "nizar.png",
          backImage: "niz-back.png",
          theme: "nizar",
          details: "",
        },

        {
          id: 2,
          name: "amine",
          job: "Developpeur",
          description:
            "🖥️ Confectionnant des solutions puissantes avec la magie du code ! ✨",
          image: "amine.png",
          backImage: "amine-back.png",
          theme: "amine",
          details: "",
        },
      ],
    };
  },

  actions: {},
});
