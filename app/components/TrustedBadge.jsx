import Image from "next/image"
import AvatarGroup from "./AvatarGroup"
export default function(){
    return <div className=" flex items-center justify-center gap-2 md:gap-4 mx-auto w-fit border-white/10 border px-4 py-2 md:px-6 md:py-4 rounded-full bg-gradient-to-r from-[#FF541F]/13 to-[#FF541F]/4">
        <AvatarGroup />
       <div>
         <div className="flex  gap-[0.7] md:gap-[0.9]">
            {
                Array.from({length:5}).map((_,index)=>(
                    <div key={index} className="size-3 md:size-4 relative">
                        <Image src='/images/SVG.png' alt="star" fill />
                    </div>
                ))
            }
        </div>
        <div className="text-xs md:text-sm lg:text-base mt-1 text-white/50">
            150+ Happy Clients
        </div>
       </div>
    </div>
}