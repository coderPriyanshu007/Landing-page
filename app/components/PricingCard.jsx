import Link from "next/link";

export default function ({
  pro = false,
  href = "",
  title,
  listItems = ["Everything included in free"],
  duration = 'm',
  monthlyPrice ,
  yearlyPrice
}) {
  return (
    <div
      className={`w-full max-w-lg mx-auto  ${
        pro ? "bg-gradient-to-b from-[#FF7044] to-[#641800]" : ""
      } p-[3px]  rounded-xl`}
    >
      <div className="p-2   bg-[#1B1B1C]  rounded-xl">
        <div className="max-w-xs space-y-6 py-4  mx-auto">
          {/* type  */}
          <h4
            className={`  ${
              pro
                ? "text-[#FF541F] text-3xl md:text-4xl  font-semibold"
                : "text-white text-xl md:text-2xl"
            }`}
          >
            {title}
          </h4>

          {/* description */}
          <p className=" text-sm md:text-base lg:text-lg text-white/70">
            Unlock a new level of your personal productivity
          </p>

          {/* pricing */}

          <div className="flex gap-2 ">
            <div className="text-white text-4xl font-bold">{duration === 'm' ? monthlyPrice : yearlyPrice}</div>
            <div className="text-white/70 py-1">
              / {duration==='m' ? 'Monthly' : 'Yearly'}{" "}
              <span className="px-2 font-semibold text-xs ms-2 py-1 bg-[#FF541F] rounded-full">
                -20%
              </span>
            </div>
          </div>

          {/* divider */}
          <div className="h-[1.5px] w-full bg-gradient-to-r from-white/0 via-white/20 to-white/0">
            .
          </div>

          <p className="text-sm md:text-base lg:text-lg text-white/70">What's included?</p>
          <ul className="text-white/70 text-sm md:text-base lg:text-lg">
            {listItems.map((item, index) => (
              <li key={item} className=" flex gap-4 mb-3 items-center">
                <div className={`${pro ? 'bg-[#FF541F] text-black' : 'border-white border'} w-4 h-4 flex items-center justify-center rounded-full`}>
                  &#10003;
                </div>
                {item}
              </li>
            ))}
          </ul>

          <button
            className=" relative
                        flex items-center gap-2
                        px-6 py-1
                        rounded-md
                        mx-auto
                        text-white text-sm lg:text-base 

                        bg-black/50
                        backdrop-blur-[20px]

                        border-1 border-white/20
                    
                        shadow-[0_10px_10px_rgba(0,0,0,0.10)]
                        shadow-[0_4px_4px_rgba(0,0,0,0.05)]
                        shadow-[0_1px_0_rgba(0,0,0,0.05)]

                        before:absolute before:inset-0
                        before:rounded-full
                        before:bg-red-600/20
                        before:blur-xl
                        before:-z-10
                        before:p-4
  "
          >
            <Link href={href}>Subscribe</Link>
            <span className="text-2xl md:text-3xl">›</span>
          </button>
        </div>
      </div>
    </div>
  );
}
