import React, { useEffect, useState } from 'react'
import { useWishlist } from '../context/VishlistContext'
import { FaTrash } from 'react-icons/fa';
import { GrLinkNext } from "react-icons/gr";
const Vishlist = () => {

  const { products, removeProduct } = useWishlist();

  const [productsArr, setProductsArr] = useState(products)


  // console.log(wishlist.products)


  useEffect(() => {

  }, [products])

  return (
    <main className='md:px-0 px-2 min-h-screen'>
      <div className="container mx-auto">

        <div className="wishlistheading my-5 w-full p-2">
          <h2 className="text-3xl font-bold my-1"> Favorites Wishlist  </h2>
          <p className="text-gray-600">Everything you love, all in one place. Add your favorite items to this list to easily revisit them or share with friends and family.</p>
        </div>


        <div className="vishlist flex items-center justify-center flex-col my-3">

          {
            productsArr && productsArr.map((ele, ind) => {
              return <div key={ind} className="my-2 bg-white h-[100px] shadow-md shadow-gray-200 rounded-md w-full flex items-center justify-between gap-2">

                <div className="h-full item-imgandtitile flex items-center justify-center gap-4">
                  <img src={ele.image} alt="" className='h-full w-[100px] ' />

                  <div className="itemname">
                    <p>Item name</p>
                    <h4 className='text-xl font-bold'>{ele.title?.length > 20 ? ele.title.substring(0, 20) : ele.title}</h4>
                  </div>
                </div>

                <div className="item-price flex items-center justify-center flex-col">
                  <p>Category </p>
                  <h4 className="text-xl font-bold">Sports  </h4>
                </div>



                <div className="item-price flex items-center justify-center flex-col">
                  <p>Price</p>
                  <h4 className="text-xl font-bold">Rs.{ele.price} </h4>
                </div>


                <div className="item-actions flex items-center justify-center gap-4 flex-col mr-4 h-full">
                  <button className="bg-red-600 text-white font-bold px-2 p-2 rounded-lg border-none outline-none shadow-md shadow-red-800" onClick={() => {
                    removeProduct(ele.id, ind)
                    setProductsArr(products)
                  }}><FaTrash /> </button>
                  <button className="bg-blue-600 text-white font-bold px-2 p-2 rounded-lg border-none outline-none shadow-md shadow-blue-800"><GrLinkNext /> </button>
                </div>




              </div>
            })
          }


        </div>


      </div>
    </main>
  )
}

export default Vishlist
