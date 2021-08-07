import React from 'react'
import Image from "next/image"

function LargeCard({img, title, description, buttonText}) {
    return (
        <div className="relative py-16 transition cursor-pointer">
            <div className="relative h-80 min-w-[300px]  ">
                <Image  src={img} layout="fill" objectFit="cover"
                className="rounded-3xl"
                />
            </div>
            <div className="absolute top-32 left-12">
                <h3 className="w-64 mb-3 text-4xl">{title}</h3>
                <p>{description} </p>

                <button  className="text=sm text-white bg-gray-900 py-2 px-4 mt-5 rounded-lg active:scale-105 transition duration-150 ease-out">{buttonText} </button>
            </div>
        </div>
    )
}

export default LargeCard
