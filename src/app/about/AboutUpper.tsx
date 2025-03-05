"use client";
import React, { useEffect } from 'react'
import img from '../Assets/upperDiv.png'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)


const AboutUpper = () => {

  useEffect(() => {

    gsap.fromTo(['.aboutUsHeading', '.aboutUsUpperContent', '.aboutUsLowerContent'] ,{
      opacity: 0,
      y: '100px'
    },{
      y: '0px',
      opacity: 1,
      duration: 0.6,
      ease: 'power2.inOut',
      stagger: 0.4,
      scrollTrigger:{
        trigger: '.aboutUsHeading',
        start: 'top 65%',
        end: 'bottom 65%',
        toggleActions: 'play none none reverse',
        markers: false,
        scrub: false,
        
      }
    })

    
  }, [])
  return (
    <div className='ABOUTUPPER bg-black overflow-y-clip relative flex flex-col justify-end gap-[10vh] md:gap-[40px]  items-center object-cover px-4 w-screen h-[50vh] z-10'>
      {/* <Image alt='' src={img}  className=' object-cover h-full w-auto mx-auto'/> */}

      <h2 className=" aboutUsHeading relative mx-auto font-black text-white  text-[60px] lg:text-[90px]">
        ABOUT US
      </h2>
      <div className=' aboutUsUpperContent relative max-w-[600px] text-[16px] sm:text-[20px] font-medium text-gray-500 text-justify mx-auto mb-[40px] place-self-end'>
        We aim to bring together all the community-minded hunters to provide them with the perfect space where they can nurture their tech curiosities by learning, networking, interacting, and sharing their experiences-all while having fun!
      </div>
    </div>
  )
}

export default AboutUpper