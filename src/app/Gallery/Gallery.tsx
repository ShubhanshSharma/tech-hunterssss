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
  const lowerDiv = useRef(null)

  useEffect(() => {

    gsap.fromTo(galleryContainer.current,{
      marginTop: '-50%'
    },{
      marginTop: '0%',
      scrollTrigger:{
        trigger: galleryContainer.current,
        start: 'top 25vh',
        end: 'bottom 25vh',
        markers: false,
        scrub: true,
      }
    })

    const tl = gsap.timeline({
      scrollTrigger:{
        trigger: lowerDiv.current,
        start: '300vh center',
        end: '800vh center',
        
        markers: true,
        scrub: true,
      }
    });

    tl.fromTo(lowerDiv.current,{
      marginTop: '-100%'
    },{
      marginTop: '0%'
    })
    // tl.to(lowerDiv.current,{
    //   display: 'none',
    // })
  }, [])


  return (
    <div id='GALLERY' className="GALLERY text-neutral-900 mb-[50dvh] overflow-x-hidden flex flex-col items-center w-screen min-h-screen px-14 bg-white font-[family-name:var(--font-geist-mono)]">

      <AboutUpper />

      <div ref={galleryContainer} className=' flex flex-col items-start w-full h-fit'>
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

      <div className=' relative' ref={lowerDiv}>
        <AboutLower />
      </div>
        
    </div>
  )
}

export default Gallery