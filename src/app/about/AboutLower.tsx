"use client";
import React, { useEffect } from 'react'
import img from '../Assets/lowerDiv.png'
import Image from 'next/image'
import gsap from 'gsap'

const AboutLower = () => {

  useEffect(() => {

    // gsap.fromTo('.lowerDiv',{
    //     y: '150dvh'
    // },{
    //   y: '200dvh',
    //   scrollTrigger:{
    //     trigger: '.lowerDiv',
    //     start: 'top bottom',
    //     end: 'bottom top',
    //     markers: false,
    //     scrub: true,
    //     pin: true
    //   }
    // })
  }, [])
  return (
    <div className='ABOUTLOWER bg-black relative flex px-4 w-screen h-[60vh] z-10'>
      {/* <Image alt='' src={img}  className=' lg:h-full w-auto mx-auto'/> */}
      <div className='aboutUsLowerContent relative max-w-[600px] text-[16px] sm:text-[22px] font-medium text-gray-500 text-justify mx-auto mt-4 md:mt-4'>
        Techuntersssss; More than a community, it's a gathering of passionate individuals sharing love, interest, and compassion for technology.  
        <br/>
        so, if you love tech just like us, this is the place to be !
      </div>
    </div>
  )
}

export default AboutLower