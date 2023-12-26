import { defineStore } from "pinia";

export const useAlgoStore = defineStore({
  id: "algoStore",
  state: () => {
    return {
      algorithmes: [
        {
          name: "Carte Distance euclidienne au carré",
          description:
            "Cette algorithme calcule la carte distance euclidienne au carré. Elle consiste à trouver la distance entre chaque point de la forme et chaque point de l'objet. La complexité de cet algorithme est de l'ordre de O(n*m) où n est le nombre de points de l'image et m le nombre de points de l'objet.",
          algoTypes: [
            {
              type: "Brute Force",
              description:
                "La méthode brute force consiste à calculer la distance entre chaque point de la forme et chaque point de l'objet. La complexité de cet algorithme est de l'ordre de O(n*m) où n est le nombre de points de l'image et m le nombre de points de l'objet.",
              code: `public static void Normalise(int[,] XTab)
              {
                  for (int ligne = 0; ligne < XTab.GetLength(0); ligne++)
                  {
                      for (int col = 0; col < XTab.GetLength(1); col++)
                      {
                          int pixel = XTab[ligne, col];
                          if (pixel < 128 && pixel > 0) pixel = 0;
                          else if (pixel < 255 && pixel > 127) pixel = 255;
                          XTab[ligne, col] = pixel;
                      }
                  }
              }`,
              sections: [
                {
                  name: "Normalisation",
                  description:
                    "La normalisation consiste à transformer les pixels de l'image en pixels blancs ou noirs. Les pixels blancs sont représentés par la valeur 255 et les pixels noirs sont représentés par la valeur 0.",
                  images: ["beforenormalisation.png", "afternormalisation.png"],
                  code: `public static void Normalise(int[,] XTab)
                  {
                      for (int ligne = 0; ligne < XTab.GetLength(0); ligne++)
                      {
                          for (int col = 0; col < XTab.GetLength(1); col++)
                          {
                              int pixel = XTab[ligne, col];
                              if (pixel < 128 && pixel > 0) pixel = 0;
                              else if (pixel < 255 && pixel > 127) pixel = 255;
                              XTab[ligne, col] = pixel;
                          }
                      }
                  }`,
                },
                {
                  name: "Initialisation",
                  description:
                    "L'initialisation consiste à initialiser la carte distance euclidienne au carré. La carte distance euclidienne au carré est une matrice de même taille que l'image. Chaque pixel de la carte distance euclidienne au carré est initialisé à la valeur 255.",
                  images: ["beforenormalisation.png", "afternormalisation.png"],
                  code: `public static int[,] InitResultat(int[,] Xtab)
                    {
                        int[,] resultat = CopieTab2D(Xtab);
                        Normalise(resultat);
                    
                        int max = (int)(Math.Pow((resultat.GetLength(0) - 1), 2) + Math.Pow((resultat.GetLength(1) - 1), 2));
                        for (int ligne = 0; ligne < resultat.GetLength(0); ligne++)
                        {
                            for (int col = 0; col < resultat.GetLength(1); col++)
                            {
                                int pixel = resultat[ligne, col];
                                if (pixel == 255) pixel = 0;
                                else pixel = max;
                                resultat[ligne, col] = pixel;
                            }
                        }
                        return resultat;
                    }`,
                },
                {
                  name: "Traitement",
                  description:
                    "Le traitement consiste à calculer la carte distance euclidienne au carré. La carte distance euclidienne au carré est une matrice de même taille que l'image. Chaque pixel de la carte distance euclidienne au carré est initialisé à la valeur 255.",
                  images: ["beforenormalisation.png", "afternormalisation.png"],
                  code: `public static int[,] CarteBruteForce(int[,] Xtab)
                  {
                      int hauteur = Xtab.GetLength(0);
                      int largeur = Xtab.GetLength(1);
                      int[,] resultat = new int[hauteur, largeur];
                  
                      for (int ligne = 0; ligne < hauteur; ligne++)
                      {
                          for (int col = 0; col < largeur; col++)
                          {
                              int pixel = Xtab[ligne, col];
                              int min = pixel;
                              int xP = ligne;
                              int yP = col;
                  
                              // Vérifie si le pixel n'est pas dans le fond
                              if (pixel != 0)
                              {
                                  for (int ligne2 = 0; ligne2 < hauteur; ligne2++)
                                  {
                                      for (int col2 = 0; col2 < largeur; col2++)
                                      {
                                          int pixel2 = Xtab[ligne2, col2];
                                          // Vérifie si le pixel2 est dans le fond
                                          if (pixel2 == 0)
                                          {
                                              int distance = (int)(Math.Pow(ligne2 - xP, 2) + Math.Pow(col2 - yP, 2));
                                              if (distance < min) min = distance;
                                          }
                                      }
                                      // Attribue la distance minimale au pixel d'origine
                                      resultat[ligne, col] = min;
                                  }
                              }
                          }
                      }
                      return resultat;
                  }`,
                },
              ],
            },
            {
              type: "Optimisé",
              description:
                "La méthode optimisée utilise une approche plus efficace pour calculer la distance entre chaque point de la forme et chaque point de l'objet. Cela permet de réduire la complexité de l'algorithme par rapport à la méthode brute force.",
              code: `public static void Optimise(int[,] XTab)
                {
                    // Implémentez ici l'algorithme optimisé.
                    // ...
                }`,
              sections: [
                {
                  name: "Normalisation",
                  description:
                    "La normalisation consiste à transformer les pixels de l'image en pixels blancs ou noirs. Les pixels blancs sont représentés par la valeur 255 et les pixels noirs sont représentés par la valeur 0.",
                  images: ["beforenormalisation.png", "afternormalisation.png"],
                  code: `public static void Normalise(int[,] XTab)
                    {
                        for (int ligne = 0; ligne < XTab.GetLength(0); ligne++)
                        {
                            for (int col = 0; col < XTab.GetLength(1); col++)
                            {
                                int pixel = XTab[ligne, col];
                                if (pixel < 128 && pixel > 0) pixel = 0;
                                else if (pixel < 255 && pixel > 127) pixel = 255;
                                XTab[ligne, col] = pixel;
                            }
                        }
                    }`,
                },
                {
                  name: "Initialisation",
                  description:
                    "L'initialisation consiste à initialiser la carte distance euclidienne au carré. La carte distance euclidienne au carré est une matrice de même taille que l'image. Chaque pixel de la carte distance euclidienne au carré est initialisé à la valeur 255.",
                  images: ["beforenormalisation.png", "afternormalisation.png"],
                  code: `public static int[,] InitResultat(int[,] Xtab)
                    {
                        int[,] resultat = CopieTab2D(Xtab);
                        Normalise(resultat);
              
                        int max = (int)(Math.Pow((resultat.GetLength(0) - 1), 2) + Math.Pow((resultat.GetLength(1) - 1), 2));
                        for (int ligne = 0; ligne < resultat.GetLength(0); ligne++)
                        {
                            for (int col = 0; col < resultat.GetLength(1); col++)
                            {
                                int pixel = resultat[ligne, col];
                                if (pixel == 255) pixel = 0;
                                else pixel = max;
                                resultat[ligne, col] = pixel;
                            }
                        }
                        return resultat;
                    }`,
                },
                {
                  name: "Traitement",
                  description:
                    "Le traitement consiste à calculer la carte distance euclidienne au carré de manière optimisée. La carte distance euclidienne au carré est une matrice de même taille que l'image. Chaque pixel de la carte distance euclidienne au carré est initialisé à la valeur 255.",
                  images: ["beforenormalisation.png", "afternormalisation.png"],
                  code: `public static int[,] CarteOptimisee(int[,] Xtab)
                    {
                        // Implémentez ici l'algorithme optimisé de calcul de la carte distance euclidienne au carré.
                        // ...
                    }`,
                },
              ],
            },
          ],
        },
      ],
    };
  },
});
