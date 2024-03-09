import React from 'react'
import Header from './Componenets/Header/Header'
import Footer from './Componenets/Footer/Footer'
import MainChoice from './Componenets/MainChoice/MainChoice'
import Filtre from './Componenets/Filtre/Filtre';
import Text from './Componenets/Text/Text';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { productData, responsive } from './data';
import Product from './Product';
import Salon from './Componenets/Salon/Salon';
// import PresentationProduit from './Componenets/PresentationProduit/PresentationProduit';


function App() {

  const product = productData.map((item) => (
    <Product 
      name={item.name}
      url={item.imageurl} 
    />
  ))

  return (
  <div className='m-10'>
    <Header />
    <MainChoice />
    <Text/>
    <Filtre />
    <div className='App'>
      <h1 className='new uppercase text-4xl mb-5'style={{ fontFamily: 'Roslindale'}} >Nouveauté</h1>
      <Carousel  
      containerClass="carousel-container " 
      itemClass="carousel-item"
      responsive={responsive}>{product}</Carousel>
    </div>
    <Salon/>
    
   
    {/* <PresentationProduit /> */}
    <Footer />
  </div>
  )
}

export default App