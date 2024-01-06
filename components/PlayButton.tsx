import React from "react";
import { IoPlay } from "react-icons/io5";
import { useRouter } from "next/router.js";


interface MovieCardProps {
    movieId: string
}

const PlayButton: React.FC<MovieCardProps> = ({ movieId }) => {
    const router = useRouter()
    return (
        <div className="bg-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row item-center hover:bg-neutral-300 transition " onClick={() => router.push(`/watch/${movieId}`)}>
            <IoPlay className="mr-1" size={25} />
            Play
        </div>
    )
}


export default PlayButton