import Link from "next/link"

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-3xl xs:text-5xl">Unfortunately...</h2>
            <p className="mt-3 text-xl xs:text-2xl text-gray-600 dark:text-gray-400">
                Page is not found :(
            </p>
            <Link href="/" className="text-md cursor-pointer mt-5">
                <p className="underline">return to the main page</p>
            </Link>
        </div>
    )
}

export default NotFound
