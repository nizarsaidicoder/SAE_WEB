import { defineStore } from "pinia";
import { useRoute } from "vue-router";

export const useSectionStore = defineStore({
  id: "sectionStore",
  state: () => ({
    activeSection: null,
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
                id: "normalisation",
                title: "Normalisation",
              },
              {
                id: "initialisation",
                title: "Initialisation",
              },
              {
                id: "traitement",
                title: "Traitement",
              },
              { id: "code", title: "Code + Visualisation" },
            ],
          },
          {
            id: "carte-distance-optimise",
            title: "Algorithme optimisé",
            subSections: [
              {
                id: "normalisation",
                title: "Normalisation",
              },
              {
                id: "initialisation",
                title: "Initialisation",
              },
              {
                id: "propagation-verticale",
                title: "Propagation Verticale",
              },
              {
                id: "propagation-horizontale",
                title: "Propagation Horizontale",
              },
              { id: "code", title: "Code + Visualisation" },
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
                id: "structure",
                title: "Structure",
              },

              {
                id: "traitement",
                title: "Traitement",
              },
              {
                id: "conversion",
                title: "Conversion",
              },
              { id: "code", title: "Code + Visualisation" },
            ],
          },
          {
            id: "boules-maximales-optimise",
            title: "Algorithme optimisé",
            subSections: [
              {
                id: "structure",
                title: "Structure",
              },
              {
                id: "initialisation",
                title: "Initialisation",
              },
              {
                id: "extraction",
                title: "Extraction",
              },
              { id: "conversion", title: "Conversion" },
              { id: "code", title: "Code + Visualisation" },
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
            id: "reconstruction-docs",
            title: "Algorithme",
            subSections: [
              {
                id: "lecture",
                title: "Lecture",
              },
              {
                id: "initialisation",
                title: "Initialisation",
              },
              {
                id: "reconstruction",
                title: "Reconstruction",
              },

              { id: "code", title: "Code + Visualisation" },
            ],
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
    setSectionsFromRoute() {
      const route = useRoute();
      // Extract the necessary information from the route path
      const pathParts = route.path.split("/").filter((part) => part !== "");

      if (pathParts.length >= 1) {
        this.activeSection = pathParts[0];
      }

      if (pathParts.length >= 2) {
        this.activeSubSection = pathParts[0] + "-" + pathParts[1];
      }
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
