import React from 'react'
import { FaHome, FaSearch, FaRegHeart, FaCartArrowDown, FaRegUser } from "react-icons/fa"
import { Link, useLocation } from 'react-router-dom'


const Menu = () => {

    // get current pathname 
    const location = useLocation()


    return (
        <div className=' z-50 text-xl bg-white border border-t border-t-2 border-t-gray-200 sticky bottom-0'>
            <div className="container mx-auto">
                <div className=" menu-area  p-1 flex items-center justify-center md:gap-5 gap-2">
                    {
                        Array.from([
                            { text: "Home", icon: <FaHome className="text-2xl " />, link: "/" },
                            { text: "Search", icon: <FaSearch className="text-2xl " />, link: "/search" },
                            { text: "Wishlist", icon: <FaRegHeart className="text-2xl" />, link: "/wishlist" },
                            { text: "Cart", icon: <FaCartArrowDown className="text-2xl" />, link: "/cart" },
                            { text: "Profile", icon: <FaRegUser className="text-2xl " />, link: "/profile" },
                        ]).map((ele, ind) => {
                            return <Link key={ind} to={ele.link}>
                                <div className={`menu-item py-1 px-2 text-black cursor-pointer hover:shadow-md hover:shadow-gray-400 transition-all duration-300 flex flex-col items-center justify-center menu-item w-[50px] hover:bg-orange-600 hover:text-white ${location.pathname == ele.link ? "bg-orange-600 text-white" : ""} font-bold rounded-md`}  >
                                    {ele.icon}
                                    <span className='text-center text-sm'>{ele.text}</span>
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