import React from 'react'
import Carousel from 'react-multi-carousel';
import Product from '../../Product';
import { productData } from '../../data';

const Chambre = () => {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
    />
  ))

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 2000, min: 800 },
      items: 2,
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


  return (
    <div>
      <div className='title mt-20 mb-5 ' >
        <h4 className='uppercase text-4xl' style={{ fontFamily: 'Roslindale' }} >Votre nouvelle chambre</h4>
      </div>
      <div className='grid grid-cols-2 gap-x-4 h-full'>
        <div className='bg-[url("Chambre/chambre.jpeg")] bg-cover bg-center h-screen rounded-lg mb-10 '>
          {/* <img  className="z-0 object-cover" src="Salon\salonCozy.jpeg"></img> */}
          {/* <h4 className=' absolute text-center text-2xl font-serif m-20 t-m-30 sm:text-lg' style={{ fontFamily: 'Roslindale'}} >Decouvre notre nouvelle collection</h4> */}
        </div>

        <div className=' h-full col-span-2 md:col-span-1 rounded-lg'>
          <h2 className=' text-center text-2xl font-serif m-20 t-m-30' style={{ fontFamily: 'Roslindale' }} >Découvrez notre selection de meubles pour une chambre confortable et élegante </h2>
          <Carousel
            containerClass="carousel-container"
            itemClass="carousel-item"
            responsive={responsive}>{product}

          </Carousel>
        </div>
      </div>
    </div>
  )

}

export default Chambre
