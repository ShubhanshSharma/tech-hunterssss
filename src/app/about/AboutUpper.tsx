import React, { useEffect } from 'react'
import img from '../Assets/upperDiv.png'
import Image from 'next/image'
import gsap from 'gsap'

const AboutUpper = () => {

  useEffect(() => {

    gsap.to('.upperDiv',{
      y: '-50dvh',
      scrollTrigger:{
        trigger: '.upperDiv',
        start: 'top bottom',
        end: 'bottom top',
        markers: true,
        scrub: true,
      }
    })
  }, [])
  return (
    <div className=' object-fill absolute w-full h-[50dvh] top-[100dvh]'>
      <Image alt='' src={img}  className=' lg:w-screen'/>
    </div>
  )
}

export default AboutUpper