
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
      items: 1
    }
  };
  
  //Ici vous avez les produits qui vont s'afficher dans le carrousel. A FAIRE: rajouter les images que vous voulez; ajouter les ligne pour pouvoir afficher le prix. Cette const affiche seulement les produits de la categorie NEAUVEAUTé.
  //Il faudra probablement répliquer la même const mais pour les propduits SALON, CUISINE, CHAMBRE, SALLE DE BAIN. Et ensuit exporter les const dans les respectifs fichiers
  // Ps: les images des produits en vent sont dans le folder "photos" (src-assets-photos). A FAIRE: trouver des images produits pour la salle bain 
  
  const getAllData = async () => {
    const response = await fetch('http://localhost:3000/allmeubles')
    const data = await response.json()
    console.log(data)
    return data
  }

  export const productData = await getAllData()

  // export const productData = [
  //   {
  //     id:1,
  //     Photo: [{
  //       "photo1":"../img/CanapeGris1.avif"
  //     },
  //     {
  //       "photo2":"../img/img1.jpg"
  //     }
  //   ],
  //     MeubleNom: "Grande table",
  //     Prix:"test"
  //   },
  //   {
  //     id:2,
  //     Photo: [{
  //       "photo1":"../img/img1.jpg"
  //     },
  //     {
  //       "photo2":"../img/img1.jpg"
  //     }
  //   ],
  //     MeubleNom: "Chaise",
  //     Prix:"test"
  //   },
  //   {
  //     id:3,
  //     Photo: [{
  //       "photo1":"../img/img3.jpg"
  //     },
  //     {
  //       "photo2":"../img/img1.jpg"
  //     }
  //   ],
  //     MeubleNom: "Table de chevet",
  //     Prix:"test"
  //   },
  //   {
  //     id:4,
  //     Photo: [{
  //       "photo1":"../img/CanapeGris1.avif"
  //     },
  //     {
  //       "photo2":"../img/img1.jpg"
  //     }
  //   ],
  //     MeubleNom: "Petite table",
  //     Prix:"test"
  //   },
  //   {
  //     id:5,
  //     Photo: [{
  //       "photo1":"../img/CanapeGris1.avif"
  //     },
  //     {
  //       "photo2":"../img/img1.jpg"
  //     }
  //   ],
  //     MeubleNom: "Canapé",
  //     Prix:"test"
  //   },
  //   {
  //     id:6,
  //     Photo: [{
  //       "photo1":"../img/CanapeGris1.avif"
  //     },
  //     {
  //       "photo2":"../img/img1.jpg"
  //     }
  //   ],
  //     MeubleNom: "Bibliothéque",
  //     Prix:"test"
  //   }
  // ];

const getSingleFurniture = async () => {
  const response = await fetch('http://localhost:3000/meuble/2')
  const data = await response.json()
  console.log(data)
  return data
}

export const SingleFurniture = await getSingleFurniture()