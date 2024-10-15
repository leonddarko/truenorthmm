"use client"

import React, { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export default function AutoEmblaCarousel() {

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()])

    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes()) // Access API
        }
    }, [emblaApi])

    const autoPlaySlideContent = [{
        id: 0,
        bImage: "bg-[url('/assets/mediamonitoringbg.jpeg')]",
    },
    {
        id: 1,
        bImage: "bg-[url('/assets/mediamonitoringbg.jpeg')]",
    },
    {
        id: 2,
        bImage: "bg-[url('/assets/mediamonitoringbg.jpeg')]",
    }
    ]

    const [grab, setGrab] = useState("cursor-grab");

    return (
        <>
            <div
                className={`relative overflow-hidden pr-6 mt-20 pt-1 ${grab} transition-all`} ref={emblaRef}
                onMouseDown={() => grab === "cursor-grab" && setGrab("cursor-grabbing")}
                onMouseUp={() => grab === "cursor-grabbing" && setGrab("cursor-grab")}
            >
                <div className="flex">
                    {autoPlaySlideContent.map((item) => (
                        <div key={item.id} className="embla__slide2">
                            <div
                                className={`px-6 md:px-16 pb-16 h-screen flex justify-start items-end z-0 bg-black 
                                    ${item.bImage}
                                    bg-no-repeat bg-cover bg-top rounded-3xl shadow`}
                            >
                                <div>
                                    <h1 className="text-white font-notoserif text-5xl md:text-7xl font-bold max-w-3xl">
                                        Monitoring. Evaluation and Measurement.
                                    </h1>
                                    <p className="text-white font-notosans font-medium">
                                        Right on time, the first time.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}