import React, { useEffect, useRef, useState } from 'react'
import HeadingSection from './HeadingSection'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import ProductCard from '../../../cards/ProductCard'
import Skeleton from 'react-loading-skeleton'


const TrendingProductsSection = () => {




  const scrollContainerRef = useRef()

  const [products, setProducts] = useState([])
  const [filterProducts,setFilterProducts] = useState([])

  const forwardScroll = () => {
    scrollContainerRef.current.scrollBy(150, 0)
  }
  const backWordScroll = () => {
    scrollContainerRef.current.scrollBy(-150, 0)

  }

  const fetchproduct = async () => {
    const request = await fetch(`https://fakestoreapi.com/products`);
    const response = await request.json();
    setProducts(response)
    setFilterProducts(response)
  }



  useEffect(() => {

    fetchproduct()


  }, [])


  return (
    <section className='w-full'>
      <HeadingSection heading={"Trending Products"} link={'/'} linktext={"See All"} />

      <div className="trandingProductCategories w-full flex items-center justify-between ">
        <div onClick={backWordScroll} className='  text-3xl bg-orange-200 cursor-pointer font-bold py-2 hover:bg-orange-300 h-full hidden md:flex items-center justify-center rounded-md'>
          <IoIosArrowBack />
        </div>
        <div ref={scrollContainerRef} className="trendingProdCatButtons flex gap-3 w-full md:w-[90%] scroll-smooth mx-auto overflow-auto overflow-x-scroll">
          {
            Array.from(new Set(filterProducts.map(prod=>prod.category))).map((ele, ind) => {
              return <button onClick={async ()=>{
                // await fetchproduct();
                setProducts(filterProducts.filter(prod => prod.category == ele))
              }} key={ind} className="rounded-md tracking-widest  bg-black text-white mx-1 font-bold py-2 px-2">{ele}</button>
            })
          }
        </div>
        <div onClick={forwardScroll} className='text-3xl bg-orange-200 cursor-pointer py-2 font-bold hover:bg-orange-300 h-full hidden md:flex items-center justify-center rounded-md'>
          <IoIosArrowForward />
        </div>
      </div>


      <div className=" my-5 homeProductsContanier flex items-center flex-wrap justify-center gap-5">


        {
          products && products.length < 1 ? <div className='w-[40px] h-[40px] mx-auto block my-5 border border-8 border-dotted border-black rounded-full transition-all duration-500 animate-spin'> </div>:
            products && products.map((ele, ind) => {
              return <ProductCard key={ind} title={ele.title} price={ele.price} image={ele.image} ratings={ele.rating.count} />
            })
        }






      </div>

    </section>
  )
}

export default TrendingProductsSection
