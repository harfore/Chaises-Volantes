import React from "react";
import { Link } from "react-router-dom";

//C'est la partie du Carousel avec la simple carte image, nom du produit et le bouton DECOUVRE. Ce button correspond au button classique payer mais vous pouvez le changer
// A FAIRE: probablement changer le button DECOUVRE, et rajouter une ligne pour le prix
function Product(props) {
  return (
    <div className="card">
      <img
        className="product--image w-80 h-80 object-cover rounded-lg"
        src={props.img}
        alt="product image"
      />
      <h2>{props.name}</h2>
      <p>{props.prix} €</p>
      <Link to={`/product/{props.id}`}>
        <p>Découvrir</p>
      </Link>
    </div>
  );
}

export default Product;
