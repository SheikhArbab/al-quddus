import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
  return (
    <button className="flex items-center justify-center py-2  bg-white hover:bg-gray-200 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-700 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">
    <FcGoogle />
      <span className="ml-2 text-xs md:text-sm">Sign in with Google</span>
    </button> 
  )
}

export default GoogleLogin