import { defineStore } from "pinia";

export const useAlgoStore = defineStore({
  id: "algoStore",
  state: () => {
    return {
      algorithmes: [
        {
          id: "carte-distance",
          name: "Carte Distance euclidienne au carré",
          description:
            "Cette algorithme calcule la carte distance euclidienne au carré. Elle consiste à trouver la distance entre chaque point de la forme et chaque point de l'objet. ",
          images: [
            "/src/assets/images/visualisation/carte-distance/1.bmp",
            "/src/assets/images/visualisation/carte-distance/2.bmp",
            "/src/assets/images/visualisation/carte-distance/3.bmp",
            "/src/assets/images/visualisation/carte-distance/4.bmp",
            "/src/assets/images/visualisation/carte-distance/5.bmp",
            "/src/assets/images/visualisation/carte-distance/6.bmp",
            "/src/assets/images/visualisation/carte-distance/7.bmp",
            "/src/assets/images/visualisation/carte-distance/8.bmp",
            "/src/assets/images/visualisation/carte-distance/9.bmp",
            "/src/assets/images/visualisation/carte-distance/0.bmp",
          ],
          algoTypes: [
            {
              id: "carte-distance-brute-force",
              type: "Brute Force",
              description:
                "La méthode brute force consiste à calculer la distance entre chaque point de la forme et chaque point de l'objet. La complexité de cet algorithme est de l'ordre de O(n*m) où n est le nombre de points de l'image et m le nombre de points de l'objet.",
              code: `int[,] tabImage = TabFromFile(imagePath);
int[,] tabInit = InitResultat(tabImage);
int resultatBrute = CarteBruteForce(tabInit);`,
              sections: [
                {
                  id: "normalisation",
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
                      subStep: [
                        "Parcours du tableau avec deux boucles (lignes et colonnes).",
                        "Ajuste la valeur de chaque pixel selon les conditions suivantes : Si la valeur est inférieure à 128 et supérieure à 0, elle devient 0. Sinon, si la valeur est inférieure à 255 et supérieure à 127, elle devient 255.",
                        "Les valeurs ajustées sont assignées au tableau d'origine.",
                      ],
                    },
                    {
                      name: "Résultat",
                      description:
                        "Ajustement des valeurs d'un tableau 2D d'entiers pour les normaliser à 0 ou 255, où chaque pixel est conditionné pour être soit 0 soit 255 en fonction de sa valeur d'origine.",
                    },
                  ],
                },
                {
                  id: "initialisation",

                  name: "Initialisation",
                  description:
                    "L'initialisation consiste à initialiser la carte distance euclidienne au carré. La carte distance euclidienne au carré est une matrice de même taille que l'image.  pour les pixels représentant l'arrière-plan, nous commençons avec des distances qui sont plus grandes que la distance maximale possible dans la tableau 2D donnée., tandis que les pixels de la forme sont initialisé à 0.",
                  images: [
                    "beforeinitialisation.png",
                    "afterinitialisation.png",
                  ],
                  code: `InitResultat(int[,] Xtab)
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
                      subStep: [
                        "Parcours du tableau normalisé avec deux boucles (lignes et colonnes).",
                        "Initialise chaque pixel de la carte distance euclidienne au carré à 0 ou à la valeur maximale calculée.",
                        "Valeur maximales = ( hauteur − 1 )² + ( largeur − 1 )²",
                      ],
                    },
                    {
                      name: "Résultat",
                      description:
                        "Obtention d'une carte distance euclidienne au carré initialisée, où chaque pixel correspond à la valeur minimale possible de distance euclidienne au carré par rapport aux pixels du fond dans le tableau 2D d'entiers normalisé.",
                    },
                  ],
                },
                {
                  id: "traitement",
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
                      subStep: [
                        "Parcours du tableau avec deux boucles (lignes et colonnes).",
                        "Calcul de la distance minimale pour chaque pixel par rapport aux pixels du fond.",
                        "Attribution de la distance minimale au pixel d'origine dans la carte distance euclidienne au carré.",
                      ],
                    },
                    {
                      name: "Résultat",
                      description:
                        "Obtention d'une carte distance euclidienne au carré avec les distances minimales calculées pour chaque pixel par rapport aux pixels du fond.",
                    },
                  ],
                },
              ],
            },
            {
              id: "carte-distance-optimise",
              type: "Optimisé",
              description:
                "La méthode optimisée utilise une approche plus efficace pour calculer la distance entre chaque point de la forme et chaque point de l'objet. Cela permet de réduire la complexité de l'algorithme par rapport à la méthode brute force.",
              code: `int[,] tabImage = TabFromFile(imagePath);
int[,] tabInit = InitResultat(tabImage);
int[,] resultatOptimise = CarteOptimise(tabInit);
Affiche_image(resultatOptimise);
SaveImage(resultatBrute, "../../images/RESULTATS_BRUTE//src/assets/images/visualisation/carte-distance/imageresultatOptimise.bmp");
`,
              sections: [
                {
                  id: "normalisation",
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
                      subStep: [
                        "Parcours du tableau avec deux boucles (lignes et colonnes).",
                        "Ajuste la valeur de chaque pixel selon les conditions suivantes : Si la valeur est inférieure à 128 et supérieure à 0, elle devient 0. Sinon, si la valeur est inférieure à 255 et supérieure à 127, elle devient 255.",
                        "Les valeurs ajustées sont assignées au tableau d'origine.",
                      ],
                    },
                    {
                      name: "Résultat",
                      description:
                        "Ajustement des valeurs d'un tableau 2D d'entiers pour les normaliser à 0 ou 255, où chaque pixel est conditionné pour être soit 0 soit 255 en fonction de sa valeur d'origine.",
                    },
                  ],
                },
                {
                  id: "initialisation",

                  name: "Initialisation",
                  description:
                    "L'initialisation consiste à initialiser la carte distance euclidienne au carré. La carte distance euclidienne au carré est une matrice de même taille que l'image.  pour les pixels représentant l'arrière-plan, nous commençons avec des distances qui sont plus grandes que la distance maximale possible dans la tableau 2D donnée., tandis que les pixels de la forme sont initialisé à 0.",
                  images: [
                    "beforeinitialisation.png",
                    "afterinitialisation.png",
                  ],
                  code: `InitResultat(int[,] Xtab)
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
                      subStep: [
                        "Parcours du tableau normalisé avec deux boucles (lignes et colonnes).",
                        "Initialise chaque pixel de la carte distance euclidienne au carré à 0 ou à la valeur maximale calculée.",
                        "Valeur maximales = ( hauteur − 1 )² + ( largeur − 1 )²",
                      ],
                    },
                    {
                      name: "Résultat",
                      description:
                        "Obtention d'une carte distance euclidienne au carré initialisée, où chaque pixel correspond à la valeur minimale possible de distance euclidienne au carré par rapport aux pixels du fond dans le tableau 2D d'entiers normalisé.",
                    },
                  ],
                },

                {
                  id: "propagation-verticale",
                  name: "Propagation Verticale",
                  description:
                    "La propagation verticale implique la mise à jour des distances dans l'image de haut en bas, puis de bas en haut. Ce processus prend en compte les distances des pixels voisins déjà calculées. La colonne sur laquelle nous travaillons est copiée dans un tableau 1D pour appliquer la propagation à partir des valeurs d'origine.",
                  images: ["beforetraitement.png", "aftertraitement.png"],
                  code: `PropagationVerticale(int[,] Xtab)
{
    int hauteur = Xtab.GetLength(0);
    int largeur = Xtab.GetLength(1);
    int[,] tabResultats = new int[hauteur, largeur];

    for (int i = 0; i < largeur; i++)
    {
        int[] col = CopieColonne(Xtab, i);
        PropagationVersLeBas(col);
        PropagationVersLeHaut(col);
        // Mise à jour des colonnes du tableau des propagations verticales resultant
        for (int ligne = 0; ligne < hauteur; ligne++)
        {
            tabResultats[ligne, i] = col[ligne];
        }
    }

    return tabResultats;
}

PropagationVersLeBas(int[] col)
{
    int step = 1;

    for (int ind = 1; ind < col.Length; ind++)
    {
        if (col[ind] > col[ind - 1] + step)
        {
            col[ind] = col[ind - 1] + step;
            step += 2;
        }
        else
        {
            step = 1;
        }
    }
}

PropagationVersLeHaut(int[] col)
{
    int step = 1;

    for (int ind = col.Length - 2; ind >= 0; ind--)
    {
        if (col[ind] > col[ind + 1] + step)
        {
            col[ind] = col[ind + 1] + step;
            step += 2;
        }
        else
        {
            step = 1;
        }
    }
}`,
                  etapes: [
                    {
                      name: "Objectif",
                      description:
                        "Mettre à jour les distances dans l'image de haut en bas de manière optimisée.",
                    },
                    {
                      name: "Paramètre",
                      description:
                        "XTab - Le tableau 2D d'entiers à utiliser pour la propagation verticale.",
                    },
                    {
                      name: "Déroulement",
                      description:
                        "Pour chaque colonne du tableau 2D d'entiers, faire :",
                      subStep: [
                        "Copiez la colonne dans un tableau 1D.",
                        "Appliquez la propagation vers le bas sur le tableau 1D.",
                        "Appliquez la propagation vers le haut sur le tableau 1D.",
                      ],
                    },
                    {
                      name: "Résultat",
                      description:
                        "Mise à jour des distances dans l'image de haut en bas de manière optimisée.",
                    },
                  ],
                },
                {
                  id: "propagation-horizontale",
                  name: "Propagation Horizontale",
                  description:
                    "La propagation horizontale implique la mise à jour des distances dans la carte de distance, établie après la propagation verticale. Ce processus se fait de gauche à droite puis de droite à gauche. La recopie de la ligne sur laquelle nous travaillons dans un tableau 1D est toujours nécessaire.",
                  images: ["beforetraitement.png", "aftertraitement.png"],
                  code: `PropagationHorizontale(int[,] Xtab)
{
    int hauteur = Xtab.GetLength(0);
    int largeur = Xtab.GetLength(1);
    int[,] tabResultats = new int[hauteur, largeur];

    for (int i = 0; i < hauteur; i++)
    {
        int[] ligne = CopieLigne(Xtab, i);

        for (int ind = 0; ind < largeur; ind++)
        {
            int distanceMini = ligne[ind];

            for (int k = 0; k < largeur; k++)
            {
                int distance = Xtab[i, k] + (k - ind) * (k - ind);

                if (distanceMini > distance)
                {
                    distanceMini = distance;
                }
            }

            ligne[ind] = distanceMini;
        }

        for (int col = 0; col < largeur; col++)
        {
            tabResultats[i, col] = ligne[col];
        }
    }

    return tabResultats;
}`,
                  etapes: [
                    {
                      name: "Objectif",
                      description:
                        "Mettre à jour les distances dans la carte de distance de manière optimisée.",
                    },
                    {
                      name: "Paramètre",
                      description:
                        "XTab - Le tableau 2D d'entiers à utiliser pour la propagation horizontale.",
                    },
                    {
                      name: "Déroulement",
                      description:
                        "Pour chaque ligne du tableau 2D d'entiers, faire :",
                      subStep: [
                        "Copiez la ligne dans un tableau 1D.",
                        "Parcourez la carte de distance de gauche à droite et mettez à jour les distances.",
                        "Parcourez la carte de distances de droite à gauche et mettez à jour les distances.",
                      ],
                    },
                    {
                      name: "Résultat",
                      description:
                        "Mise à jour des distances dans la carte de distance de manière optimisée.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "boules-maximales",
          name: "Boules Maximales",
          description:
            " une boule maximale discrète est un disque centré sur un point de la forme, dont le rayon est déterminé par la distance euclidienne au carré. Ces boules maximales sont utilisées dans le processus de reconstruction de la forme d'origine à partir des distances calculées par l'algorithme de la carte distance euclidienne au carré.",
          images: [
            "/src/assets/images/visualisation/boules-maximales/1.bmp",
            "/src/assets/images/visualisation/boules-maximales/2.bmp",
            "/src/assets/images/visualisation/boules-maximales/3.bmp",
            "/src/assets/images/visualisation/boules-maximales/4.bmp",
            "/src/assets/images/visualisation/boules-maximales/5.bmp",
            "/src/assets/images/visualisation/boules-maximales/6.bmp",
            "/src/assets/images/visualisation/boules-maximales/7.bmp",
            "/src/assets/images/visualisation/boules-maximales/8.bmp",
            "/src/assets/images/visualisation/boules-maximales/9.bmp",
            "/src/assets/images/visualisation/boules-maximales/0.bmp",
          ],
          algoTypes: [
            {
              id: "boules-maximales-brute-force",
              type: "Brute Force",
              description:
                "La méthode brute force consiste à extraire les boules maximales discrètes en vérifiant chaque pixel de la forme par rapport à tous les autres pixels. La complexité de cet algorithme est de l'ordre de O(n*m), où n est le nombre de points de l'image et m le nombre de points de la forme.",
              code: `int[,] tabImage = TabFromFile(imagePath);
int[,] tabInit = InitResultat(tabImage);
int resultatBrute = CarteOptimise(tabInit);
List<Boule> BoulesMax = ExtraireBoulesMaxBrute(resultatOptimise);
int width = tabImage.GetLength(0);
int height = tabImage.GetLength(1);
BoulesMaxToFile(BoulesMax, width, height, $"{BallPath}{i}.bmp");
`,
              sections: [
                {
                  id: "structure",
                  name: "Création d'une structure",
                  description:
                    "Création d'une structure Boule simplifiante le stockage des boules discrétes.",
                  code: `struct Boule
{
    public int X;
    public int Y;
    public int Rayon;

    public Boule(int x, int y, int rayon)
    {
        X = x;
        Y =  y;
        Rayon = rayon;
    }
  }`,
                },
                {
                  id: "traitement",

                  name: "Traitement",
                  description:
                    "On examine chaque pixel de la forme et vérifie si la boule centrée sur ce pixel est incluse dans une autre boule centrée sur un pixel différent de la forme. Si une boule est incluse dans une autre de rayon supérieur, elle n'est pas considérée maximale.",
                  code: `ExtraireBoulesMaxBrute(int[,] distanceEucCarre)
{
    List<Boule> boules = new List<Boule>();

    for (int x1 = 0; x1 < distanceEucCarre.GetLength(0); x1++)
    {
        for (int y1 = 0; y1 < distanceEucCarre.GetLength(1); y1++)
        {
            bool estMax = true;
            int rayon = distanceEucCarre[x1, y1];
            if (rayon > 0)
            {
                for (int x2 = 0; x2 < distanceEucCarre.GetLength(0) && estMax; x2++)
                {
                    for (int y2 = 0; y2 < distanceEucCarre.GetLength(1) && estMax; y2++)
                    {
                        int rayon2 = distanceEucCarre[x2, y2];
                        if ((x1 != x2 || y1 != y2) && rayon2 > 0)
                        {
                            int distance = (int)(Math.Pow((x1 - x2), 2) + Math.Pow((y1 - y2), 2));

                            // Si la boule x1 y1 est incluse dans x2 y2, elle n'est pas maximale
                            if (rayon + distance <= rayon2)
                            {
                                estMax = false;
                            }
                        }

                    }
                }
                if (estMax)
                {
                    boules.Add(new Boule(x1, y1, distanceEucCarre[x1, y1]));
                }
            }
        }
    }
    return boules;
}`,
                  etapes: [
                    {
                      name: "Objectif",
                      description: "Extraire les boules maximales discrètes.",
                    },
                    {
                      name: "Paramètre",
                      description:
                        "distanceEucCarre - Le tableau 2D des distances euclidienne au carré",
                    },
                    {
                      name: "Déroulement",
                      description: null,
                      subStep: [
                        "La fonction parcourt chaque pixel de la forme, représenté par les indices (x1, y1) dans le tableau 2D distanceEucCarre.",
                        "Pour chaque pixel de la forme, elle initialise une variable estMax à true, ce qui signifie que la boule correspondante est considérée maximale à moins de prouver le contraire.",
                        "Elle récupère le rayon de la boule du pixel en cours.",
                        "Ensuite, elle parcourt à nouveau tous les pixels de la forme pour comparer les boules.",
                        "Pour chaque pixel différent du pixel en cours, elle calcule la distance entre les deux pixels et vérifie si la boule du pixel en cours est incluse dans la boule de l'autre pixel.",
                        "Si la boule du pixel en cours est incluse dans la boule de l'autre pixel, elle marque la variable estMax comme false.",
                        "Si, après avoir parcouru tous les pixels de la forme, la variable estMax est toujours true, la boule du pixel en cours est considérée maximale, et elle est ajoutée à la liste de boules maximales.",
                        "Enfin, la fonction renvoie la liste de toutes les boules maximales discrètes de la forme.",
                      ],
                    },
                    {
                      name: "Résultat",
                      description:
                        "Obtention des boules maximales discrétes à partir de la carte de distance euclidienne",
                    },
                  ],
                },
                {
                  id: "conversion",
                  name: "Conversion en fichier texte",
                  description:
                    "Cette étape sert à sauvegarder les informations des boules dans un fichier texte avec le format .txt",
                  code: `BoulesMaxToFile(List<Boule> Xboules, int Xwidth, int Xheight, string Xpath)
{
    string path = Xpath.Substring(0, Xpath.Length - 3);
    path += "txt";
    string resultat = "";
    resultat += $"{Xwidth}, {Xheight}\\n";
    foreach (Boule boule in Xboules)
    {
        string bouleInfo = "[";
        bouleInfo += $"{boule.X}, ";
        bouleInfo += $"{boule.Y}, ";
        bouleInfo += $"{boule.Rayon}]\\n";
        resultat += bouleInfo;
    }
    using (FileStream output = new FileStream(path, FileMode.Create, FileAccess.Write))
    {
        using (StreamWriter writer = new StreamWriter(output))
        {
            writer.Write(resultat);
        }
    }
}`,
                  etapes: [
                    {
                      name: "Objectif",
                      description:
                        "Sauvegarder les informations des boules dans un fichier texte",
                    },
                    {
                      name: "Paramètre",
                      description:
                        "Xboules - La liste des boules maximales discrétes.\nXwidth -  la largeur de l'image.\nXheight - la hauteur.\nXpath - le chemin du fichier de l'image original",
                    },
                    {
                      name: "Déroulement",
                      subStep: [
                        "Elle génère un chemin de fichier en remplaçant l'extension du fichier d'origine par \".txt\".",
                        "Initialise une chaîne avec les dimensions de l'image.",
                        "Pour chaque boule dans la liste, ajoute ses coordonnées et son rayon à la chaîne.",
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: "boules-maximales-optimise",
              type: "Optimisé",
              description:
                "La méthode optimisée simplifie le processus d'extraction des boules maximales en utilisant une approche méthodique pour la création, le tri et la sélection des boules maximales à partir de la carte de distance fournie.",
              code: `int[,] tabImage = TabFromFile(imagePath);
int[,] tabInit = InitResultat(tabImage);
int resultatBrute = CarteOptimise(tabInit);
List<Boule> BoulesMax = ExtraireBoulesMaxOptimise(resultatOptimise);
int width = tabImage.GetLength(0);
int height = tabImage.GetLength(1);
BoulesMaxToFile(BoulesMax, width, height, $"{BallPath}{i}.bmp");
`,
              sections: [
                {
                  id: "structure",
                  name: "Structure",
                  description:
                    "La structure Boule représente une entité avec des coordonnées de centre (X et Y) et un rayon, fournissant une méthode vérifiante son inclusion dans une autre boule.\nBoule a des propriétés pour les coordonnées X et Y du centre, ainsi que le Rayon.\nLe constructeur initialise ces valeurs.\nLa méthode EstIncluse vérifie si la boule est incluse dans une autre en comparant les distances et les rayons",
                  code: `struct Boule
{
public int X;
public int Y;
public int Rayon;

public Boule(int x, int y, int rayon)
{
X = x;
Y =  y;
Rayon = rayon;
}

public bool EstIncluse(Boule Xboule)
{
// Calcul de la distance entre les centres des deux boules
int distance = (int)(Math.Pow((X - Xboule.X), 2) + Math.Pow((Y - Xboule.Y), 2));

// Vérification de l'inclusion en comparant la somme des rayons avec la distance
return distance + Rayon <= Xboule.Rayon;
}
}`,
                },
                {
                  id: "initialisation",
                  name: "Initialisation",
                  description:
                    "L'initialisation consiste à initialiser toute les boules de la carte de distance et les classer dans une liste en un ordre décroissant de rayon.",

                  code: `CreerListeBoules(int[,] carteDistance)
{
    List<Boule> boules = new List<Boule>();
    int hauteur = carteDistance.GetLength(0);
    int largeur = carteDistance.GetLength(1);

    for (int i = 0; i < hauteur; i++)
    {
        for (int j = 0; j < largeur; j++)
        {
            if (carteDistance[i, j] != 0)
            {
                boules.Add(new Boule(i, j, carteDistance[i, j]));
            }
        }
    }

    return boules;
}
TrierBoulesParRayonDecroissant(List<Boule> boules)
{
    boules.Sort((a, b) => b.Rayon.CompareTo(a.Rayon));
}`,
                  etapes: [
                    {
                      name: "Objectif",
                      description:
                        "Créer une liste de boules à partir d'un tableau 2D représentant une carte distance.",
                    },
                    {
                      name: "Paramètre",
                      description:
                        "carteDistance - Le tableau 2D d'entiers représentant la carte distance.",
                    },
                    {
                      name: "Déroulement",
                      description:
                        "Parcourir le tableau de carte distance et ajouter une boule à la liste pour chaque point non nul. Chaque boule est caractérisée par ses coordonnées et son rayon.",
                      subStep: [
                        "Parcourir le tableau avec deux boucles (lignes et colonnes).",
                        "Si la valeur du point dans le tableau est différente de zéro, créer une nouvelle boule avec les coordonnées (i, j) et le rayon correspondant.",
                        "Ajouter la boule à la liste.",
                      ],
                    },
                    {
                      name: "Résultat",
                      description:
                        "Obtention d'une liste de boules, où chaque boule représente un point non nul dans la carte distance avec ses coordonnées et son rayon.",
                    },
                  ],
                },

                {
                  id: "extraction",
                  name: "Extraction des boules maximales",
                  description:
                    "Cette méthode sert à extraire les boules maximales on commençant par la boule du plus grand rayon, et cette fois on compare pas avec toutes les boules, mais seulemenet avec les boules maximales précedentes",
                  code: `ExtraireBoulesMaxOptimise(List<Boule> boules)
{
    List<Boule> boulesMax = new List<Boule>();

    foreach (Boule boule in boules)
    {
        if (EstBouleMaximale(boule, boulesMax))
        {
            boulesMax.Add(boule);
        }
    }

    return boulesMax;
}
EstBouleMaximale(Boule boule, List<Boule> boulesMax)
{
    foreach (Boule bouleMax in boulesMax)
    {
        if (boule.EstIncluse(bouleMax)) return false;
    }
    return true;
}`,
                  etapes: [
                    {
                      name: "Objectif",
                      description:
                        "Déterminer si une boule est maximale parmi une liste de boules maximales.",
                    },
                    {
                      name: "Paramètres",
                      description:
                        "boule - La boule à évaluer.\nboulesMax - La liste de boules maximales actuelle.",
                    },
                    {
                      name: "Déroulement",
                      description:
                        "Vérifier si la boule est incluse dans une autre boule de la liste des boules maximales.",
                      subStep: [
                        "Parcourir la liste des boules maximales avec une boucle foreach.",
                        "Appeler la méthode EstIncluse de la boule actuelle avec chaque boule de la liste des boules maximales.",
                        "Si la boule est incluse dans une autre boule, retourner faux.",
                        "Si la boule n'est incluse dans aucune boule, retourner vrai.",
                      ],
                    },
                    {
                      name: "Résultat",
                      description:
                        "Obtention d'une valeur booléenne indiquant si la boule est maximale ou non.",
                    },
                  ],
                },
                {
                  id: "conversion",
                  name: "Conversion en fichier texte",
                  description:
                    "Cette étape sert à sauvegarder les informations des boules dans un fichier texte avec le format .txt",
                  code: `BoulesMaxToFile(List<Boule> Xboules, int Xwidth, int Xheight, string Xpath)
{
    string path = Xpath.Substring(0, Xpath.Length - 3);
    path += "txt";
    string resultat = "";
    resultat += $"{Xwidth}, {Xheight}\\n";
    foreach (Boule boule in Xboules)
    {
        string bouleInfo = "[";
        bouleInfo += $"{boule.X}, ";
        bouleInfo += $"{boule.Y}, ";
        bouleInfo += $"{boule.Rayon}]\\n";
        resultat += bouleInfo;
    }
    using (FileStream output = new FileStream(path, FileMode.Create, FileAccess.Write))
    {
        using (StreamWriter writer = new StreamWriter(output))
        {
            writer.Write(resultat);
        }
    }
}`,
                  etapes: [
                    {
                      name: "Objectif",
                      description:
                        "Sauvegarder les informations des boules dans un fichier texte",
                    },
                    {
                      name: "Paramètre",
                      description:
                        "Xboules - La liste des boules maximales discrétes.\nXwidth -  la largeur de l'image.\nXheight - la hauteur.\nXpath - le chemin du fichier de l'image original",
                    },
                    {
                      name: "Déroulement",
                      subStep: [
                        "Elle génère un chemin de fichier en remplaçant l'extension du fichier d'origine par \".txt\".",
                        "Initialise une chaîne avec les dimensions de l'image.",
                        "Pour chaque boule dans la liste, ajoute ses coordonnées et son rayon à la chaîne.",
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "reconstruction",
          name: "Reconstruction",
          description:
            "Cette algorithme permet la reconstruction des images binaires à partir des boules maximales discrètes. en utilisant une approche assez simple, rapdie et efficace (97% de précision lors de la reconstruction).",
          images: [
            "/src/assets/images/visualisation/reconstruction/1.bmp",
            "/src/assets/images/visualisation/reconstruction/2.bmp",
            "/src/assets/images/visualisation/reconstruction/3.bmp",
            "/src/assets/images/visualisation/reconstruction/4.bmp",
            "/src/assets/images/visualisation/reconstruction/5.bmp",
            "/src/assets/images/visualisation/reconstruction/6.bmp",
            "/src/assets/images/visualisation/reconstruction/7.bmp",
            "/src/assets/images/visualisation/reconstruction/8.bmp",
            "/src/assets/images/visualisation/reconstruction/9.bmp",
            "/src/assets/images/visualisation/reconstruction/0.bmp",
          ],
          algoTypes: [
            {
              id: "reconstruction-docs",
              type: null,
              description:
                "Cette méthode consiste à reconstruire l'image en assimilant à chaque boule maximale discrétes un cercle remplie en noir.",
              code: `Reconstruction(string TextPath)
{
    string[] lines = File.ReadAllLines(TextPath);
    string[] dimensions = lines[0].Split(',');
    int largeur = int.Parse(dimensions[0].Trim());
    int hauteur = int.Parse(dimensions[1].Trim());

    int[,] tab = new int[largeur, hauteur];
    List<Boule> BoulesMax = ParseBoules(lines);

    Affiche_Image(tab, BoulesMax);
    SaveImage(tab, BoulesMax, "../../images/image.bmp");
}`,
              sections: [
                {
                  id: "lecture",
                  name: "Lecture du fichier texte",
                  description:
                    "Cette étape consiste à lire le fichier texte contenant les informations des boules maximales discrétes ainsi que la taille de l'image.",
                  code: `string[] lines = File.ReadAllLines(TextPath);
string[] dimensions = lines[0].Split(',');
int largeur = int.Parse(dimensions[0].Trim());
int hauteur = int.Parse(dimensions[1].Trim());`,
                  etapes: [
                    {
                      name: "Déroulement",
                      subStep: [
                        "Lire toutes les lignes du fichier texte.",
                        "Récupérer les dimensions de l'image à partir de la première ligne.",
                      ],
                    },
                  ],
                },
                {
                  id: "initialisation",
                  name: "Initialisation",
                  description:
                    "Cette étape consiste à initialiser le tableau 2D d'entiers à partir des dimensions de l'image et à initialiser la liste des boules maximales discrétes à partir des informations du fichier texte.",
                  code: `int[,] tab = new int[largeur, hauteur];
List<Boule> BoulesMax = ParseBoules(lines);
ParseBoules(string[] lines)
{
    List<Boule> BoulesMax = new List<Boule>();

    for (int i = 1; i < lines.Length; i++)
    {
        string lineWithoutBrackets = lines[i].Replace("[", "").Replace("]", "");
        string[] valeurs = lineWithoutBrackets.Split(',');

        int x = int.Parse(valeurs[0].Trim());
        int y = int.Parse(valeurs[1].Trim());
        int rayon = int.Parse(valeurs[2].Trim());

        Boule boule = new Boule(x, y, rayon);
        BoulesMax.Add(boule);
    }

    return BoulesMax;
}`,
                  etapes: [
                    {
                      name: "Déroulement",
                      subStep: [
                        "Initialiser le tableau 2D d'entiers à partir des dimensions de l'image.",
                        "Initialiser la liste des boules maximales discrétes à partir des informations du fichier texte.",
                        "Pour chaque ligne du fichier texte, faire :",
                        "Supprimer les crochets de la ligne.",
                        "Séparer les valeurs de la ligne.",
                        "Récupérer les coordonnées et le rayon de la boule.",
                        "Créer une boule avec les coordonnées et le rayon récupérés.",
                        "Ajouter la boule à la liste des boules maximales discrétes.",
                        "Retourner la liste des boules maximales discrétes.",
                      ],
                      name: "Résultat",
                      description:
                        "Obtention d'une liste de boules maximales discrétes à partir des informations du fichier texte.",
                    },
                  ],
                },
                {
                  id: "reconstruction",
                  name: "Reconstruction",
                  description:
                    "Cette étape consiste à parcourir le tableau 2D d'entiers et à remplir les boules maximales discrétes en noir.",
                  code: `Affichage_Image(int[,] Xtab, List<Boule> XboulesMax, Bitmap Ximg)
{
    int hauteur = Xtab.GetLength(0);
    int largeur = Xtab.GetLength(1);
    using (Graphics g = Graphics.FromImage(Ximg))
    {
        g.DrawImage(Ximg, 0, 0);

        foreach (Boule boule in XboulesMax)
        {

            int rayon = (int)Math.Round(Math.Sqrt(boule.Rayon));
            SolidBrush blackBrush = new SolidBrush(Color.Black);
            g.FillEllipse(blackBrush, boule.Y - rayon, boule.X - rayon, 2 * rayon, 2 * rayon);          
        }
    }
}
SaveSquelette(tab, BoulesMax, chemin)`,
                  etapes: [
                    {
                      name: "Paramètre",
                      description:
                        "Xtab - Le tableau 2D d'entiers à parcourir.\nXboulesMax - La liste des boules maximales discrétes.\nXimg - L'image à remplir.",
                    },
                    {
                      name: "Déroulement",
                      subStep: [
                        "Parcourir le tableau 2D d'entiers avec deux boucles (lignes et colonnes).",
                        "Pour chaque boule maximale discréte, faire :",
                        "Récupérer le rayon de la boule.",
                        "Remplir la boule en noir.",
                        "Sauvegarder l'image.",
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
