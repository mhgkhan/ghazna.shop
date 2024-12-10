import React from 'react'
import { FaSun } from 'react-icons/fa'

const WelcomeMessage = () => {
  return (
    <header>
    <h1 className={`text-4xl font-bold flex items-center py-4`}>Good Morning! <FaSun className="text-yellow-600" /> </h1>
  </header>
  )
}

export default WelcomeMessage
