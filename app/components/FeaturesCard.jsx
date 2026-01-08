import Link from "next/link";
import Image from "next/image";
export default function ({ href, title, desc, gradient }) {
 
  
  return (
    <Link href="">
      <div
        
        className={` ${gradient? 'bg-gradient-to-tl  from-[#FF541F]/20 from-1%  via-white/2  to-white/2  ': 'ring-2 ring-[#FF541F]/20 ring-inset'} p-4 h-52  bg-[#272829B2]  flex flex-col justify-between rounded-xl `}
      >
        <div className="flex  gap-4 justify-between h-full">
          <p className="text-xs md:text-sm lg:text-lg  text-white/70 max-w-xl">
          {desc}
          </p>

          <div className="bg-[#FF541F] min-w-[50px]  h-[50px] flex items-center justify-center rounded-full">
            <Image src="/images/Image.png" alt="arrow" width={30} height={30} />
          </div>
        </div>

        <p className="text-lg md:text-xl lg:text-3xl   mb-4">{title}</p>
      </div>
    </Link>
  );
}
