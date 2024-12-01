import React, { useContext, useState, useEffect } from 'react'; // Added useEffect
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './productItem';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  // Using useEffect to set the latest products
  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]); // Dependency array should include 'products' so it updates when 'products' change.

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          {/* A paragraph below the title, with responsive text sizes and centered width. */}
          Explore our latest collection featuring the most stylish and trending pieces of the season.
        </p>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          {/* A paragraph below the title, with responsive text sizes and centered width. */}
          This collection has something for everyone. Find your perfect fit today!
        </p>
      </div>

      {/* Rendering Products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          latestProducts.map((item, index) => (
            <ProductItem key={index} id={item._id} image={item.image} name={item.productName} price={item.price} />
          ))
        }
      </div>
    </div>
  );
};

export default LatestCollection;
