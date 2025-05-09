"use client"

import React, { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { MoveDown } from 'lucide-react'

export default function AutoEmblaCarousel() {

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()])

    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes()) // Access API
        }
    }, [emblaApi])

    const autoPlaySlideContent = [{
        id: 0,
        bImage: "bg-[url('/assets/focused_group_1.0.jpeg')]",
        heading: "Monitoring. Evaluation and Measurement",
        subheading: "Right on time, the first time."
    },
    {
        id: 1,
        bImage: "bg-[url('/assets/Duo_focused.jpeg')]",
        heading: "Global Technology-oriented Media Monitoring",
        subheading: "Harnessing the power of Artificial Intelligence and other cutting-edge technologies "
    },
    {
        id: 2,
        bImage: "bg-[url('/assets/mediamonitoringbg.jpeg')]",
        heading: "Real-Time Insights for Your Business",
        subheading: "Providing you with measurable results on the go"
    }
    ]

    const [grab, setGrab] = useState("cursor-grab");

    return (
        <>
            <div
                className={`relative overflow-hidden pr-4 mt-20 pt-1 ${grab} transition-all`} ref={emblaRef}
                onMouseDown={() => grab === "cursor-grab" && setGrab("cursor-grabbing")}
                onMouseUp={() => grab === "cursor-grabbing" && setGrab("cursor-grab")}
            >
                <div className="flex">
                    {autoPlaySlideContent.map((item) => (
                        <div key={item.id} className="embla__slide2">
                            <div
                                className={`px-6 md:px-16 h-screen flex justify-start items-end z-0 bg-black 
                                    ${item.bImage}
                                    bg-no-repeat bg-cover bg-top rounded-3xl shadow `}
                            >
                                <div className="mb-28 ">
                                    <h1 className="text-white font-notoserif text-4xl md:text-6xl font-bold max-w-3xl">
                                        {item.heading}
                                    </h1>
                                    <p className="text-white font-notosans font-medium">
                                        {item.subheading}
                                    </p>
                                </div>
                            </div>


                        </div>
                    ))}
                </div>
                <div className="flex justify-center items-center">
                    <a href='/#down' className='animate-bounce'>
                        <div className="px-2 py-4 rounded-full bg-zinc-200 shadow relative z-50 inline-block bottom-6">
                            <MoveDown size={20} className="text-black" />
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}