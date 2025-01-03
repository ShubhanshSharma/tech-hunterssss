"use client";
import React, { useEffect } from 'react'
import img from '../Assets/upperDiv.png'
import Image from 'next/image'
import gsap from 'gsap'

const AboutUpper = () => {

  // useEffect(() => {

  //   gsap.to('.upperDiv',{
  //     y: '-50dvh',
  //     scrollTrigger:{
  //       trigger: '.upperDiv',
  //       start: 'top bottom',
  //       end: 'bottom top',
  //       markers: false,
  //       scrub: true,
  //     }
  //   })
  // }, [])
  return (
    <div className=' bg-black overflow-y-clip relative flex object-cover px-4 w-screen h-[50vh] z-10'>
      {/* <Image alt='' src={img}  className=' object-cover h-full w-auto mx-auto'/> */}

      <h2 className=" absolute font-black text-white leading-[60px]  text-[70px] lg:text-[90px] mt-10 md::mt-4 lg:ml-10">
        ABOUT US
      </h2>
      <div className=' relative max-w-[400px] text-white text-justify mx-auto place-self-end'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aut sed porro reprehenderit ipsam vel ipsum repellat animi, quisquam obcaecati quaerat, iure earum dicta non, iste pariatur neque laudantium id?
      </div>
    </div>
  )
}

export default AboutUpper