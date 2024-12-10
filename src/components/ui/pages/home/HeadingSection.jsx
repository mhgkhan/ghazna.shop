import React from 'react'
import { Link } from 'react-router-dom'

const HeadingSection = ({heading, link, linktext}) => {
    return (
        <header className='flex w-full items-center justify-between md:my-5 my-3'>
            <h2 className="text-2xl font-bold">{heading} </h2>
            <Link to={link} className="text-lg text-black hover:text-orange-500 transition-all duration-300 hover:underline ">{linktext}  </Link>
        </header>
    )
}

export default HeadingSection
