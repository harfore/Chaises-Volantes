import React from 'react'
import { useState } from 'react';
import { TiThMenuOutline } from "react-icons/ti";
import {IoMdSearch} from 'react-icons/io';


const navBar = () => {
    const[headerFixed, setHeaderFixed]= useState(false);

    window.addEventListener("scroll",()=>{
        if(window.scrollY >200){
            setHeaderFixed(true);
        }else{
            setHeaderFixed(false);
        }
    })
}

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
        
    ]
    const links = [
    {
        id: 1,
        name: "Panier",
        link: "/#panier",
    },
    {
        id: 2,
        name: "Favoris",
        link: "/#favoris",
    },
    {
        id: 3,
        name: "Connect",
        link: "/#connect",
    },
    ]

const Header = () => {
  return (

    <div data-sticky-type="always" className='bg-white backdrop-filter:blur(8px) dark:bg-grey-900 dark:text-black duration-200 relative z-40 uppercase '>
        <div className='py-4'>
            <div className="container flex justify-between items-center">
            {/* Logo and Links section   */}
                <div className='flex items-center gap-4'>
                    <a
                    href='#'
                    className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'
                    />
                    <div className='realive cursor-pointer group'>
                        <a href='#' className='flex items-center gap-[2p} text-primary-500  py-2' >
                            Menu
                        <span>
                            <TiThMenuOutline className='group-hover:rotate-180 duration-300 '/>
                        </span>
                        </a>                    
                        <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gary-900 p-2 dark:text-white'>                                
                            <ul className='space-y-2'>
                                {
                                    dropDownMenu.map((data, index) => (
                                        <li>
                                            <a 
                                            className="text-gray-500 dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                                            href={data.link}>{data.name}

                                            </a>
                                        </li>   
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                <div className='flex justify-between items-center gap-4'>
                    <div className='relative group hidden sm:block'>               
                        <input type='text' placeholder='Search' className='searchbar'></input>
                        <IoMdSearch className='text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200'/>
                    </div>
                </div>
                </div>

                <div><h1>LES CHAISES VOLANTES</h1></div>

                <div className='hidden lg:block'>
                    <div className='flex items-center gap-4'>
                        {links.map((data, index) => (
                            <div key={index}>
                              <a href={data.link}
                              className='inline-block px-4 text-primary-500 hover:z-[2] duration-200'
                              >
                                {" "}
                                {data.name}
                               </a>
                            </div>
                         ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  
  )
}

export default Header
