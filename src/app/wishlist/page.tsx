import Image from "next/image";

export default function Wishlist() {
  return (
    <main className="text-4xl font-bold text-center w-full h-fit">
      {
        [].length > 0 ? <div>





        </div> : <div className="h-screen w-full flex items-center justify-center flex-col gap-8">


          <h1 className="text-2xl md:text-3xl lg:text-5xl capitalize">my wishlist</h1>


          <Image src={'/empty.png'} alt="empty" width={450} height={450} />

        </div>
      }
    </main>
  );
}
