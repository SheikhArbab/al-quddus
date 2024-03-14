"use client"
import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useState } from 'react'
import { Search } from "@/components/index"
import { LuShoppingCart } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { Nav } from "@/components/index";

const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  const [toggle, setToggle] = useState(true)


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 30);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  }, []);



  return (
    <header className={` ${isScrolled && 'fixed'} bg-black duration-300 transition-all w-full relative z-50 left-0 right-0 top-0`}>

      <div className="container mx-auto text-white flex items-center justify-between gap-2">
        <Link href={'/'} >
          <Image alt='al-quddus' width={100} height={100} className='object-contain' src={'/al-quddus.png'} />
        </Link>

        <div className='w-[70%] hidden md:flex'>
          <Search />
        </div>


        <div className='flex items-center gap-2'>

          <div className='md:flex items-center gap-2 cursor-pointer hidden'>
            <Link href={'/login'} className='flex items-center gap-2 duration-300 transition-all hover:text-APrimary'><FaRegUser /> Login</Link>
          </div>

          <button className='text-2xl duration-300 transition-all hover:text-APrimary'><LuShoppingCart /></button>

          <div className="switch md:hidden" onClick={() => setToggle(!toggle)} >
            <input type="checkbox" />
            <div>
              <span className="line-1" />
              <span className="line-2" />
              <span className="line-3" />
            </div>
          </div>

        </div>


      </div>

      <Nav toggle={toggle} />

    </header>
  )
}

export default Header