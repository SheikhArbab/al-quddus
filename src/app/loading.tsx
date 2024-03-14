export default function Loading() {

    return (
        <main
            className="z-[99999999] fixed top-0 left-0 flex items-center overflow-hidden justify-center space-x-2 bg-gray-100 text-2xl font-bold inset-0">

            <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]" />
            <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]" />
            <div className="h-8 w-8 bg-black rounded-full animate-bounce" />

        </main>
    )
}