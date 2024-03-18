"use client"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

const Hero = () => {



    return (
        <section className="relative ">
            <div className="w-full h-fit bg-black">

                <Carousel
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={2000}
                    showThumbs={false}
                    showIndicators={false}
                    showStatus={false}
                >
                    {
                        true && [{ img: '/1.png' }, { img: '/1.png' }, { img: '/1.png' }].map((v, i) =>
                            <div className="relative w-full h-[36dvh] sm:h-[50dvh] md:h-[71dvh]  overflow-hidden" key={i}>
                                <Image fill src={v.img} className="w-full h-full object-cover" alt="/" />
                            </div>
                        )
                    }
                </Carousel>
 
            </div>
        </section>

    )
}

export default Hero

