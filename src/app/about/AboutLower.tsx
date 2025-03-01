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
      <div className='aboutUsLowerContent relative max-w-[400px] text-slate-400 text-justify mx-auto mt-10 md:mt-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aut sed porro reprehenderit ipsam vel ipsum repellat animi, quisquam obcaecati quaerat, iure earum dicta non, iste pariatur neque laudantium id?
      </div>
    </div>
  )
}

export default AboutLower