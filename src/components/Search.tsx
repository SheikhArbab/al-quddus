import { IoIosSearch } from 'react-icons/io';

const Search = () => {
    return (

        <form className='w-full px-4 rounded-lg flex h-8 items-center text-xs bg-white py-5'>
            <input type="search" className='w-full bg-transparent p-0 focus:outline-none text-black' placeholder='Search in Al-Quddus' />
            <button type='submit' className='text-APrimary text-xl bg-amber-500/20 px-4 rounded-md py-1'><IoIosSearch /></button>
        </form>
        
    )
}

export default Search