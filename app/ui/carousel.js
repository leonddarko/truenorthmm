"use client"

import React, { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { brandImages } from '../lib/data'
import Image from 'next/image'

export default function EmblaCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [AutoScroll()])

    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes()) // Access API
        }
    }, [emblaApi])

    const [grab, setGrab] = useState("cursor-grab");

    return (
        <>
            <div className={`overflow-hidden md:max-w-7xl m-auto rounded-md p-4 ${grab}`} ref={emblaRef}
                onMouseDown={() => grab === "cursor-grab" && setGrab("cursor-grabbing")}
                onMouseUp={() => grab === "cursor-grabbing" && setGrab("cursor-grab")}
            >
                <div className="flex gap-6">
                    {brandImages.map((item) => (
                        <div key={item.id} className="embla__slide flex justify-center items-center">
                            <Image
                                src={`/assets/brands/${item.image}`}
                                width={80}
                                height={80}
                                alt="brandlogo"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}