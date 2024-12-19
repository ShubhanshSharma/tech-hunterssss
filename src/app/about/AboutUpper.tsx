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
    <div className=' bg-black relative w-screen h-[50dvh] z-10'>
      <Image alt='' src={img}  className=' lg:h-full w-auto mx-auto'/>
    </div>
  )
}

export default AboutUpper