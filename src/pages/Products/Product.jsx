import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const json = await response.json();
        console.log(json);
        setProduct(json);
      } catch (error) {
        console.error('Error fetching the product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <img src={product.thumbnail} alt={product.title} className="w-full h-64 object-cover rounded-t-lg" />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
        <p className="text-gray-700 mb-2">{product.description}</p>
        <p className="text-xl font-semibold mb-2">Price: ${product.price}</p>
        <p className="text-green-600 mb-2">Discount: {product.discountPercentage}%</p>
        <p className="text-yellow-500 mb-2">Rating: {product.rating}</p>
        <p className="text-gray-700 mb-2">Stock: {product.stock}</p>
        <p className="text-gray-700 mb-2">Brand: {product.brand}</p>
        <p className="text-gray-700 mb-2">Category: {product.category}</p>
        <div className="flex flex-wrap mb-2">
          {product.colors && product.colors.map((color, index) => (
            <span key={index} className="mr-2 mb-2 px-3 py-1 bg-gray-200 rounded-full">{color}</span>
          ))}
        </div>
        <div className="flex flex-wrap mb-2">
          {product.sizes && product.sizes.map((size, index) => (
            <span key={index} className="mr-2 mb-2 px-3 py-1 bg-gray-200 rounded-full">{size}</span>
          ))}
        </div>
        <div className="flex flex-wrap mb-2">
          {product.tags && product.tags.map((tag, index) => (
            <span key={index} className="mr-2 mb-2 px-3 py-1 bg-gray-200 rounded-full">{tag}</span>
          ))}
        </div>
        <div className="flex flex-wrap">
          {product.images && product.images.map((image, index) => (
            <img key={index} src={image} alt={`Product image ${index + 1}`} className="w-20 h-20 object-cover rounded-lg mr-2 mb-2" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
