import React from 'react'
import Carousel from 'react-multi-carousel'
import Product from '../../Product'
import { productData } from '../../data'

const Cuisine = () => {
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
                <h4 className='uppercase text-4xl'style={{ fontFamily: 'Roslindale'}} >Une cuisine à votre gôut</h4>
            </div>
            <div className='grid grid-cols-2 gap-x-4 h-full'> 
    
                <div className=' h-full col-span-2 md:col-span-1 rounded-lg'>
                    <Carousel  
                        containerClass="carousel-container " 
                        itemClass="carousel-item"
                        responsive={responsive}>{product}
                    </Carousel>
                </div>
    
                <div className='bg-[url("Cuisine/cuisine.jpeg")] bg-cover bg-center h-full rounded-lg mb-10 '>
                    {/* <img  className="z-0 object-cover" src="Salon\salonCozy.jpeg"></img> */}
                    {/* <h4 className=' absolute text-center text-2xl font-serif m-20 t-m-30 sm:text-lg' style={{ fontFamily: 'Roslindale'}} ></h4> */}
                </div>
                 
               
            </div>
        </div>
      )
    }


export default Cuisine
