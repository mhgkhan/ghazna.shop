import React from 'react'

const Input = ({ Icon, message, onchange, value, type, name, placeholder, required, disable }) => {
  return (
    <fieldset className={`border border-1 ${disable?"border-gray-600":"border-orange-600"} rounded-md my-3 transition-all duration-300 hover:border-2 hover:shadow-md hover:shadow-orange-800`}>
      <legend className='ml-4 px-1'>{message}</legend>
      <div className={`input-area w-full flex items-center justify-between p-1 rounded-md ${disable ? "bg-gray-300":""}`}>
        <Icon className='text-3xl text-gray-400 border-none ' />
        <input disabled={disable} type={type} name={name} placeholder={placeholder} required={required} value={value} onChange={onchange} className='disabled:bg-gray-300 w-[90%] border-none outline-none text-lg' />
      </div>
    </fieldset>
  )
}

export default Input
