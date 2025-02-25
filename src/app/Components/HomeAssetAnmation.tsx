"use client";
import Image from 'next/image'
import React, { useEffect } from 'react'
import animationImage from '../Assets/asset_home_1.png'
import gsap from 'gsap'

const HomeAssetAnmation = () => {

    useEffect(() => {
        gsap.fromTo('.toRightHomeAnimation',{
            opacity:0,
        },{
            opacity:1,
            duration:0.01,
            delay: 2.5,
        })
        gsap.fromTo('.toRightHomeAnimationAsset',{
            xPercent: 0
        },{
            xPercent: 100,
            duration: 2.4,
            ease: "power4.out",
            delay: 2.8,
        })
        gsap.to('.toRightHomeAnimationAsset',{
            display: 'none',
            delay: 5,
        })
    },[])
  return (
    <div className='toRightHomeAnimation relative uppercase w-[300px] overflow-hidden rounded-xl'>
        <Image src={animationImage} alt=""  className=' shadow-md'/>
        <div className='toRightHomeAnimationAsset h-full w-[130%] absolute right-0 top-0 z-10'></div>

        <p className=' absolute bottom-2 left-[40%] text-[32px] font-thin text-black'>2K+</p>
        <p className=' absolute w-[30%] font-normal right-0 bottom-4 text-[12px] text-black'>Members & community Parteners</p>

        {/* <div className=' absolute left-5 top-5 rounded-full bg-slate-100 w-9 aspect-square'></div> */}
        <div className=' absolute left-24 shadow-md top-5 rounded-full bg-slate-100 w-9 aspect-square'></div>
        <div className=' absolute left-4 top-5 shadow-md rounded-full bg-slate-100 w-9 aspect-square'></div>
        <div className=' absolute left-14 top-5 shadow-md rounded-full bg-slate-100 w-9 aspect-square'></div>
    </div>
  )
}

export default HomeAssetAnmation