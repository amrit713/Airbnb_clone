import React from 'react'
import Image from "next/image"

function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] ">
            <Image
            src="https://links.papareact.com/0fm"
            layout="fill"
            objectFit="cover"
            />

          <div className="absolute w-full text-center top-1/2">
            <p className="text-sm sm:text-lg">Not  sure where to go ? Perfect.</p>
            <button className="px-4 py-2 my-4 font-semibold text-purple-500 transition duration-150 bg-white rounded-full shadow-sm hover:shadow-md active:scale-105 ease-out">I'm flexible</button>
          </div>
           
        </div>
    )
}

export default Banner
