import React from 'react'
import { FaSun } from 'react-icons/fa'

const WelcomeMessage = ({headingFont}) => {
  return (
    <header>
    <h1 className={`my-1 mt-2 text-4xl font-bold ${headingFont.className} flex items-center`}>Good Morning! <FaSun className="text-yellow-600" /> </h1>
  </header>
  )
}

export default WelcomeMessage
