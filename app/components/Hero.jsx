import PrimaryButton from "./PrimaryButton";
import TrustedBadge from "./TrustedBadge";

export default function () {
  return (
    <div className="px-4 md:px-8  w-full mt-20 lg:mt-40 max-w-7xl mx-auto z-20 flex items-center justify-center">
      <div className=" w-full  max-w-5xl mx-auto text-white  text-center   space-y-4">
        {/* Happy clients sub section */}
        <TrustedBadge />

        {/* heading */}
        <div>
          <p className="text-4xl lg:text-7xl font-bold">
          Automate <span className="text-[#FF541F]">Intelligence</span>.
        </p>
        <p className="text-4xl  lg:text-7xl font-bold">Accelerate Growth.</p>
        </div>

        {/* description */}
        <p className="max-w-xl mx-auto text-sm md:text-lg text-white/70">
          Our AI-powered SaaS platform empowers businesses to streamline
          operations, automate repetitive tasks, and make smarter, data-driven
          decisions—all from one intuitive dashboard.
        </p>

        {/* links */}
        <div className="  flex items-center justify-center gap-4">
          <PrimaryButton  href='' name="Get Started" />
          
          <a href="">
            <button className="ring-1 text-sm md:text-base lg:text-lg ring-[#FCFCFC]/23 ring-inset hover:bg-white/10  px-6 py-2  rounded-md">
              See Details
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
