import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { getSingleFurniture } from "/src/data";
import { useParams } from 'react-router-dom';

const ProductDetails = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [Furniture, setFurniture] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const data = await getSingleFurniture(productId);
        setFurniture(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données du produit :', error);
      }
    };

    fetchProductData();
  }, [productId]);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
  };

  const handleAddToCart = () => {
    // Ajouter ici la logique pour ajouter le produit au panier
    alert("Le produit a été ajouté au panier !");
  };

  if (!Furniture) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-2 gap-x-4 h-full">
      <div className="w-full p-4 max-w-xl">
        {/* Grande photo du produit */}
        <img
          src={selectedImage || Furniture[0].Photo[0].photo1}
          alt="Grande photo du produit"
          className="max-h-[400px] shadow-lg shadow hover:shadow-lg"
        />

        {/* Photos complémentaires*/} 
        <div className="flex mt-4">
          {Furniture[0].Photo.map((photo, index) => (
            <img
              key={index}
              src={Object.values(photo)[0]}
              alt={`Photo ${index + 1}`}
              className="w-1/3 p-2 cursor-pointer hover:shadow-lg cursor-zoom-in transition duration-300 hover:scale-110"
              onClick={() => handleImageClick(Object.values(photo)[0])}
            />
          ))}
        </div>
      </div>

      <div className="w-1/3 p-4">

        {/* Détails du produit */}
        <h2 className="text-3xl font-semibold mb-2">{Furniture[0].MeubleNom}</h2>
        <p className="text-gray-700 mb-4 italic">{Furniture[0].Description}</p>
        <p className="text-2xl font-semibold tex-gray-800 mb-2 mt-20">Matière:</p>
        <p className="text-xl text-gray-800 mb-2">{Furniture.material}</p>
        <p className="text-2xl font-semibold tex-gray-800 mb-2 mt-20">Couleur:</p>
        <p className="text-xl text-gray-800 mb-2">{Furniture.color}</p>
        <p className="text-2xl font-semibold text-gray-800 mb-2">Dimension:</p>
        <p className="text-xl text-gray-800 mb-2">{Furniture[0].Dimension}</p>
        <p className="text-2xl font-semibold text-gray-800 mb-2">Prix</p>
        <p className="text-xl text-gray-800 mb-4">{Furniture[0].Prix} €</p>

        {/* Bouton Ajouter au panier */}
        <button
          className="absolute bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-[35px] ml-80 animate-pulse"
          onClick={handleAddToCart}>
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
