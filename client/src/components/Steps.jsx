import React from 'react'
import { assets } from '../assets/assets'

function Steps() {
  return (
    <div className='mx-4 lg:mx-44 py-20 xl:py-40'>
      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>
        Steps to remove background<br /> image in seconds
      </h1>

      <div className='flex flex-wrap justify-center gap-6 mt-16 xl:mt-24'>
        
        {/* Step 1 */}
        <div className='w-full sm:w-[47%] lg:w-[30%] bg-white border border-gray-300 drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
          <div className='flex items-start gap-4'>
            <img className='w-9' src={assets.upload_icon} alt="Upload Icon" />
            <div>
              <p className='text-xl font-medium'>Upload image</p>
              <p className='text-sm text-neutral-500 mt-1'>
                Upload your image to start removing the background. Supports JPG, PNG, and more.
              </p>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className='w-full sm:w-[47%] lg:w-[30%] bg-white border border-gray-300 drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
          <div className='flex items-start gap-4'>
            <img className='w-9' src={assets.remove_bg_icon} alt="Remove Background Icon" />
            <div>
              <p className='text-xl font-medium'>Remove background</p>
              <p className='text-sm text-neutral-500 mt-1'>
                Our tool will instantly remove the background using AI-based detection.
              </p>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className='w-full sm:w-[47%] lg:w-[30%] bg-white border border-gray-300 drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
          <div className='flex items-start gap-4'>
            <img className='w-9' src={assets.download_icon} alt="Download Icon" />
            <div>
              <p className='text-xl font-medium'>Download image</p>
              <p className='text-sm text-neutral-500 mt-1'>
                Download your image with background removed — ready to use anywhere!
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Steps

