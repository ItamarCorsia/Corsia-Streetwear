import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const contant = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t '>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>54709 willms station <br /> Suite 350, Washingtion, USA</p>
          <p className='text-gray-500'>Tel:(415) 555-0142 <br /> Email:admin@corsia.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Corsia</p>
          <p className='text-gray-500'>Learn more about our teams and job opening <br /> Suite 350, Washingtion, USA</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default contant
