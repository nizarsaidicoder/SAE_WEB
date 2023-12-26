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
              {
                id: "carte-distance-brute-force-normalisation",
                title: "Normalisation",
              },
              {
                id: "carte-distance-brute-force-initialisation",
                title: "Initialisation",
              },
              {
                id: "carte-distance-brute-force-traitement",
                title: "Traitement",
              },
              {
                id: "carte-distance-brute-force-visualisation",
                title: "Visualisation",
              },
              { id: "carte-distance-brute-force-code", title: "Code" },
            ],
          },
          {
            id: "carte-distance-optimise",
            title: "Algorithme optimisé",
            subSections: [
              {
                id: "carte-distance-optimise-normalisation",
                title: "Normalisation",
              },
              {
                id: "carte-distance-optimise-initialisation",
                title: "Initialisation",
              },
              { id: "carte-distance-optimise-traitement", title: "Traitement" },
              {
                id: "carte-distance-optimise-visualisation",
                title: "Visualisation",
              },
              { id: "carte-distance-optimise-code", title: "Code" },
            ],
          },
          {
            title: "Comparaison",
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
              {
                id: "boules-maximales-brute-force-normalisation",
                title: "Normalisation",
              },
              {
                id: "boules-maximales-brute-force-initialisation",
                title: "Initialisation",
              },
              {
                id: "boules-maximales-brute-force-traitement",
                title: "Traitement",
              },
              {
                id: "boules-maximales-brute-force-visualisation",
                title: "Visualisation",
              },
              { id: "boules-maximales-brute-force-code", title: "Code" },
            ],
          },
          {
            id: "boules-maximales-optimise",
            title: "Algorithme optimisé",
            subSections: [
              {
                id: "boules-maximales-optimise-normalisation",
                title: "Normalisation",
              },
              {
                id: "boules-maximales-optimise-initialisation",
                title: "Initialisation",
              },
              {
                id: "boules-maximales-optimise-traitement",
                title: "Traitement",
              },
              {
                id: "boules-maximales-optimise-visualisation",
                title: "Visualisation",
              },
              { id: "boules-maximales-optimise-code", title: "Code" },
            ],
          },
          {
            title: "Comparaison",
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
              {
                id: "reconstruction-brute-force-normalisation",
                title: "Normalisation",
              },
              {
                id: "reconstruction-brute-force-initialisation",
                title: "Initialisation",
              },
              {
                id: "reconstruction-brute-force-traitement",
                title: "Traitement",
              },
              {
                id: "reconstruction-brute-force-visualisation",
                title: "Visualisation",
              },
              { id: "reconstruction-brute-force-code", title: "Code" },
            ],
          },
          {
            id: "boules-max-optimise",
            title: "Algorithme optimisé",
            subSections: [
              {
                id: "reconstruction-optimise-normalisation",
                title: "Normalisation",
              },
              {
                id: "reconstruction-optimise-initialisation",
                title: "Initialisation",
              },
              {
                id: "reconstruction-optimise-traitement",
                title: "Traitement",
              },
              {
                id: "reconstruction-optimise-visualisation",
                title: "Visualisation",
              },
              { id: "reconstruction-optimise-code", title: "Code" },
            ],
          },
          {
            id: "comparaison",
            title: "Comparaison",
            subSections: [{ id: "comparaison-cawai", title: "Cawai" }],
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
  getters: {
    getSection: (state) => (id) => {
      return state.sections.find((section) => section.id === id);
    },
    getSubSection: (state) => (subSectionId) => {
      // Search for the subsection within the sections and subSections
      for (const section of state.sections) {
        const subSection = section.subSections.find(
          (subSec) => subSec.id === subSectionId
        );

        if (subSection) {
          return subSection;
        }
      }

      return null; // Return null if the subsection is not found
    },
  },
});
