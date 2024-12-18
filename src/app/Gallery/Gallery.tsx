"use client";
import React, { useEffect, useRef } from 'react'
import img1 from '../Assets/Home_Image.png'
import img2 from '../Assets/asset_home_1.png'
import about1 from '../Assets/upperDiv.png'
import Marquee from '../Components/Marquee';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {

  const GalleryHeading = useRef(null)

  useEffect(() => {

    gsap.to('.upperDiv',{
      y: '-50dvh',
      scrollTrigger:{
        trigger: '.GALLERY',
        start: 'top top',
        end: 'bottom top',
        markers: true,
        scrub: true,
        pin: true
      }
    })
  }, [])


  return (
    <div className="GALLERY text-neutral-900 mb-[50dvh] overflow-x-hidden flex flex-col items-center w-screen min-h-screen px-14 bg-white font-[family-name:var(--font-geist-mono)]">

      <span ref={GalleryHeading} className=" self-start lg:text-[90px] font-black lg:-mt-4 ">
        Gallery
      </span>

      <div className=''>
        <Marquee img1={img1} img2={img2} direction={'left'}/>
      </div>

      <div className=' mt-[25dvh]'>
        <Marquee img1={img1} img2={img2}/>
      </div>

      <div className=' mt-[25dvh]'>
        <Marquee img1={img1} img2={img2} direction='left'/>
      </div>


      {/* about */}
      <div className=' upperDiv bg-black absolute w-screen h-[50dvh] '>
        <Image alt='' src={about1}  className=' lg:h-full w-auto mx-auto'/>
      </div>
        
    </div>
  )
}

export default Gallery