import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import AnimatedTitle from './AnimatedTitle'

export default function About() {

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger:{
                trigger:'#clip',
                start:'center center',
                end:'+=800 center',
                scrub:0.5,
                pin:true, // for fix the component
                pinSpacing:true, // make sure that no other component are overlap
            }
        });

        clipAnimation.to(".mask-clip-path",{
            width:"100vw",
            height:"100vh",
            border:"none",
        })
    });

    return (
        <>
        <div id='about' className='min-h-screen w-screen'>
            <div className='relative mb-8 mt-36 flex flex-col item-center gap-5'>
                <h2 className='font-general uppercase text-sm md:text-[15px] text-center'>welcome to zentry</h2>
                <AnimatedTitle 
                    title="disc<b>o</b>ver the w<b>o</b>rld's <br/> l<b>a</b>rgest sh<b>a</b>red <b>a</b>dventure"
                    containerClass='!text-black, mt-5 text-center'
                />
                <div className='about-subtext'>
                    <p>The Game of Games begins—your life, now an epic MMORPG</p>
                    <p className="text-gray-500">
                        Zentry unites every player from countless games and platforms, both
                        digital and physical, into a unified Play Economy
                    </p>
                </div>
            </div>
            <div className="h-dvh w-screen" id="clip">
                <div className="mask-clip-path about-image">
                    <img
                        src="../public/img/about.webp"
                        alt="Background"
                        className="absolute size-full object-cover"
                    />
                </div>
            </div>
        </div>
        </>
    )
}