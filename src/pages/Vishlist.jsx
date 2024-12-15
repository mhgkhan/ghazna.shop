import React from 'react'
import { useWishlist } from '../context/VishlistContext'

const Vishlist = () => {

  const wishlist = useWishlist();

  console.log(wishlist.products)


  return (
    <main className='md:px-0 px-2'>
      
    </main>
  )
}

export default Vishlist
