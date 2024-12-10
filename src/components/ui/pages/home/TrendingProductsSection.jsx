import React, { useRef } from 'react'
import HeadingSection from './HeadingSection'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import ProductCard from '../../../cards/ProductCard'


const TrendingProductsSection = () => {

  const scrollContainerRef = useRef()

  const forwardScroll = () => {
    scrollContainerRef.current.scrollBy(150, 0)
  }
  const backWordScroll = () => {
    scrollContainerRef.current.scrollBy(-150, 0)

  }


  return (
    <section className='w-full'>
      <HeadingSection heading={"Trending Products"} link={'/'} linktext={"See All"} />

      <div className="trandingProductCategories w-full flex items-center justify-between ">
        <div onClick={backWordScroll} className='  text-3xl bg-orange-200 cursor-pointer font-bold py-2 hover:bg-orange-300 h-full hidden md:flex items-center justify-center rounded-md'>
          <IoIosArrowBack />
        </div>
        <div ref={scrollContainerRef} className="trendingProdCatButtons flex gap-3 w-full md:w-[90%] scroll-smooth mx-auto overflow-auto overflow-x-scroll">
          {
            Array.from(["All", "Man", "Woman", "Tshirts", "Shoes", "Bigs", "Books", "Baby", "Balls", "Cloths", "Pockets", "All", "Man", "Woman", "Tshirts", "Shoes", "Bigs", "Books", "Baby", "Balls", "Cloths", "Pockets"]).map((ele, ind) => {
              return <button key={ind} className="rounded-md tracking-widest bg-black text-white mx-1 font-bold py-2 px-2">{ele}</button>
            })
          }
        </div>
        <div onClick={forwardScroll} className='text-3xl bg-orange-200 cursor-pointer py-2 font-bold hover:bg-orange-300 h-full hidden md:flex items-center justify-center rounded-md'>
          <IoIosArrowForward />
        </div>
      </div>


      <div className=" my-5 homeProductsContanier flex items-center flex-wrap justify-center gap-5">
        
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />

     




      </div>

    </section>
  )
}

export default TrendingProductsSection
