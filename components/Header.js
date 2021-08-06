import React from 'react'
import Image from "next/image"
import {SearchIcon, GlobeAltIcon, UserCircleIcon, MenuIcon} from "@heroicons/react/solid"


function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 p-5 bg-white shadow-md md:px-10 ">
            {/* left section */}
            <div className="relative flex items-center h-10 my-auto cursor-pointer">
                <Image src="https://links.papareact.com/qd3" 
                layout="fill"
                objectFit="contain" 
                objectPosition="left"  />
            </div>

            {/* middle section */}
            <div className="flex items-center py-2 rounded-full shadow-sm md:border-2">
                <input type="text" placeholder="Start your Search"
                  className="flex-grow w-5/6 pl-5 text-gray-600 bg-transparent outline-none "/>
                   <SearchIcon className="hidden h-8 p-2 text-white bg-red-400 rounded-full cursor-pointer md:mx-2 md:inline-flex"/>
               
                
            </div>

            {/* rignt section */}
            <div className="flex items-center justify-end space-x-4 text-gray-500" >
            <h1 className="hidden font-medium cursor-pointer md:inline-flex">Become a host</h1>
            <GlobeAltIcon className="h-6 cursor-pointer"/>
            
            <div className="flex items-center p-2 space-x-2 border-2 border-gray-500 rounded-full">
                <MenuIcon className="h-6"/>
            <UserCircleIcon className="h-6" /> 
            </div>
            
            </div>
        </header>
    )
}

export default Header
