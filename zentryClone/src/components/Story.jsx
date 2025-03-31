import { useRef } from "react";
import Tilt from 'react-parallax-tilt'
import Button from "./Button";

import AnimatedTitle from "./AnimatedTitle";

export default function  FloatingImage (){

    const frameRef = useRef(null);

    return (
        <div id="story" className="min-h-dvh w-screen bg-black text-blue-50">
        <div className="flex size-full flex-col items-center py-10 pb-24">
            <p className="font-general text-sm uppercase md:text-[10px]">
            the multiversal ip world
            </p>

            <div className="relative size-full">
                <AnimatedTitle
                    title="the st<b>o</b>ry of <br /> a hidden real<b>m</b>"
                    containerClass="!text-white mt-5 pointer-events-none mix-blend-difference relative z-10"
                />

                <div className="story-img-container">
                        <Tilt 
                            transitionSpeed={9000}
                            className="story-img-mask">
                            <div className="story-img-content">
                                <img
                                ref={frameRef}
                                src="/img/entrance.webp"
                                alt="entrance.webp"
                                className="object-contain rounded-lg"
                                />
                            </div>
                        </Tilt>
                    </div>
                </div>

                <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
                    <div className="flex h-full w-fit flex-col items-center md:items-start">
                        <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
                        Where realms converge, lies Zentry and the boundless pillar.
                        Discover its secrets and shape your fate amidst infinite
                        opportunities.
                        </p>

                        <Button
                            id="realm-btn"
                            title="discover prologue"
                            containerClass="mt-5"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

// export default FloatingImage;