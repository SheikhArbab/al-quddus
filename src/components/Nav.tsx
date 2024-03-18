"use client"
import Link from 'next/link';
import { Search } from "@/components/index"
import { navLinks } from "@/constants/index";
import { FaRegUser } from 'react-icons/fa';

interface Pros {
    toggle: boolean;
}

const Nav = ({ toggle }: Pros) => {

    return (
        <nav className={`${toggle ? "p-0 h-0" : "pb-6 h-[85.5dvh] bg-black"}  border-0 border-y border-APrimary  duration-300 transition-all overflow-hidden container mx-auto md:h-fit px-4`}>
        <div className='md:hidden'>
            <Search />
        </div>

        <ul className='text-white my-6 flex md:flex-row flex-col gap-6  md:items-center justify-between overflow-auto h-[60dvh] shadow-md shadow-APrimary p-8 rounded-lg md:shadow-none md:p-0 md:h-fit'>
            {navLinks.length > 0 && navLinks.map((navLink, index) => (
                <li key={index} className='w-fit duration-300 transition-all hover:text-APrimary capitalize text-xs lg:text-sm'>
                    <Link href={navLink.link}>{navLink.title}</Link>
                </li>
            ))}
        </ul>


        <div className='text-white flex items-center gap-2 cursor-pointer md:hidden'>
            <div className='flex items-center gap-2 duration-300 transition-all hover:text-APrimary'><FaRegUser /> Login</div>
        </div>

    </nav>
    );
};

export default Nav;
