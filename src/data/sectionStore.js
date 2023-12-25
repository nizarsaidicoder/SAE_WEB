import { defineStore } from "pinia";

export const useSectionStore = defineStore({
  id: "sectionStore",
  state: () => ({
    activeSection: "boules-maximales",
    activeSubSection: null,
    activeSubSubSection: null,
    sections: [
      {
        id: "carte-distance",
        title: "Carte Distance Euclidienne",
        subSections: [
          {
            id: "carte-distance-brute-force",
            title: "Algorithme brute force",
            subSections: [
              { title: "Normalisation" },
              { title: "Initialisation" },
              { title: "Traitement" },
              { title: "Visualisation" },
              { title: "Code" },
            ],
          },
          {
            id: "carte-distance-optimise",
            title: "Algorithme optimisé",
            subSections: [
              { title: "Normalisation" },
              { title: "Initialisation" },
              { title: "Traitement" },
              { title: "Visualisation" },
              { title: "Code" },
            ],
          },
          {
            title: "Comparaison des algorithmes",
            subSections: [],
          },
        ],
      },
      {
        title: "Boules Maximales",
        id: "boules-maximales",

        subSections: [
          {
            id: "boules-maximales-brute-force",
            title: "Algorithme brute force",
            subSections: [
              { title: "Normalisation" },
              { title: "Initialisation" },
              { title: "Traitement" },
              { title: "Visualisation" },
              { title: "Code" },
            ],
          },
          {
            id: "boules-maximales-optimise",
            title: "Algorithme optimisé",
            subSections: [
              { title: "Normalisation" },
              { title: "Initialisation" },
              { title: "Traitement" },
              { title: "Visualisation" },
              { title: "Code" },
            ],
          },
          {
            title: "Comparaison des algorithmes",
            subSections: [],
          },
        ],
      },
      {
        title: "Reconstruction",
        id: "reconstruction",
        subSections: [
          {
            id: "reconstruction-brute-force",
            title: "Algorithme brute force",
            subSections: [
              { title: "Normalisation" },
              { title: "Initialisation" },
              { title: "Traitement" },
              { title: "Visualisation" },
              { title: "Code" },
            ],
          },
          {
            id: "boules-max-optimise",
            title: "Algorithme optimisé",
            subSections: [
              { title: "Normalisation" },
              { title: "Initialisation" },
              { title: "Traitement" },
              { title: "Visualisation" },
              { title: "Code" },
            ],
          },
          {
            title: "Comparaison des algorithmes",
            subSections: [],
          },
        ],
      },
    ],
  }),
  actions: {
    setActiveAlgo(algo) {
      this.activeSection = algo;
    },
    setActiveAlgoType(algoType) {
      this.activeSubSection = algoType;
    },
    setActiveSection(section) {
      this.activeSubSubSection = section;
    },
  },
});
