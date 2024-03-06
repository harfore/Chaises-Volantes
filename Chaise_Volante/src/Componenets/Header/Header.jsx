import React, { useState } from 'react';
import { TiThMenuOutline } from "react-icons/ti";
import { PiArmchairDuotone } from "react-icons/pi";
import { IoMdSearch } from 'react-icons/io';
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai'; // Import des icônes Panier et Favoris

const NavBar = () => {
    const [headerFixed, setHeaderFixed] = useState(false);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            setHeaderFixed(true);
        } else {
            setHeaderFixed(false);
        }
    });

    const dropDownMenu = [
        {
            id: 1,
            name: "Shop",
            link: "/#",
        },
        {
            id: 2,
            name: "About",
            link: "/#",
        },
        {
            id: 3,
            name: "Contact",
            link: "/#",
        },
    ];

    return (
        <div data-sticky-type="always" className={`bg-orange-300 ${headerFixed ? 'fixed top-0 left-0 w-full shadow-lg' : ''}`}>
            <div className="bg-orange-300 container flex justify-between items-center py-4 ml-8">
                <div className='bg-orange-300 flex items-center gap-4'>
                    <div className='relative cursor-pointer group'>
                        <a href='#' className='bg-orange-300 flex items-center gap-2 text-primary-500 py-2'>
                            Menu
                            <span><TiThMenuOutline className='bg-orange-300 group-hover:rotate-180 duration-300' /></span>
                        </a>
                        <div className='bg-yellow-600 absolute z-50 hidden group-hover:block w-48 bg-white shadow-md p-2 rounded-md px-2 py-2'>
                            <ul className='bg-orange-100 space-y-2 rounded-md px-4 py-2'>
                                {dropDownMenu.map((data, index) => (
                                    <li key={index}>
                                        <a className="bg-orange-100 text-gray-500 hover:text-primary duration-200 inline-block w-full p-2 rounded-md font-semibold" href={data.link}>{data.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='bg-orange-300 relative group hidden sm:block animate-pulse'>
                        <input type='text' placeholder='Search' className='bg-orange-50 searchbar rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:border-primary'></input>
                        <IoMdSearch className='text-xl text-gray-600 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 duration-200' />
                    </div>
                </div>
                <h1 className='bg-orange-300 text-xl font-semibold'> LES CHAISES VOLANTES</h1>
                <PiArmchairDuotone size={35} className='bg-orange-300 mr-10'/>
                <div className='hidden lg:block'>
                    <div className='bg-orange-300 flex items-center gap-4'>
                        {/* Utilisation des icônes à la place des textes */}
                        <div  className='bg-orange-300'>
                            <a href="/#panier" className='bg-orange-300 inline-block text-primary-500 hover:text-primary duration-200'>
                                <AiOutlineShoppingCart size={24} className='bg-orange-300' />
                            </a>
                        </div>
                        <div  className='bg-orange-300'>
                            <a href="/#favoris" className=' inline-block text-primary-500 hover:text-primary duration-200'>
                                <AiOutlineHeart size={24} className='bg-orange-300'/>
                            </a>
                        </div>
                        {/* Lien pour la connexion */}
                        <div>
                            <a href="/#connect" className='bg-orange-300 inline-block px-4 text-primary-500 hover:text-primary duration-200 font-semibold text-xl'>Connect</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
