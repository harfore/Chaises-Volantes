import React from 'react'
import Header from './Componenets/Header/Header'
import Footer from './Componenets/Footer/Footer'
import MainChoice from './Componenets/MainChoice/MainChoice'
import Filtre from './Componenets/Filtre/Filtre';
import PresentationProduit from './Componenets/PresentationProduit/PresentationProduit';


function App() {

  return (
   <div>
    <Header />
    <MainChoice />
    <Filtre />
    <PresentationProduit />
    <Footer />
   </div>
  )
}

export default App