"use client";
import React, { useState } from 'react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from 'next/link';
import Image from 'next/image';
import { HiOutlineExternalLink } from "react-icons/hi";
gsap.registerPlugin(ScrollTrigger);

export default function PastEvents() {

    const [isMounted, setIsMounted] = useState(false);
  
    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        gsap.set('.virtualEventsReveal', {
            opacity: 0,
            scale: 0.5, 
        });
    
        // Animate in
        gsap.fromTo('.virtualEventsReveal',{
            opacity: 0,
            scale: 0.5,
        }, {
            opacity: 1,
            scale: 1,
            duration: 1,
            delay: 0.4,
            ease: 'power3.out',
            stagger: 0.4
        });
    }, []);
    
    return(
        <div id='PASTEVENTS' className="PASTEVENTS pb-[100px] px-4 bg-black min-h-screen w-screen h-max flex flex-col items-center justify-around ">
            <h2 className="virtualEventsReveal relative mt-6 md:mt-0 mx-auto font-black text-white text-[50px] sm:text-[70px] md:text-[90px] lg:text-[100px] xl:text-[140px]">
                Past Events 
            </h2>


            <div className=' grid grid-cols-1 md:grid-cols-2 gap-9 mt-14'>
                
                <Link href='/Track/Virtual-Events' className='virtualEventsReveal relative'>
                    <Image src='https://i.imgur.com/F1tMPxF.jpeg' alt='Virtual Events' width={500} height={500} className='object-cover'/>
                    <div className='absolute inset-0 gap-2 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl font-bold'>
                        Virtual Events<HiOutlineExternalLink />
                    </div>
                </Link>
                <Link href='/Track/Offline-Sprints' className='virtualEventsReveal relative'>
                    <Image src='https://i.imgur.com/TWngPid.jpeg' alt='Offline Sprints' width={500} height={500} className='object-cover'/>
                    <div className='absolute inset-0 gap-2 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl font-bold'>
                        Offline Sprints<HiOutlineExternalLink />
                    </div>
                </Link>
                <Link href='/Track/Syncup-Call' className='virtualEventsReveal relative'>
                    <Image src='https://www.hunterssss.in/images/syncup/4thfeb.webp' alt='Syncup Call' width={500} height={500} className='object-cover'/>
                    <div className='absolute inset-0 gap-2 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl font-bold'>
                        Syncup Call<HiOutlineExternalLink />
                    </div>
                </Link>
                
            </div>
        </div>
    )
}