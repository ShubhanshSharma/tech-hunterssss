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
      duration: 1.2,
      ease: 'power2.inOut',
      scrollTrigger:{
        trigger: '.aboutUsHeading',
        start: 'top 65%',
        end: 'bottom 65%',
        // toggleActions: 'play none none reverse',
        markers: false,
        scrub: false,
        
      }
    })

    
  }, [])
  return (
    <div className='ABOUTUPPER bg-black overflow-y-clip relative flex flex-col justify-between items-center object-cover pb-[30px] px-4 w-screen h-[50vh] z-10'>
      {/* <Image alt='' src={img}  className=' object-cover h-full w-auto mx-auto'/> */}

      <h2 className=" aboutUsHeading relative mx-auto font-black text-white leading-[60px]  lg:text-[70px]">
        ABOUT US
      </h2>
      <div className=' aboutUsUpperContent relative max-w-[400px] text-slate-400 text-justify mx-auto place-self-end'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aut sed porro reprehenderit ipsam vel ipsum repellat animi, quisquam obcaecati quaerat, iure earum dicta non, iste pariatur neque laudantium id?
      </div>
    </div>
  )
}

export default AboutUpper