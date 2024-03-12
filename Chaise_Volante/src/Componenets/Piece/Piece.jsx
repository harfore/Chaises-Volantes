import React from 'react'
import Carousel from 'react-multi-carousel'
import Product from '../../Product'
import { productData } from '../../data'

const Piece = (props) => {
    const responsive = {
        superLargeDesktop: {
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

    const product = productData
        .filter(item => props.categorie.toLowerCase() === item.PieceNom.toLowerCase())
        .map((item) => {
            let name = item.MeubleNom;
            switch (props.categorie.toLowerCase()) {
                case "salon":
                    name = item.MeubleNom;
                    console.log("salon :" + name)
                    break;
                case "cuisine":
                    name = item.MeubleNom;
                    console.log("cuisine :" + name)
                    break;
                case "chambre":
                    name = item.MeubleNom;
                    console.log("chambre :" + name)
                    break;
                case "salle-de-bain":
                    name = item.MeubleNom;
                    console.log("salle de bain :" + name)
                    break;
                default:
                    name = item.MeubleNom;
                    console.log(name)
            }

            const getLayoutStyle = () => {
                switch (room.toLowerCase()) {
                    case "salon":
                        return { flexDirection: "row-reverse" }; // Invert picture and description for salon
                    case "chambre":
                        return { flexDirection: "row" }; // Keep picture on the left for cuisine
                    case "cuisine":
                        return { flexDirection: "row-reverse" }; // Invert picture and description for chambre
                    case "salle-de-bain":
                        return { flexDirection: "row" }; // Keep picture on the left for salle-de-bain
                    default:
                        return { flexDirection: "row" }; // Default layout
                }
            };

            return (
                < Product
                    name={name}
                    prix={item.Prix}
                    image={item.Photo[0].photo1}
                    room={item.PieceNom}
                />
            );
        });


    return (
        <div>
            <div className='title mt-20 mb-5 ' >
                <h4 className='uppercase text-4xl' style={{ fontFamily: 'Roslindale' }} >{props.categorie}</h4>
            </div>
            <div className='grid grid-cols-2 gap-x-4 h-full'>

                <div className=' h-full col-span-2 md:col-span-2 rounded-lg'>
                    <Carousel
                        containerClass="carousel-container"
                        itemClass="carousel-item"
                        responsive={responsive}
                    >
                        {product}
                    </Carousel>
                </div>


                <h2 className=' text-center text-2xl font-serif m-20 t-m-30' style={{ fontFamily: 'Roslindale' }} >Découvrez notre selection de meubles pour une chambre confortable et élegante </h2>
                <div className='bg-[url("Salon/salonCozy.jpeg")] bg-cover bg-center h-full rounded-lg mb-10 '>
                    {/* <img  className="z-0 object-cover" src="Salon\salonCozy.jpeg"></img> */}
                    {/* <h4 className=' absolute text-center text-2xl font-serif m-20 t-m-30 sm:text-lg' style={{ fontFamily: 'Roslindale'}} ></h4> */}
                </div>
            </div>
        </div>
    )
};



export default Piece