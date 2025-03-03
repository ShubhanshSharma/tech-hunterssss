"use client";
import React, { useEffect, useRef } from 'react'
import img1 from '../Assets/Home_Image.png'
import img2 from '../Assets/asset_home_1.png'
// import img4 from '../Assets/20230827_111950.jpg'
// import img5 from '../Assets/20230827_135431.jpg'
// import img6 from '../Assets/20230827_152759.jpg'
// import img7 from '../Assets/20240223_150303.jpg'
// import img8 from '../Assets/20240223_152844.jpg'
// import img9 from '../Assets/IMG_0201.jpg'
// import img10 from '../Assets/IMG_0219.jpg'
// import img11 from '../Assets/IMG_0306.jpg'
import about1 from '../Assets/upperDiv.png'
import Marquee from '../Components/Marquee';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutUpper from '../about/AboutUpper';
import AboutLower from '../about/AboutLower';
gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {

  const img3 = 'https://i.imgur.com/3qk3L2y.jpeg'
  const img4 = 'https://i.imgur.com/xOK4hId.jpeg'
  const img5 = 'https://i.imgur.com/PlzImyg.jpeg'
  const img6 = 'https://i.imgur.com/8n4AYIP.jpeg'
  const img7 = 'https://i.imgur.com/BGmSeVU.jpeg'
  const img8 = 'https://i.imgur.com/QA12mw0.jpeg'
  const img9 = 'https://i.imgur.com/aKmlzow.jpeg'
  const img10 = 'https://i.imgur.com/josEEDz.jpeg'
  const img11 = 'https://i.imgur.com/NS7G6nO.jpeg'


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
    <div id='GALLERY' className="GALLERY text-neutral-900 pb-[10vh] overflow-x-hidden flex flex-col items-center w-screen min-h-screen py-10 px-14 bg-black">

      <div ref={upper} className='absolute'>
        <AboutUpper />
      </div>

      

      <div ref={galleryContainer} className=' flex flex-col justify-evenly items-start w-screen overflow-x-hidden min-h-screen md:pb-10'>
        <span ref={GalleryHeading} className=" self-center text-white md:self-start uppercase text-[60px] lg:text-[90px] font-black lg:mt-4 ">
          GLIMPSE
        </span>

        <div className=''>
          <Marquee img1={img5} img2={img7} direction={'left'} img3={img3} img4={img8}/>
        </div>

        <div className=''>
          <Marquee img1={img9} img2={img6} img3={img5} img4={img10} direction={undefined}/>
        </div>

        <div className=' '>
          <Marquee img1={img6} img2={img4} direction='left' img3={img11} img4={img8}/>
        </div>
      </div>

      <div ref={lower} className=' absolute mt-[50vh]'>
        <AboutLower />
      </div>

        
    </div>
  )
}

export default Gallery