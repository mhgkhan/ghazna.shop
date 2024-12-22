import React from 'react'

const Input = ({ Icon, message, onchange, value, type, name, placeholder, required }) => {
  return (
    <fieldset className='border border-1 border-orange-600 rounded-md my-3 transition-all duration-300 hover:border-2 hover:shadow-md hover:shadow-orange-800'>
      <legend className='ml-4 px-1'>{message}</legend>
      <div className="input-area w-full flex items-center justify-between p-1">
        <Icon className='text-3xl text-gray-400 border-none ' />
        <input type={type} name={name} placeholder={placeholder} required={required} value={value} onChange={onchange} className='w-[90%] border-none outline-none text-lg' />
      </div>
    </fieldset>
  )
}

export default Input
