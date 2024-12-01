// Importing React and assets
import React from 'react'; // React library for creating the component
import { assets } from '../assets/assets'; // Import assets (e.g., hero image) from the assets folder

// Hero Component
const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'> {/* Main container with flexbox for layout */}

      {/* Hero Left Side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        {/* Left side content is centered vertically and horizontally with padding */}
        <div className='text-[#414141]'>

          {/* Header section with a line and title */}
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p> {/* Small line before text */}
            <p className='font-medium text-sm md:text-base'>OUR BEST SELLERS</p> {/* Text "OUR BEST SELLERS" */}
          </div>

          <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>
            Latest Arrivals
          </h1> {/* Main heading with custom font and size */}

          {/* Shop Now section with a line and text */}
          <div className='flex items-center gap-2'>
            <p className='font-semibold text-sm md:text-base'>SHOP NOW</p> {/* "SHOP NOW" text */}
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p> {/* Small line after text */}
          </div>

        </div>
      </div>

      {/* Hero Right Side: Image */}
      <img className='w-full sm:w-1/2' src={assets.hero_img} alt="Hero Image" />
      {/* Right side: Hero image, takes full width on small screens and half on larger screens */}

    </div>
  );
}

export default Hero; // Export the Hero component for use in other parts of the app
