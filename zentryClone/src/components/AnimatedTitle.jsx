import React, { useEffect } from 'react'
import { useRef } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function AnimatedTitle({title,containerClass}) {

    const containerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const titleAnimation = gsap.timeline({
                scrollTrigger:{
                    trigger:containerRef.current,
                    start:"100 bottom",
                    end: "center bottom",
                    toggleAction:"play none none none", // onEnter onLeave onEnterBack onLeaveBack
                },
            });

            titleAnimation.to(".animated-word",{
                opacity: 1,
                transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
                ease: "power2.inOut",
                stagger: 0.02,
            });
        }, containerRef);

        return () => ctx.revert(); // clean up on anmount

    },[]);

    return (
        <>
        <div ref={containerRef} className={`${containerClass} animated-title `}>
            {title.split("<br />").map((line, index) => (
                <div
                key={index}
                className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
                >
                {line.split(" ").map((word, idx) => (
                    <span
                    key={idx}
                    className="animated-word"
                    dangerouslySetInnerHTML={{ __html: word }}
                    />
                ))}
                </div>
            ))}
        </div>
        </>
    )
}