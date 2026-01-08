import Image from "next/image";
export default function ({ alignEnd, number, title, subtitle,images }) {
  
  return (
    <div className={`min-w-1/2 lg:min-w-auto flex-1 ${alignEnd ? "self-end" : "self-start"}  `}>
      {/* number */}
      <div className=" text-3xl md:text-5xl lg:text-6xl text-white font-bold">{number}</div>
      <div className="mt-2">
        {/* title */}
        <h5 className="text-white  md:text-xl lg:text-2xl">{title}</h5>
        <h6 className="text-white/40 text-xs md:text-sm lg:text-lg">{subtitle}</h6>
      </div>
      {/* decor */}
      <div className="h-[100px] relative b flex items-center  -mt-2 ">
        <div className={`flex ms-3 relative w-full flex items-center py-2 self-end`}>
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`image ${index}`}
              height={35}
              width={35}
              className={`ring-3 h-fit ${alignEnd ? 'rounded-md' : 'rounded-full'} ring-white -ms-3`}
            />
          ))}
          <div className="w-full h-0 border-b border-white/60 shadow "></div>
          <div className={`absolute h-[100px] w-[95%] border-r border-white/60 ${!alignEnd ? 'bottom-0' : 'top-0'} left-0`}></div>
          <div className="flex items-center absolute right-[5%] translate-x-1/2">
            <Image src='/images/Subtract.png' alt="subtract" width={12} height={12} className=""  />
          <Image src='/images/Subtract.png' alt="subtract" width={12} height={12} className="rotate-180"  />

          </div>
        </div>
        
      </div>
    </div>
  );
}
