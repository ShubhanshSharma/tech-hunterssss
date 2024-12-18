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
    <div className=' bg-black relative w-screen h-[50dvh] '>
      <Image alt='' src={img}  className=' lg:h-full w-auto mx-auto'/>
    </div>
  )
}

export default AboutLower