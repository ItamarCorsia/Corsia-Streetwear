import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={' US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At Corsia, we are more than just a fashion brand – we’re a movement. We believe in providing high-quality, timeless pieces that make you look and feel your best. Our journey began with a vision to offer carefully curated collections that blend the latest trends with enduring styles, allowing you to express yourself effortlessly.</p>
          <p>Our team is committed to bringing you pieces that are not only stylish but also sustainable and ethically produced. We carefully source materials, work with skilled artisans, and prioritize transparency in our production processes to ensure every product we offer meets our high standards.</p>
          <b className='text-gray-800'>Our mission</b>
          <p>Our mission is to revolutionize the way people experience fashion by offering a blend of style, comfort, and sustainability. We aim to create a lasting impact by providing our customers with products that not only make a fashion statement but also contribute to a healthier planet.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We are committed to providing only the highest-quality products. Each item in our collection is rigorously tested for durability, comfort, and style. We work closely with our suppliers to ensure that every piece meets our strict quality standards before it reaches you.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Shopping with us is easy and convenient. Our user-friendly website, fast and reliable shipping, and hassle-free return policies make it easier than ever to get the products you love delivered to your door. Plus, with our multiple payment options, you can shop in a way that works best for you.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Sevice:</b>
          <p className='text-gray-600'>Our team is dedicated to providing exceptional service at every step of your shopping experience. From answering your questions before you make a purchase to assisting with exchanges or returns, we’re here to make sure your experience is smooth and enjoyable.</p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default About
