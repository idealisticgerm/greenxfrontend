import React from 'react'
import { useState } from 'react'
import Explore from './Explore'
import Disease from '../components/Disease'
import { useAuth } from "../context/auth";



const Home = () => {
  const { auth } = useAuth();


  return (
    <div className='flex flex-col gap-y-14 '>


      <div className='w-full '>
        {/* <img className='h-[100vh] w-full' src="https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638892233/EducationHub/photos/crops-growing-in-thailand.jpg" alt="" /> */}

        <div className="bg-[url('https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638892233/EducationHub/photos/crops-growing-in-thailand.jpg')] w-full h-[80vh] md:h-screen bg-cover bg-no-repeat bg-center relative before:bg-black before:absolute before:z-20 before:inset-0 before:opacity-30 overflow-hidden">



          <div className='absolute left-4 md:left-20  top-16 md:top-40 z-30 '>
            <div className='flex gap-x-8 flex-col'>
              <p className='text-5xl md:text-9xl font-serif font-semibold text-[#c2eb53] select-none'>Explore</p>
              <p className='text-5xl md:text-9xl font-serif font-semibold text-[#c2eb53] mt-12 select-none '>Detect</p>
              <p className='text-5xl md:text-9xl font-serif font-semibold text-[#c2eb53] mt-12 select-none'>Analyse</p>
            </div>
          </div>
        </div>




      </div>
      <Explore simplified />
      <Disease />
    </div>
  )
}

export default Home