import React from "react";
import Header from "./Componenets/Header/Header";
import Footer from "./Componenets/Footer/Footer";
import MainChoice from "./Componenets/MainChoice/MainChoice";
import Filtre from "./Componenets/Filtre/Filtre";
import Text from "./Componenets/Text/Text";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productData, responsive } from "./data";
import Product from "./Product";
import Salon from "./Componenets/Salon/Salon";
import Cuisine from "./Componenets/Cuisine/Cuisine";
import Chambre from "./Componenets/Chambre/Chambre";
import PresentationProduit from './Componenets/PresentationProduit/PresentationProduit';

function App() {
  const product = productData.map((item) => (
    <Product name={item.MeubleNom} img={item.Photo[0].photo1} prix={item.Prix} />
  ));
  //A FAIRE: ajouter le composant SALLE DE BAIN. A vous de le faire comme vous voulez.
  // Le composant SALLE DE BAIN dois être placé dans cette dive en ordre d'apparition sur la page principale
  return (
    <div className="m-5">
      <Header />
      <MainChoice />
      <Text />
      <Filtre />
      <div className="App">
        <h1
          className="new uppercase text-4xl mb-5"
          style={{ fontFamily: "Roslindale" }}
        >
          Nouveauté
        </h1>
        <Carousel
          containerClass="carousel-container"
          itemClass="carousel-item"
          responsive={responsive}
        >
          {product}
        </Carousel>
      </div>
      <Salon />
      <Cuisine />
      <Chambre />
      { <PresentationProduit /> }
      <Footer />
    </div>
  );
}

export default App;
