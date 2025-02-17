import React, { useEffect, useRef, useState } from 'react'
import HeadingSection from './HeadingSection'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import ProductCard from '../../../cards/ProductCard'
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom'
import Loading from '../../Loading'


const TrendingProductsSection = () => {




  const scrollContainerRef = useRef()

  const [products, setProducts] = useState([])
  const [filterProducts, setFilterProducts] = useState([])
  const [currectCateg, setCurrectCateg] = useState("all")

  const forwardScroll = () => {
    scrollContainerRef.current.scrollBy(150, 0)
  }
  const backWordScroll = () => {
    scrollContainerRef.current.scrollBy(-150, 0)

  }

  const fetchproduct = async () => {
    const request = await fetch(`https://dummyjson.com/products`);
    const response = await request.json();

    setProducts(response.products)
    setFilterProducts(response.products)
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
          <button onClick={async () => {
            // await fetchproduct();
            setProducts(filterProducts)
            setCurrectCateg("all")
          }} className="rounded-md tracking-widest  bg-black text-white mx-1 font-bold py-2 px-2">All</button>

          {
            Array.from(new Set(filterProducts.map(prod => prod.category))).map((ele, ind) => {
              return <button onClick={async () => {
                // await fetchproduct();
                setProducts(filterProducts.filter(prod => prod.category == ele))
                setCurrectCateg(ele)
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
          products && products.length < 1 ? <Loading /> :
            products && products.map((ele, ind) => {
              return <ProductCard id={ele.id} key={ind} title={ele.title} price={ele.price} image={ele.thumbnail} ratings={ele.rating.count} />
            })
        }






      </div>
      <div className="w-full flex items-center justify-end">
        
      <Link to={`${currectCateg == "all" ? "/products" : `/products/${currectCateg}`}`} className="p-1 font-bold rounded-md hover:bg-orange-200 underline  text-orange-600 w-[100px] text-center ">See All</Link>

      </div>
    </section>
  )
}

export default TrendingProductsSection
