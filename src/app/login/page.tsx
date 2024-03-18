import Image from "next/image";
import Link from "next/link";
import { GoogleLogin } from "@/components/index"  


export default function Login() {
  return (
    <main className="fixed inset-0 z-[999999] bg-gray-100 overflow-x-hidden overflow-y-auto flex items-center justify-center">
    <div className="relative py-3 w-[95%]  md:w-[500px] ">
      <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
        <div className="max-w-md mx-auto">
          <Link href={'/'} className="relative w-32 mx-auto h-32 block">
           <Image src={'/al-quddus.png'} className="top-0 w-full h-full object-contain left-0" alt="al-quddus" fill />
          </Link>
          <div className="mt-5">
            <label
              className="font-semibold text-sm text-gray-600 pb-1 block"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              type="text"
              id="fullName"
            />
            <label
              className="font-semibold text-sm text-gray-600 pb-1 block"
              htmlFor="login"
            >
              E-mail
            </label>
            <input
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              type="text"
              id="login"
            />
            <label
              className="font-semibold text-sm text-gray-600 pb-1 block"
              htmlFor="number"
            >
              Phone
            </label>
            <input
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              type="number"
              id="number"
            />
            <label
              className="font-semibold text-sm text-gray-600 pb-1 block"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              type="password"
              id="password"
            />
          </div>
          
          <div className="flex justify-center w-full items-center">
            <div className="w-full">
            <GoogleLogin />
            </div>
          </div>
          <div className="mt-5">
            <button
              className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              type="submit"
            >
              Sign Up
            </button>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
            <Link
              className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
              href="/login"
            >
              or login
            </Link>
            <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4" />
          </div>
        </div>
      </div>
    </div>

  </main>
  );
}
