"use client";
import React, { useEffect, useRef } from 'react'
import img1 from '../Assets/Home_Image.png'
import img2 from '../Assets/asset_home_1.png'
import about1 from '../Assets/upperDiv.png'
import Marquee from '../Components/Marquee';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutUpper from '../about/AboutUpper';
import AboutLower from '../about/AboutLower';
gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {

  const GalleryHeading = useRef(null)
  const galleryContainer = useRef(null)
  const lower = useRef(null)
  const upper = useRef(null)

  useEffect(() => {

    const tl = gsap.timeline({
      scrollTrigger:{
        trigger: upper.current,
        start: 'top top',
        end: 'bottom top',
        markers: false,
        scrub: true,
        pin: galleryContainer.current,
        pinSpacing: true,
        onLeave: () => {
          // Hide the element when the scroll ends
          gsap.set(lower.current, { display: 'none' });
        },
        onEnterBack: () => {
          // Show the element when scrolling back
          gsap.set(lower.current, { display: 'block' });
        },
    
      }
    });

    tl.to(lower.current,{
      y: '100vh',
      ease:'none',
    })
    
    
  }, [])


  return (
    <div id='GALLERY' className="GALLERY text-neutral-900 pb-[50dvh] overflow-x-hidden flex flex-col items-center w-screen min-h-screen py-10 px-14 bg-black">

      <div ref={upper} className='absolute'>
        <AboutUpper />
      </div>

      

      <div ref={galleryContainer} className=' flex flex-col justify-evenly items-start w-full min-h-screen md:pb-10'>
        <span ref={GalleryHeading} className=" self-center text-white md:self-start uppercase text-[60px] lg:text-[90px] font-black lg:mt-4 ">
          Ga<span className=' lowercase'>ll</span>ery
        </span>

        <div className=''>
          <Marquee img1={img1} img2={img2} direction={'left'} img3={undefined} img4={undefined}/>
        </div>

        <div className=''>
          <Marquee img1={img1} img2={img2} img3={undefined} img4={undefined} direction={undefined}/>
        </div>

        <div className=' '>
          <Marquee img1={img1} img2={img2} direction='left' img3={undefined} img4={undefined}/>
        </div>
      </div>

      <div ref={lower} className=' absolute mt-[50vh]'>
        <AboutLower />
      </div>

        
    </div>
  )
}

export default Gallery