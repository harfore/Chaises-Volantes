import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';


const ProductDetails = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const handleCloseImage = () => {
        setSelectedImage(null);
    };


    const handleAddToCart = () => {
        // Ajouter ici la logique pour ajouter le produit au panier
        alert('Le produit a été ajouté au panier !');
    };

    return (
        <div className="flex relative">
            <div className="w-1/2 p-4 max-w-2xl">
                {/* Grande photo du produit */}
                <img
                    src="./src/assets/photos/canape-2-places-beige-sable-1000-3-22-238683_5.jpg"
                    alt="Grande photo du produit"
                    className="w-full h-auto cursor-pointer"
                    onClick={() => handleImageClick("./src/assets/photos/canape-2-places-beige-sable-1000-3-22-238683_5.jpg")}
                />

                {/* Photos complémentaires */}
                <div className="flex mt-4">
                    <img
                        src="./src/assets/photos/canape-2-places-beige-sable-1000-3-22-238683_4.jpg"
                        alt="Photo complémentaire 1"
                        className="w-1/3 p-2 cursor-pointer"
                        onClick={() => handleImageClick("./src/assets/photos/canape-2-places-beige-sable-1000-3-22-238683_4.jpg")}
                    />
                    <img
                        src="./src/assets/photos/canape-2-places-beige-sable-1000-3-22-238683_2.jpg"
                        alt="Photo complémentaire 2"
                        className="w-1/3 p-2 cursor-pointer"
                        onClick={() => handleImageClick("./src/assets/photos/canape-2-places-beige-sable-1000-3-22-238683_2.jpg")}
                    />
                    <img
                        src="./src/assets/photos/canape-2-places-beige-sable-1000-3-22-238683_1.jpg"
                        alt="Photo complémentaire 3"
                        className="w-1/3 p-2 cursor-pointer"
                        onClick={() => handleImageClick("./src/assets/photos/canape-2-places-beige-sable-1000-3-22-238683_1.jpg")}
                    />
                </div>
            </div>

            <div className="w-1/2 p-4">
            {selectedImage && (
                <div className="fixed top-10 left-10 bottom-10 right-10 flex justify-center items-center bg-gray-900 bg-opacity-75">
                    <div className="relative">
                        <button
                            className="absolute top-2 right-2 text-white"
                            onClick={handleCloseImage}
                        >
                            <IoClose className="text-3xl" />
                        </button>
                        <img
                            src={selectedImage}
                            alt="Image agrandie"
                            className="w-100 h-auto"
                        />
                    </div>
                </div>
                )}

                {/* Détails du produit */}
                <h2 className="text-3xl font-semibold mb-2">Nom du Produit</h2>
                <p className="text-gray-700 mb-4">
                    Description du produit. Informations sur la matière, la couleur, etc.
                </p>

                <p className="text-2xl font-semibold tex-gray-800 mb-2">Matière: </p>
                <p className="text-xl text-gray-800 mb-2">Matière du produit</p>
                <p className="text-2xl font-semibold text-gray-800 mb-2">Couleur:</p>
                <p className="text-xl text-gray-800 mb-2">Couleur du produit</p>
                <p className="text-2xl font-semibold text-gray-800 mb-2">Prix</p>
                <p className="text-xl text-gray-800 mb-4">19,99 €</p>

                {/* Bouton Ajouter au panier */}
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={handleAddToCart}
                >
                    Ajouter au panier
                </button>
            </div>
        </div>
    );
}

export default ProductDetails;
