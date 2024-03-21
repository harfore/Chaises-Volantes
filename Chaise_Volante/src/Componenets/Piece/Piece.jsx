import React from 'react'
import Carousel from 'react-multi-carousel'
import Product from '../../Product'

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

    const product = props.productData
        .filter(item => props.categorie.toLowerCase() === item.PieceNom.toLowerCase())
        .map((item) => {
            let name = item.MeubleNom;
            switch (props.categorie.toLowerCase()) {
                case "salon":
                    name = item.MeubleNom;
                    break;
                case "cuisine":
                    name = item.MeubleNom;
                    break;
                case "chambre":
                    name = item.MeubleNom;
                    break;
                case "salle de bain":
                    name = item.MeubleNom;
                    break;
                default:
                    name = item.MeubleNom;
            }

            /* const getLayoutStyle = () => {
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
            }; */

            return (
                < Product
                    name={name}
                    prix={item.Prix}
                    img={item.Photo[0].photo1}
                    room={item.PieceNom}
                    id={item.id}
                />
            );
        });

    const phrasesByCategory = {
        "salon": "Découvrez notre selection de meubles pour un salon au charme intemporel",
        "cuisine": "Découvrez notre selection de meubles pour une cuisine épurée et fonctionnelle",
        "chambre": "Découvrez notre selection de meubles pour une chambre confortable et élegante",
        "salle de bain": "Découvrez notre selection de meubles pour une salle de bain épurée et élégante"
    }

    let phrases
    if (props.categorie === "salon") phrases = phrasesByCategory.salon
    else if (props.categorie === "cuisine") phrases = phrasesByCategory.cuisine
    else if (props.categorie === "chambre") phrases = phrasesByCategory.chambre
    else if (props.categorie === "salle de bain") phrases = phrasesByCategory['salle de bain']

    return (
        <div>
            <div className='title mt-20 mb-5 ' >
                <h4 className='uppercase text-4xl' style={{ fontFamily: 'Roslindale' }} >{props.categorie}</h4>
            </div>
            <div className='grid grid-cols-2 gap-x-4 h-full'>

                <div className=' h-full col-span-2 md:col-span-1 rounded-lg'>
                    <Carousel
                        containerClass="carousel-container"
                        itemClass="carousel-item"
                        responsive={responsive}
                    >
                        {product}
                    </Carousel>
                </div>

                <h2 className=' text-center text-2xl font-serif m-20 t-m-30' style={{ fontFamily: 'Roslindale' }} >{phrases} </h2>
                {/* <img  className="z-0 object-cover" src="Salon\salonCozy.jpeg"></img> */}
                {/* <h4 className=' absolute text-center text-2xl font-serif m-20 t-m-30 sm:text-lg' style={{ fontFamily: 'Roslindale'}} ></h4> */}
            </div>
        </div>
    )
};



export default Piece