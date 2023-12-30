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
              code: `int[,] tabImage = TabFromFile(imagePath);
int[,] tabInit = InitResultat(tabImage);
int resultatBrute = CarteBruteForce(tabInit);`,
              sections: [
                {
                  name: "Normalisation",
                  description:
                    "La normalisation consiste à transformer les pixels de l'image en pixels blancs ou noirs. Les pixels blancs sont représentés par la valeur 255 et les pixels noirs sont représentés par la valeur 0.",
                  images: ["beforenormalisation.png", "afternormalisation.png"],
                  code: `Normalise(int[,] XTab)
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
                  etapes: [
                    {
                      name: "Objectif",
                      description:
                        "Ajuster les valeurs d'un tableau 2D d'entiers pour les normaliser à 0 ou 255.",
                    },
                    {
                      name: "Paramètre ",
                      description:
                        " XTab - Le tableau 2D d'entiers à normaliser.",
                    },
                    {
                      name: "Déroulement",
                      description:
                        "Pour chaque pixel du tableau : Si la valeur du pixel est entre 0 et 128, on l'arrondie à 0. Sinon la valeur du pixel est 255.",
                    },
                    {
                      name: "Résultat",
                      description: null,
                      subStep: [
                        "Parcours du tableau avec deux boucles (lignes et colonnes).",
                        "Ajuste la valeur de chaque pixel selon les conditions suivantes : Si la valeur est inférieure à 128 et supérieure à 0, elle devient 0. Sinon, si la valeur est inférieure à 255 et supérieure à 127, elle devient 255.",
                        "Les valeurs ajustées sont assignées au tableau d'origine.",
                      ],
                    },
                  ],
                },
                {
                  name: "Initialisation",
                  description:
                    "L'initialisation consiste à initialiser la carte distance euclidienne au carré. La carte distance euclidienne au carré est une matrice de même taille que l'image. Chaque pixel de la carte distance euclidienne au carré est initialisé à la valeur 255.",
                  images: [
                    "beforeinitialisation.png",
                    "afterinitialisation.png",
                  ],
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
                  etapes: [
                    {
                      name: "Objectif",
                      description:
                        "Initialiser la carte distance euclidienne au carré.",
                    },
                    {
                      name: "Paramètre",
                      description:
                        "XTab - Le tableau 2D d'entiers à utiliser pour l'initialisation.",
                    },
                    {
                      name: "Déroulement",
                      description:
                        "Pour chaque pixel du tableau 2D d'entiers normalisé, définir la valeur du pixel dans la carte distance euclidienne au carré.",
                    },
                    {
                      name: "Résultat",
                      description: null,
                      subStep: [
                        "Parcours du tableau normalisé avec deux boucles (lignes et colonnes).",
                        "Initialise chaque pixel de la carte distance euclidienne au carré à 0 ou à la valeur maximale calculée.",
                      ],
                    },
                  ],
                },
                {
                  name: "Traitement",
                  description:
                    "Le traitement consiste à calculer la carte distance euclidienne au carré. La carte distance euclidienne au carré est une matrice de même taille que l'image. Chaque pixel de la carte distance euclidienne au carré est initialisé à la valeur 255.",
                  images: ["beforetraitement.png", "aftertraitement.png"],
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

            if (pixel != 0)
            {
                for (int ligne2 = 0; ligne2 < hauteur; ligne2++)
                {
                    for (int col2 = 0; col2 < largeur; col2++)
                    {
                        int pixel2 = Xtab[ligne2, col2];
                        if (pixel2 == 0)
                        {
                            int distance = (int)(Math.Pow(ligne2 - xP, 2) + Math.Pow(col2 - yP, 2));
                            if (distance < min) min = distance;
                        }
                    }
                    resultat[ligne, col] = min;
                }
            }
        }
    }
    return resultat;
}`,
                  etapes: [
                    {
                      name: "Objectif",
                      description:
                        "Calculer la carte distance euclidienne au carré.",
                    },
                    {
                      name: "Paramètre",
                      description:
                        "XTab - Le tableau 2D d'entiers à utiliser pour le traitement.",
                    },
                    {
                      name: "Déroulement",
                      description:
                        "Pour chaque pixel du tableau, calculer la distance minimale aux pixels du fond et attribuer cette distance au pixel d'origine.",
                    },
                    {
                      name: "Résultat",
                      description: null,
                      subStep: [
                        "Parcours du tableau avec deux boucles (lignes et colonnes).",
                        "Calcul de la distance minimale pour chaque pixel par rapport aux pixels du fond.",
                        "Attribution de la distance minimale au pixel d'origine dans la carte distance euclidienne au carré.",
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "Optimisé",
              description:
                "La méthode optimisée utilise une approche plus efficace pour calculer la distance entre chaque point de la forme et chaque point de l'objet. Cela permet de réduire la complexité de l'algorithme par rapport à la méthode brute force.",
              code: `int[,] tabImage = TabFromFile(imagePath);
int[,] tabInit = InitResultat(tabImage);
int[,] resultatOptimise = CarteOptimise(tabInit);
Affiche_image(resultatOptimise);
SaveImage(resultatBrute, "../../images/RESULTATS_BRUTE/resultatOptimise.bmp");
`,
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
                  etapes: [
                    {
                      name: "Objectif",
                      description:
                        "Ajuster les valeurs d'un tableau 2D d'entiers pour les normaliser à 0 ou 255.",
                    },
                    {
                      name: "Paramètre",
                      description:
                        "XTab - Le tableau 2D d'entiers à normaliser.",
                    },
                    {
                      name: "Déroulement",
                      description:
                        "Pour chaque ligne du tableau 2D d'entiers, faire : Pour chaque colonne du tableau 2D d'entiers, faire : Si la valeur du pixel est entre 0 et 128, alors la valeur du pixel est 0. Sinon si la valeur du pixel est entre 128 et 255, alors la valeur du pixel est 255.",
                    },
                    {
                      name: "Résultat",
                      description: null,
                      subStep: [
                        "Parcours du tableau avec deux boucles (lignes et colonnes).",
                        "Ajuste la valeur de chaque pixel selon les conditions suivantes : Si la valeur est inférieure à 128 et supérieure à 0, elle devient 0. Sinon, si la valeur est inférieure à 255 et supérieure à 127, elle devient 255.",
                        "Les valeurs ajustées sont assignées au tableau d'origine.",
                      ],
                    },
                  ],
                },
                {
                  name: "Initialisation",
                  description:
                    "L'initialisation consiste à initialiser la carte distance euclidienne au carré. La carte distance euclidienne au carré est une matrice de même taille que l'image. Chaque pixel de la carte distance euclidienne au carré est initialisé à la valeur 255.",
                  images: [
                    "beforeinitialisation.png",
                    "afterinitialisation.png",
                  ],
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
                  etapes: [
                    {
                      name: "Objectif",
                      description:
                        "Ajuster les valeurs d'un tableau 2D d'entiers pour les normaliser à 0 ou 255.",
                    },
                    {
                      name: "Paramètre",
                      description:
                        "XTab - Le tableau 2D d'entiers à normaliser.",
                    },
                    {
                      name: "Déroulement",
                      description:
                        "Pour chaque ligne du tableau 2D d'entiers, faire : Pour chaque colonne du tableau 2D d'entiers, faire : Si la valeur du pixel est entre 0 et 128, alors la valeur du pixel est 0. Sinon si la valeur du pixel est entre 128 et 255, alors la valeur du pixel est 255.",
                    },
                    {
                      name: "Résultat",
                      description: null,
                      subStep: [
                        "Parcours du tableau avec deux boucles (lignes et colonnes).",
                        "Ajuste la valeur de chaque pixel selon les conditions suivantes : Si la valeur est inférieure à 128 et supérieure à 0, elle devient 0. Sinon, si la valeur est inférieure à 255 et supérieure à 127, elle devient 255.",
                        "Les valeurs ajustées sont assignées au tableau d'origine.",
                      ],
                    },
                  ],
                },
                {
                  name: "Traitement",
                  description:
                    "Le traitement consiste à calculer la carte distance euclidienne au carré de manière optimisée. La carte distance euclidienne au carré est une matrice de même taille que l'image. Chaque pixel de la carte distance euclidienne au carré est initialisé à la valeur 255.",
                  images: ["beforetraitement.png", "aftertraitement.png"],
                  code: `public static int[,] CarteOptimise(int[,] Xtab)
{
    int[,] tabResultats = PropagationVerticale(Xtab);
    tabResultats = PropagationHorizontale(tabResultats);
    return tabResultats;
}`,
                  etapes: [
                    {
                      name: "Objectif",
                      description:
                        "Calculer la carte distance euclidienne au carré de manière optimisée.",
                    },
                    {
                      name: "Paramètre",
                      description:
                        "XTab - Le tableau 2D d'entiers à utiliser pour le traitement.",
                    },
                    {
                      name: "Déroulement",
                      description:
                        "Pour chaque ligne du tableau 2D d'entiers, faire : Pour chaque colonne du tableau 2D d'entiers, faire : Si la valeur du pixel est entre 0 et 128, alors la valeur du pixel est 0. Sinon si la valeur du pixel est entre 128 et 255, alors la valeur du pixel est 255.",
                    },
                    {
                      name: "Résultat",
                      description: null,
                      subStep: [
                        "Parcours du tableau avec deux boucles (lignes et colonnes).",
                        "Calcul de la distance minimale pour chaque pixel par rapport aux pixels du fond de manière optimisée.",
                        "Attribution de la distance minimale au pixel d'origine dans la carte distance euclidienne au carré.",
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };
  },
});
