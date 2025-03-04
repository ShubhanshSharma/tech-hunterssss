'use client';
import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);
import img1 from '../Assets/DEVFOLIO LOGO.png';
import img2 from '../Assets/GitHub_Logo_White.png'
import img3 from '../Assets/POLYGON LOGO.png';
import img4 from '../Assets/QuillAudit-Logo.png';
import img5 from '../Assets/VE_logo2.jpg';
import img6 from '../Assets/echo3D_brand_logo_4 1.png';
import img7 from '../Assets/givemycertificate-removebg-preview.png';
import img8 from '../Assets/orkes-invert.png';
import img9 from '../Assets/replit-light.png';
import img10 from '../Assets/soonami.png';
import Image from 'next/image';

export default function Sponsors() {

    useEffect(() => {
        gsap.fromTo('.sponsorsHeading' ,{
            opacity: 0,
            y: 100
          },{
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power4.out',
            scrollTrigger:{
              trigger: '.sponsorsHeading',
              start: 'top 85%',
              toggleActions: 'play none none reverse',
              markers: true,
              
            }
          })

          gsap.fromTo('.sponsorImage' ,{
            opacity: 0,
            y: 100
          },{
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power4.out',
            stagger: 0.1,
            scrollTrigger:{
              trigger: '.sponsorsHeading',
              start: 'top 45%',
              // toggleActions: 'play none none reset',
              // markers: true,
              
            }
          })
    }, [])

  return (
    <div id='SPONSORS' className="SPONSORS w-screen min-h-screen h-max flex flex-col items-center py-[70px] px-4 md:px-14">
      <h2 className=" sponsorsHeading relative mx-auto font-black text-white text-[60px]  lg:text-[90px]">
        SPONSORS
      </h2>

      <div className=' relative w-5/6 grid grid-cols-2 md:grid-cols-3 mt-[150px] gap-4 md:gap-8'>
        {[img1, img2, img3, img4, img8, img6, img7, img5, img9, img10].map((img, index) => (
          <div key={index} className='sponsorImageWrapper  self-center border-white'>
            <Image loading='lazy' src={img} alt='sponsor' width={300} className='sponsorImage object-cover  ' />
          </div>
        ))}
      </div>
    </div>
  );
}