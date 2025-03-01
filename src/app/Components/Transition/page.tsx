"use client";
import { useState, useContext, useRef, useEffect, ReactElement } from "react"
import gsap from "gsap";
// import { useGSAP } from "gsap/react";
// gsap.registerPlugin(useGSAP);

import { ReactNode } from "react";

interface TransitionLayoutProps {
    children: ReactNode;
}

export default function Transition({ children }: TransitionLayoutProps) {
    const container = useRef(null);
    const [displayChildren, setDisplayChildren] = useState(children)
    // const { timeline } = useContext(TransitionContext);
    // const { contextSafe } = useGSAP(); 

    // const exit = contextSafe( () => {
    //     timeline.play().then( () => {
    //         window.scrollTo(0, 0)
    //         setDisplayChildren(children);
    //         timeline.pause().clear();
    //     })
    // })
    
    useEffect(() => {
        //if page is not the current page
        if (children && displayChildren && (children as ReactElement).key !== (displayChildren as ReactElement).key) {
                gsap.to(container.current,{
                    opacity: 0,
                    duration: 0.5,
                    ease: 'power4.out',
                    onComplete: () => {
                        setDisplayChildren(children);
                        gsap.to(container.current, {
                            opacity: 1,
                            duration: 0.5,
                        });
                    }
                })      
        }

    }, [children]) 

    return (
        <div ref={container} className="">
            {displayChildren}
        </div>
    )
}