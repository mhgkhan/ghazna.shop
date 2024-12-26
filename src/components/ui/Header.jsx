import React from 'react'
import { BiLogOutCircle } from 'react-icons/bi'
import { IoMdNotificationsOutline } from "react-icons/io"
import { useAppContext } from '../../context/AuthContext'

const Header = () => {

    const { token, removeToken } = useAppContext();


    return (
        <header className='w-full  sticky top-0 z-50 bg-white'>
            <div className="container mx-auto">
                <div className="header-area flex items-center relative justify-between">
                    <div className="logo p-1 drop-shadow-md shadow-slate-400 flex items-center justify-center gap-1 cursor-pointer">
                        <div className="gh border p-1 text-xl font-bold text-orange-900  border-1 border-orange-500 rounded-md">
                            GH
                        </div>
                        <div className="gh border p-1 text-xl font-bold text-orange-500  border-1 border-orange-900 rounded-md">
                            SHOP
                        </div>
                    </div>
                    <div className="icons-area mr-2 flex items-center justify-center gap-5">
                        <div className="notification-icon p-1 relative ">
                            <IoMdNotificationsOutline className='text-3xl text-orange-600' />
                            <span className='absolute top-0 rounded-full bg-orange-900 text-white left-4 w-[20px] h-[20px] flex items-center justify-center'>0</span>
                        </div>
                        {token ? <div onClick={removeToken} title='Logout' className="cursor-pointer hover:bg-red-800 active:bg-red-900 active:scale-90 notification-icon p-1 relative bg-red-500 rounded-md text-white">
                            <BiLogOutCircle className='text-3xl rotate-180' />
                            {/* <span className='absolute top-0 rounded-full bg-orange-900 text-white left-4 w-[20px] h-[20px] flex items-center justify-center'>0</span> */}
                        </div> : ""}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
