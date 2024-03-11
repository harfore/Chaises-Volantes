//Pour rendre responsive le carrousel
export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 2000, min: 800 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

//Ici vous avez les produits qui vont s'afficher dans le carrousel. A FAIRE: rajouter les images que vous voulez; ajouter les ligne pour pouvoir afficher le prix. Cette const affiche seulement les produits de la categorie NEAUVEAUTé.
//Il faudra probablement répliquer la même const mais pour les propduits SALON, CUISINE, CHAMBRE, SALLE DE BAIN. Et ensuit exporter les const dans les respectifs fichiers
// Ps: les images des produits en vent sont dans le folder "photos" (src-assets-photos). A FAIRE: trouver des images produits pour la salle bain

const getAllData = async () => {
  const response = await fetch("http://localhost:3000/allmeubles");
  const data = await response.json();
  console.log(data);
  return data;
};

// export const productData = await getAllData();

export const productData = [
  {
    "id": 5,
    "MeubleNom": "Table à manger",
    "Photo": [
      {
        "photo1": "../img/tableManger1.avif"
      },
      {
        "photo2": "../img/tableManger2.avif"
      },
      {
        "photo3": "../img/tableManger3.avif"
      },
      {
        "photo4": "../img/tableManger4.avif"
      }
    ],
    "Type": "Table",
    "Prix": 409,
    "PieceNom": "Cuisine"
  },
  {
    "id": 4,
    "MeubleNom": "Table à manger extensible",
    "Photo": [
      {
        "photo1": "../img/tableExtensible1.avif"
      },
      {
        "photo2": "../img/tableExtensible2.avif"
      },
      {
        "photo3": "../img/tableExtensible3.avif"
      },
      {
        "photo4": "../img/tableExtensible4.avif"
      }
    ],
    "Type": "Table",
    "Prix": 379,
    "PieceNom": "Cuisine"
  },
  {
    "id": 2,
    "MeubleNom": "Table à manger vintage",
    "Photo": [
      {
        "photo1": "../img/TableVintage1.avif"
      },
      {
        "photo2": "../img/TableVintage2.avif"
      },
      {
        "photo3": "../img/TableVintage3.avif"
      },
      {
        "photo4": "../img/TableVintage4.avif"
      }
    ],
    "Type": "Table",
    "Prix": 599,
    "PieceNom": "Cuisine"
  },
  {
    "id": 3,
    "MeubleNom": "Table à manger à roulettes",
    "Photo": [
      {
        "photo1": "../img/TableRoulettes1.avif"
      },
      {
        "photo2": "../img/TableRoulettes2.avif"
      },
      {
        "photo3": "../img/TableRoulettes3.avif"
      },
      {
        "photo4": "../img/TableRoulettes4.avif"
      }
    ],
    "Type": "Table",
    "Prix": 359,
    "PieceNom": "Cuisine"
  },
  {
    "id": 1,
    "MeubleNom": "Chaise en velours noire",
    "Photo": [
      {
        "photo1": "../img/ChaiseEnVeloursNoire1.avif"
      },
      {
        "photo2": "../img/ChaiseEnVeloursNoire2.avif"
      },
      {
        "photo3": "../img/ChaiseEnVeloursNoire3.avif"
      },
      {
        "photo4": "../img/ChaiseEnVeloursNoire4.avif"
      }
    ],
    "Type": "Chaise",
    "Prix": 219,
    "PieceNom": "Cuisine"
  },
  {
    "id": 6,
    "MeubleNom": "Lit vintage",
    "Photo": [
      {
        "photo1": "../img/litVintage1.avif"
      },
      {
        "photo2": "../img/litVintage2.avif"
      },
      {
        "photo3": "../img/litVintage3.avif"
      },
      {
        "photo4": "../img/litVintage4.avif"
      }
    ],
    "Type": "Lit",
    "Prix": 299,
    "PieceNom": "Chambre"
  },
  {
    "id": 7,
    "MeubleNom": "Lit exotique",
    "Photo": [
      {
        "photo1": "../img/LitExotique1.avif"
      },
      {
        "photo2": "../img/LitExotique2.avif"
      },
      {
        "photo3": "../img/LitExotique3.avif"
      },
      {
        "photo4": "../img/LitExotique4.avif"
      }
    ],
    "Type": "Lit",
    "Prix": 599,
    "PieceNom": "Chambre"
  },
  {
    "id": 8,
    "MeubleNom": "Lit capitonné",
    "Photo": [
      {
        "photo1": "../img/LitCapitonne1.avif"
      },
      {
        "photo2": "../img/LitCapitonne2.avif"
      },
      {
        "photo3": "../img/LitCapitonne3.avif"
      },
      {
        "photo4": "../img/LitCapitonne4.avif"
      }
    ],
    "Type": "Lit",
    "Prix": 429,
    "PieceNom": "Chambre"
  },
  {
    "id": 9,
    "MeubleNom": "Étagère design",
    "Photo": [
      {
        "photo1": "../img/etagereDesign1.avif"
      },
      {
        "photo2": "../img/etagereDesign2.avif"
      },
      {
        "photo3": "../img/etagereDesign3.avif"
      },
      {
        "photo4": "../img/etagereDesign4.avif"
      }
    ],
    "Type": "Étagère",
    "Prix": 819,
    "PieceNom": "Salon"
  },
  {
    "id": 10,
    "MeubleNom": "Étagère à chaussures",
    "Photo": [
      {
        "photo1": "../img/etagereChaussures1.avif"
      },
      {
        "photo2": "../img/etagereChaussures2.avif"
      },
      {
        "photo3": "../img/etagereChaussures3.avif"
      },
      {
        "photo4": "../img/etagereChaussures4.avif"
      }
    ],
    "Type": "Étagère",
    "Prix": 29,
    "PieceNom": "Salon"
  },
  {
    "id": 11,
    "MeubleNom": "Étagère à 6 niveaux",
    "Photo": [
      {
        "photo1": "../img/EtagereNiveau1.avif"
      },
      {
        "photo2": "../img/EtagereNiveau2.avif"
      },
      {
        "photo3": "../img/EtagereNiveau3.avif"
      },
      {
        "photo4": "Back/photos/EtagereNiveau4.avif"
      }
    ],
    "Type": "Étagère",
    "Prix": 89,
    "PieceNom": "Salon"
  },
  {
    "id": 12,
    "MeubleNom": "Chaise en velours orange",
    "Photo": [
      {
        "photo1": "../img/ChaiseEnVelours1.avif"
      },
      {
        "photo2": "../img/ChaiseEnVelours2.avi"
      },
      {
        "photo3": "../img/ChaiseEnVelours3.avi"
      },
      {
        "photo4": "../img/ChaiseEnVelours4.avi"
      }
    ],
    "Type": "Chaise",
    "Prix": 209,
    "PieceNom": "Cuisine"
  },
  {
    "id": 13,
    "MeubleNom": "Canapé convertible style scandinave",
    "Photo": [
      {
        "photo1": "../img/CanapeScandinave1.avif"
      },
      {
        "photo2": "../img/CanapeScandinave2.avif"
      },
      {
        "photo3": "../img/CanapeScandinave3.avif"
      },
      {
        "photo4": "../img/CanapeScandinave4.avif"
      }
    ],
    "Type": "Canapé",
    "Prix": 799,
    "PieceNom": "Salon"
  },
  {
    "id": 14,
    "MeubleNom": "Canapé clic-clac en velours",
    "Photo": [
      {
        "photo1": "../img/ClicClac2.avif"
      },
      {
        "photo2": "../img/ClicClac3.avif"
      },
      {
        "photo3": "../img/ClicClac4.avif"
      },
      {
        "photo4": "../img/ClicClac1.avif"
      }
    ],
    "Type": "Canapé",
    "Prix": 479,
    "PieceNom": "Salon"
  },
  {
    "id": 15,
    "MeubleNom": "Canapé en velours côtelé beige",
    "Photo": [
      {
        "photo1": "../img/canapeBeige1.avif"
      },
      {
        "photo2": "../img/canapeBeige2.avif"
      },
      {
        "photo3": "../img/canapeBeige3.avif"
      },
      {
        "photo4": "../img/canapeBeige4.avif"
      }
    ],
    "Type": "Canapé",
    "Prix": 999,
    "PieceNom": "Salon"
  },
  {
    "id": 16,
    "MeubleNom": "Canapé en velours côtelé gris clair",
    "Photo": [
      {
        "photo1": "../img/CanapeGris1.avif"
      },
      {
        "photo2": "../img/CanapeGris2.avif"
      },
      {
        "photo3": "../img/CanapeGris3.avif"
      },
      {
        "photo4": "../img/CanapeGris4.avif"
      }
    ],
    "Type": "Canapé",
    "Prix": 1299,
    "PieceNom": "Salon"
  },
  {
    "id": 17,
    "MeubleNom": "Canapé beige sable",
    "Photo": [
      {
        "photo1": "../img/CanapeSable1.avif"
      },
      {
        "photo2": "../img/CanapeSable2.avif"
      },
      {
        "photo3": "../img/CanapeSable3.avif"
      },
      {
        "photo4": "../img/CanapeSable4.avif"
      }
    ],
    "Type": "Canapé",
    "Prix": 1199,
    "PieceNom": "Salon"
  }
]


export const getSingleFurniture = async (meubleID) => {
  const response = await fetch(`http://localhost:3000/meuble/${meubleID}`)
  const data = await response.json()
  console.log(data)
  return data
}
/*
const meubleID = 8
export const SingleFurniture = await getSingleFurniture(meubleID)
*/