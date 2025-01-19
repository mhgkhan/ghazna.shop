import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../components/ui/Loading';
import { FaAngleDown, FaCalendar, FaRegStar, FaStar, FaUser } from 'react-icons/fa';
import { FaStarHalfStroke } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const json = await response.json();
        // console.log(json);
        setProduct(json);
      } catch (error) {
        console.error('Error fetching the product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div className="flex justify-center items-center h-screen">
      <Loading />
    </div>;
  }

  return (

    // <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
    //   <img src={product.thumbnail} alt={product.title} className="w-full h-64 object-contain rounded-t-lg" />
    //   <div className="p-6">
    //     <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
    //     <p className="text-gray-700 mb-2">{product.description}</p>
    //     <p className="text-xl font-semibold mb-2">Price: ${product.price}</p>
    //     <p className="text-green-600 mb-2">Discount: {product.discountPercentage}%</p>
    //     <p className="text-yellow-500 mb-2">Rating: {product.rating}</p>
    //     <p className="text-gray-700 mb-2">Stock: {product.stock}</p>
    //     <p className="text-gray-700 mb-2">Brand: {product.brand}</p>
    //     <p className="text-gray-700 mb-2">Category: {product.category}</p>
    //     <div className="flex flex-wrap mb-2">
    //       {product.colors && product.colors.map((color, index) => (
    //         <span key={index} className="mr-2 mb-2 px-3 py-1 bg-gray-200 rounded-full">{color}</span>
    //       ))}
    //     </div>
    //     <div className="flex flex-wrap mb-2">
    //       {product.sizes && product.sizes.map((size, index) => (
    //         <span key={index} className="mr-2 mb-2 px-3 py-1 bg-gray-200 rounded-full">{size}</span>
    //       ))}
    //     </div>
    //     <div className="flex flex-wrap mb-2">
    //       {product.tags && product.tags.map((tag, index) => (
    //         <span key={index} className="mr-2 mb-2 px-3 py-1 bg-gray-200 rounded-full">{tag}</span>
    //       ))}
    //     </div>
    //     <div className="flex flex-wrap">
    //       {product.images && product.images.map((image, index) => (
    //         <img key={index} src={image} alt={`Product image ${index + 1}`} className="w-20 h-20 object-cover rounded-lg mr-2 mb-2" />
    //       ))}
    //     </div>
    //   </div>
    // </div>

    <div className="container mx-auto p-5">
      <div className="relative product-area w-full p-3 flex md:flex-row flex-col items-center flex-wrap justify-center gap-5 shadow-lg shadow-gray-600 rounded-lg">

        <div className="relative product-display md:w-[50%] w-full flex flex-col items-start md:justify-between justify-center md:gap-5 gap-2">
          {
            product && product.warrantyInformation ? <div className="absolute top-0 left-0 warenty-block p-2 bg-orange-700 text-center text-white font-bold ">{product && product.warrantyInformation}</div> : ""
          }
          <div className="product-img md:w-full md:h-[400px] w-[250px] h-[250px] mx-auto">
            <img src={product && product.thumbnail} alt={product.title} className='w-full h-full object-contain' />
          </div>
          <div className="colors flex items-center justify-center gap-2 w-full">
            <div className="color p-2 bg-orange-600 rounded-full cursor-pointer"></div>
            <div className="color p-2 bg-orange-300 rounded-full cursor-pointer"></div>
            <div className="color p-2 bg-orange-300 rounded-full cursor-pointer"></div>
          </div>
          <div className="sizes mx-auto">
            <p>Choose Size </p>
            <div className="flex items-center justify-start w-full gap-2 flex-wrap">
              {Array.from([1, 2, 3, 4, 5]).map((ele, ind) => {
                return (
                  <div key={ind} className="size w-[40px] h-[40px] flex items-center justify-center text-lg border border-1 border-orange-500 cursor-pointer hover:bg-orange-200">{ele}</div>)
              })}
            </div>
          </div>
        </div>

        <div className="product-info md:w-[50%] w-full flex flex-col items-start justify-between gap-3 relative ">
          <table className='w-full md:my-3 my-1'>
            <thead>
              <tr className='text-orange-800 font-bold text-left'>
                <th>Cateogry</th>
                <th>Brand</th>
                <th>Stock</th>
              </tr>
            </thead>
            <tbody>
              <tr className='text-left'>
                <td>{product && product.category}</td>
                <td>{product && product.brand}</td>
                <td>{product && product.stock}</td>
              </tr>
            </tbody>
          </table>
          <h2 className='text-3xl md:my-2 my-1'>{product && product.title}</h2>
          <h1 className='text-4xl text-orange-700 md:my-2 my1'>$ {product && product.price} <span className='ml-5 text-orange-400 line-through'>{product && product.discountPercentage}%</span> </h1>
          <p className="product-para text-justify text-lg md:my-3 my1">
            {product && product.description}
          </p>
          <div className="w-full flex items-center justify-start gap-3 md:my-2 my-1">
            {product.tags && product.tags.map((ele, ind) => {
              return <p className='p-1 text-center text-blue-600 hover:bg-gray-400 cursor-pointer' key={ind}>#{ele}</p>
            })}
          </div>
          <div className="bottom-buttons flex w-full items-center justify-center gap-3 mt-3">
            <button className="w-full h-[40px] p-2 text-center bg-orange-600 text-white font-bold border-none rounded-sm">Add to cart </button>
            <button className="w-[50px] h-[40px] p-2 text-center bg-orange-600 text-white font-bold border-none rounded-sm"> <FaAngleDown /> </button>
          </div>
        </div>


      </div>

      <div className="product-extra-info w-full h-auto mt-5">
        <h2 className="text-3xl text-orange-800 my-3">Reviews </h2>
        <div className="product-reviews flex -w-full items-center justify-start gap-3">


          {
            product && product.reviews.map((ele, ind) => {
              return <div key={ind} className="review m-2 p-2">
                <div className="stars relative">
                  <div className="stars w-full h-full flex items-center justify-start gap-2">
                    <FaStar className='text-yellow-500' />
                    <FaStarHalfStroke className='text-yellow-500' />
                    <FaRegStar className='text-yellow-500' />
                  </div>

                </div>

                <h3 className="text-xl text-black my-2">
                  {ele.comment}
                  <div className="mt-2 flex gap-2 p2">
                    <FaUser /> <h4 className='text-gray-600 text-lg'>{ele.reviewerName}</h4>
                  </div>
                  <div className=" flex gap-2 p2">
                    <MdEmail /> <h4 className='text-gray-600 text-lg'>{ele.reviewerEmail}</h4>
                  </div>
                  <div className="flex gap-2 p2">
                    <FaCalendar /> <h4 className='text-gray-600 text-lg'>{new Date(ele.date).toDateString()}</h4>
                  </div>
                </h3>
              </div>
            })
          }



        </div>

      </div>

    </div>

  );
};

export default Product;