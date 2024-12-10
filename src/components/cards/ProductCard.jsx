import React from 'react'
import { FaStar } from 'react-icons/fa'
import { MdAddShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";


const ProductCard = ({image,title,price,ratings}) => {
    return (
        <div className="product-card w-[140px] h-[250px] md:w-[250px] md:h-[350px] shadow-lg shadow-gray-200 rounded-lg relative bg-white">
            <div className="image w-full mx-auto rounded-md h-[100px] md:h-[200px] relative">
                <img src={image} alt="" className='w-full h-full rounded-md object-cover md:object-contain' />

                <div className="w-full flex items-center justify-between absolute bottom-1 px-2">
                    <div className="addToCart w-[30px] h-[30px] bg-orange-500 rounded-lg flex items-center justify-center cursor-pointer">
                        <MdAddShoppingCart className='text-white font-bold text-lg' />
                    </div>
                    <div className="addToCart border border-1 border-orange-600 bg-red-600 w-[30px] h-[30px] rounded-lg flex items-center justify-center cursor-pointer">
                        <FaRegHeart className='text-white font-bold text-lg' />
                    </div>
                </div>
            </div>

            <div className="content-area p-2 min-w-full">

                <h3 className="product-card-title my-1 text-lg md:text-2xl">{title.length>25 ? title.substring(0,25):title} </h3>

                <div className="w-full flex items-center justify-start gap-2">
                    <span className="text-sm md:text-xl text-orange-700 font-bold">Rs.{price}</span>
                    <span className="text-sm md:text-lg text-gray-400 line-through">Rs.{price-20} </span>
                </div>

                <div className="review flex items-center justify-start mt-2 w-full gap-2">
                    <div className="reviewstars flex items-center justify-center">
                        <FaStar className='text-orange-300' />
                        <FaStar className='text-orange-300' />
                        <FaStar className='text-orange-300' />
                        <FaStar className='text-orange-300' />
                        <FaStar className='text-orange-300' />
                    </div>
                    <span className="text-gray-400">{ratings}</span>
                </div>

            </div>
        </div>
    )
}

export default ProductCard
