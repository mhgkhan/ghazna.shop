import Link from 'next/link'
import React from 'react'
import { FaHome, FaSearch, FaRegHeart, FaCartArrowDown, FaRegUser } from "react-icons/fa"


const Menu = () => {
    return (
        <div className='text-xl bg-white border border-t border-t-2 border-t-gray-200 sticky bottom-0'>
            <div className="container mx-auto">
                <div className=" menu-area  p-1 flex items-center justify-center gap-5">
                    {
                        Array.from([
                            { text: "Home", icon: <FaHome className="text-2xl text-black" />, link:"/" },
                            { text: "Search", icon: <FaSearch className="text-2xl text-black" /> , link:"/search"},
                            { text: "Wishlist", icon: <FaRegHeart className="text-2xl text-black" /> , link:"/wishlist"},
                            { text: "Cart", icon: <FaCartArrowDown className="text-2xl text-black" />, link:"/cart" },
                            { text: "Profile", icon: <FaRegUser className="text-2xl text-black" /> , link:"/profile"},

                        ]).map((ele, ind) => {
                            return <Link key={ind} href={ele.link}>
                                <div  className="menu-item p-1 cursor-pointer hover:shadow-md hover:shadow-gray-400 transition-all duration-300 flex flex-col items-center justify-center menu-item w-[45px] rounded-[20px 20px 5px 5px]" style={{ borderRadius: "20px 20px 5px 5px" }} >
                                {ele.icon}
                                <span className='text-center text-black text-sm'>{ele.text}</span>
                            </div>
                            </Link>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Menu
