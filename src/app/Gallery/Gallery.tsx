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

    gsap.fromTo(galleryContainer.current,{
      y: '-50vh'
    },{
      y: '0vh',
      scrollTrigger:{
        trigger: galleryContainer.current,
        start: 'top top',
        end: '+=400',
        markers: false,
        scrub: 0.01,
      }
    })

    const tl = gsap.timeline({
      scrollTrigger:{
        trigger: upper.current,
        start: 'top top',
        end: `+=${window.innerHeight/2}`,
        markers: true,
        scrub: true,
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
      ease:'none'
    })

    
  }, [])


  return (
    <div id='GALLERY' className="GALLERY text-neutral-900 mb-[50dvh] overflow-x-hidden flex flex-col items-center w-screen min-h-screen px-14 bg-white font-[family-name:var(--font-geist-mono)]">

      <div ref={upper} className=''>
        <AboutUpper />
      </div>

      

      <div ref={galleryContainer} className=' flex flex-col items-start w-full h-fit pb-10'>
        <span ref={GalleryHeading} className=" self-start lg:text-[90px] font-black lg:mt-4 ">
          Gallery
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