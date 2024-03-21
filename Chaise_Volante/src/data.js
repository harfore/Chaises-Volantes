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

// Récupère les données de tous les meubles
export const getAllData = async () => {
  const response = await fetch("https://plateforme-vente-de-meubles-leschaisesvolantes.vercel.app/allmeubles");
  const data = await response.json();
  return data;
};

// Récupère les données d'un meuble, en fonction de son ID
export const getSingleFurniture = async (meubleID) => {
  const response = await fetch(`https://plateforme-vente-de-meubles-leschaisesvolantes.vercel.app/meuble/${meubleID}`)
  const data = await response.json()
  return data
}
