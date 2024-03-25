import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { getSingleFurniture } from "/src/data";
import { useParams } from 'react-router-dom';
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx';
import {Cloudinary} from '@cloudinary/url-gen';

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

  const handleAddToCart = () => {
    // Ajouter ici la logique pour ajouter le produit au panier
    alert("Le produit a été ajouté au panier !");
  };

  if (!Furniture) {
    return <div>Loading...</div>;
  }

  const cld = new Cloudinary({
		cloud: {
			cloudName: 'dcgmvmf04'
		}
	});

	const bigImg = cld
		.image(Furniture[0].Photo[0].photo1)
		.format('auto')
		.quality('auto')
		.toURL();

  	// const littleImg = cld
		// .image(photo)
		// .format('auto')
		// .quality('auto')
		// .toURL();



  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow">
        <div className="grid grid-cols-2 h-full">
          <div className="w-2/3 p-4 max-w-xl ">
            {/* Grande photo du produit */}
            <img
              src={selectedImage || bigImg}
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

          <div className=" p-4">

        {/* Détails du produit */}
        <h2 className="text-3xl font-semibold mb-2">{Furniture[0].MeubleNom}</h2>
        <p className="text-gray-700 mb-4 italic">{Furniture[0].Description}</p>
        <p className="text-2xl font-semibold tex-gray-800 mb-2">Matière:</p>
        <p className="text-xl text-gray-800 mb-2">{Furniture[0].MatiereNom}</p>
        <p className="text-2xl font-semibold tex-gray-800 mb-2">Couleur:</p>
        <p className="text-xl text-gray-800 mb-2">{Furniture[0].CouleurNom}</p>
        <p className="text-2xl font-semibold text-gray-800 mb-2">Dimension:</p>
        <p className="text-xl text-gray-800 mb-2">{Furniture[0].Dimension}</p>
        <p className="text-2xl font-semibold text-gray-800 mb-2">Prix</p>
        <p className="text-xl text-gray-800 mb-4">{Furniture[0].Prix} €</p>
        {/* Bouton Ajouter au panier */}
        <button
          className="absolute bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-[35px] ml-50 animate-pulse"
          onClick={handleAddToCart}>
          Ajouter au panier
        </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
