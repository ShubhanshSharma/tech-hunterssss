"use client";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import sampleImage from '../Assets/Home_Image.png';




export default function Marquee(props){

    let img1 = props.img1;
    let img2 = props.img2;
    let img3 = props.img3;
    let img4 = props.img4;
    let direction = props.direction

    const firstText = useRef(null);
    const secondText = useRef(null);
    const scroll3 = useRef(null);
    const scroll4 = useRef(null);
    const scroll5 = useRef(null);
    const scroll6 = useRef(null);
    // const slider = useRef(null);
    let xPercent = 0;
    let xPercent2 = 0;
    // let direction = 1;
    
    useEffect(() => {
        requestAnimationFrame(animation);

        gsap.to('.sliderContainer',{
            scrollTrigger:{
                trigger: document.documentElement,
                start: `top top`,
                end: `bottom ${window.innerHeight}`,
                markers: false,
                scrub: 0.4,
                onUpdate: e => direction = e.direction * -1
            },
            x: '-=300px',
        })
    },[]);

    const animation = () => {
        if(xPercent <= -100){
            xPercent = 0;
        }
        if(xPercent >0){
            xPercent = -100;
        }
        if(xPercent2 <= -100){
            xPercent2 = 0;
        }
        if(xPercent2 >0){
            xPercent2 = -100;
        }
        gsap.set(firstText.current,{xPercent: xPercent });
        gsap.set(secondText.current,{xPercent: xPercent });
        gsap.set(scroll3.current,{xPercent: xPercent2 });
        gsap.set(scroll4.current,{xPercent: xPercent2 });
        // gsap.set(scroll5.current,{xPercent: xPercent });
        // gsap.set(scroll6.current,{xPercent: xPercent });
        xPercent += 0.07 *direction;
        xPercent2 -= 0.07 *direction;
        requestAnimationFrame(animation);
    }

    return(
        <div className="sliderContainer absolute  left-0 min-w-screen h-fit">

            {
                direction=='left' && 
                <div  className="slider  whitespace-nowrap relative w-max text-[#faf9f6] mix-blend-difference flex flex-row">
                    <div ref={firstText}  className=" flex gap-8 pl-8 m-0 justify-around"><Image src={img1} alt="" className=" h-[160px] rounded-xl w-auto" /><Image src={img2} alt="" className=" h-[160px] rounded-xl w-auto" /><Image src={img1} alt="" className=" h-[160px] rounded-xl w-auto" /><Image src={img2} alt="" className=" h-[160px] rounded-xl w-auto" /><Image src={img1} alt="" className=" h-[160px] rounded-xl w-auto" /><Image src={img2} alt="" className=" h-[160px] rounded-xl w-auto" /></div>
                    <div ref={secondText}  className=" flex gap-8 pl-8 m-0 justify-around"><Image src={img1} alt="" className=" h-[160px] rounded-xl w-auto" /><Image src={img2} alt="" className=" h-[160px] rounded-xl w-auto" /><Image src={img1} alt="" className=" h-[160px] rounded-xl w-auto" /><Image src={img2} alt="" className=" h-[160px] rounded-xl w-auto" /><Image src={img1} alt="" className=" h-[160px] rounded-xl w-auto" /><Image src={img2} alt="" className=" h-[160px] rounded-xl w-auto" /></div>
                </div>
            }
            {
                direction !=='left' && 
                <div  className="slider  whitespace-nowrap relative w-max text-[#faf9f6] mix-blend-difference flex flex-row">
                    <div ref={scroll3}  className=" flex gap-8 pl-8 m-0 justify-around"><Image src={img1} alt="" className=" h-[160px] rounded-xl w-auto" /><Image src={img2} alt="" className=" h-[160px] rounded-xl w-auto" /><Image src={img1} alt="" className=" h-[160px] rounded-xl w-auto" /><Image src={img2} alt="" className=" h-[160px] rounded-xl w-auto" /><Image src={img1} alt="" className=" h-[160px] rounded-xl w-auto" /><Image src={img2} alt="" className=" h-[160px] rounded-xl w-auto" /></div>
                    <div ref={scroll4}  className=" flex gap-8 pl-8 m-0 justify-around"><Image src={img1} alt="" className=" h-[160px] rounded-xl w-auto" /><Image src={img2} alt="" className=" h-[160px] rounded-xl w-auto" /><Image src={img1} alt="" className=" h-[160px] rounded-xl w-auto" /><Image src={img2} alt="" className=" h-[160px] rounded-xl w-auto" /><Image src={img1} alt="" className=" h-[160px] rounded-xl w-auto" /><Image src={img2} alt="" className=" h-[160px] rounded-xl w-auto" /></div>
                </div>
            }
            


            {/* <div  className="slider mt-[15vh] whitespace-nowrap relative w-max text-[#faf9f6] mix-blend-difference flex flex-row">
                <div ref={scroll5}  className=" flex gap-8 pl-8 m-0 justify-around"><Image src={sampleImage} alt="" className=" h-[100px] rounded-xl w-auto" /><Image src={sampleImage} alt="" className=" h-[100px] rounded-xl w-auto" /><Image src={sampleImage} alt="" className=" h-[100px] rounded-xl w-auto" /><Image src={sampleImage} alt="" className=" h-[100px] rounded-xl w-auto" /><Image src={sampleImage} alt="" className=" h-[100px] rounded-xl w-auto" /></div>
                <div ref={scroll6}  className=" flex gap-8 pl-8 m-0 justify-around"><Image src={sampleImage} alt="" className=" h-[100px] rounded-xl w-auto" /><Image src={sampleImage} alt="" className=" h-[100px] rounded-xl w-auto" /><Image src={sampleImage} alt="" className=" h-[100px] rounded-xl w-auto" /><Image src={sampleImage} alt="" className=" h-[100px] rounded-xl w-auto" /><Image src={sampleImage} alt="" className=" h-[100px] rounded-xl w-auto" /></div>
            </div> */}
            
        </div>
    )
}