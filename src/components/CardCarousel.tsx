"use client"
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CardCarousel = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  return (

    <div className='mt-[50px] md:mt-[100px] mb-[100px] md:mb-0'>

      <div className='text-2xl capitalize font-bold mb-5'>
        you might also like
      </div>

      <Carousel responsive={responsive}
        containerClass="-mx-[10px]"
        itemClass='px-[10px]'
      >

        {[''].map((p, i) => (

          <Link href={'/'} key={i}>

            <div className='hover:scale-105 duration-300 transition-all py-4 shadow-sm flex flex-col items-center justify-center '>
              <Image fill alt="al-quddus" className='w-full h-36 object-contain absolute mb-4 ' src={'/al-quddus.png'} />
              <p>discription</p>
              <p className='text-black/[0.6]'>Rs:43</p>
            </div>

          </Link>

        ))}

      </Carousel>

    </div>
  )
}

export default CardCarousel