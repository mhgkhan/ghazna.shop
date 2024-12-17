import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'

const Search = () => {
  return (
    <main className='px-2 md:px-0 min-h-screen'>

      <div className="container mx-auto">

        <div className="wishlistheading my-5 w-full p-2">
          <h2 className="text-3xl font-bold my-1"> Search     </h2>
          <p className="text-gray-600">Type to search your favorite products, and get easily. </p>
        </div>


        <section className="search w-full my-1 bg-white rounded-full shadow-md shadow-gray-300">
          <div className="search_input_area w-full">
            <form action="" className="w-full flex gap-2 items-center justify-between">
              <div className="rounded-full back px-3 py-2 md:px-5 md:py-3  flex items-center justify-center text-xl cursor-pointer hover:bg-orange-200"><BsArrowLeft /></div>
              <input type="text" name="search" placeholder='type to search' className='w-[90%] mx-auto outline-none border border-1 border-gray-500 rounded-full px-5 py-1 text-lg' />
              <div className="rounded-full back px-3 py-2 md:px-5 md:py-3  flex items-center justify-center text-xl cursor-pointer hover:bg-orange-200"><FaSearch /></div>
            </form>
          </div>
        </section>



      </div>

    </main>
  )
}

export default Search
