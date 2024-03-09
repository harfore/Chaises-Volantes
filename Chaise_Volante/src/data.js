
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
  
  //Ici vous avez les produits qui vont s'afficher dans le carrousel. A FAIRE: rajouter les images que vous voulez; ajouter les ligne pour pouvoir afficher le prix
  // Ps: les images des produits en vent sont dans le folder photos (src-assets-photos)
  export const productData = [
    {
      id:1,
      imageurl : "",
      name: "Grande table",
    },
    {
      id:2,
      imageurl : "",
      name: "Chaise",
    },
    {
      id:3,
      imageurl : "",
      name: "Table de chevet",
    },
    {
      id:4,
      imageurl : "",
      name: "Petite table",
    },
    {
      id:5,
      imageurl : "",
      name: "Canapé",
    },
    {
      id:6,
      imageurl : "",
      name: "Bibliothéque",
    }
  ];