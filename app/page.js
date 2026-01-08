import Features from "./components/Features";
import Hero from "./components/Hero";
import Image from "next/image";
import Stats from "./components/Stats";
import MileStones from "./components/MileStones";
import Plans from "./components/Plans";
import Link from "next/link";
import Accordian from "./components/Accordian";
import {ArrowRight}  from 'lucide-react'
export default function Home() {
  return (
    <div className="flex min-h-screen  items-center justify-center bg-black font-sans ">
        <img
        src="/images/HeroBackground.png"
        alt="hero background"
        className="w-full absolute top-0    min-h-screen"
      />
      <main className="flex overflow-hidden z-10   min-h-screen w-full   flex-col items-center justify-between   sm:items-start">
        
        
          {/* Hero section */}
          <section className="w-full">
            <Hero />
          </section>

          {/* stats */}
          <section className=" w-full py-16 mt-5 bg-linear-to-t from-black from-50% to-transparent">
            <Stats />
          </section>

          

         
          {/* features section */}
          <section className="w-full bg-black">
            <Features />
          </section>



          {/* Portfolio section */}
          <section className="w-full mt-24">
            <div className="max-w-7xl px-4 md:px-6 lg:px-8 xl:px-2  mx-auto">
              <div className="max-w-4xl mx-auto flex flex-col lg:flex-row lg:gap-4  ">
                <div className="text-white/60">2025</div>
                <p className="text-white font-semibold lg:text-2xl">
                  Whether you're designing for personal projects, creative
                  teams, or large-scale campaigns, our AI-powered platform is
                  built to bring your ideas to life—quickly, beautifully, and
                  intelligently.And the results? The numbers speak for
                  themselves:
                </p>
              </div>

              <div className=" w-full flex flex-col lg:flex-row lg:min-h-[300px] gap-8  my-12 lg:my-24">
                <MileStones
                  images={[
                    "/images/avatar/1.png",
                    "/images/avatar/2.png",
                    "/images/avatar/3.png",
                  ]}
                  number="2014"
                  title="Year of establishment"
                  subtitle="More than 10 years in the field"
                />
                <MileStones
                  images={[
                    "/images/portfolio/1.png",
                    "/images/portfolio/2.png",
                    "/images/portfolio/3.png",
                  ]}
                  number="304"
                  title="Projects are launched"
                  subtitle="A lot of projects are done"
                  alignEnd={true}
                />
                <MileStones
                  images={[
                    "/images/avatar/1.png",
                    "/images/avatar/2.png",
                    "/images/avatar/3.png",
                  ]}
                  number="189"
                  title="Clients are satisfied"
                  subtitle="These people love us"
                />
                <MileStones
                  images={[
                    "/images/portfolio/1.png",
                    "/images/portfolio/2.png",
                    "/images/portfolio/3.png",
                  ]}
                  number="12"
                  title="Projects in work"
                  subtitle="What we do right now"
                  alignEnd={true}
                />
              </div>
              <div className=" flex py-8 justify-center">
                <Link href="">
                  <button className="flex text-sm md:text-base lg:text-lg  gap-2 text-white items-center jusity-center px-6 py-2 rounded-lg bg-[#FF541F]">
                    Get Started
                    <ArrowRight className="w-6" />
                  </button>
                </Link>
                <Link href="">
                  <button className="flex text-sm md:text-base lg:text-lg px-6 py-2 text-white/50 items-center gap-2">
                    Slots are available
                    <span className="w-2 rounded-full block h-2 bg-green-500"></span>
                  </button>
                </Link>
              </div>
            </div>
          </section>

          {/* plans section */}
          <section className="w-full relative mt-20">
            <div className="md:w-[90%] w-full -top-100 md:top-0 absolute h-full -z-10 opacity-60 ">
              {/* layer 1 gradient from l */}
              <div className="absolute hidden md:block inset-0 bg-gradient-to-r from-transparent from-90% to-black   z-10"></div>
              {/* gradient from b */}
              <div className="absolute w-full bottom-0 z-10 h-[30%] bottom-0 bg-gradient-to-b from-transparent from-80%  to-black  "></div>
              <Image
                src="/images/plansBackground.png"
                alt="Plans background"
                fill
                className="object-cover "
              />
            </div>
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-2 space-y-4">
              <div className="text-center space-y-2 lg:space-y-4 ">
                <h1 className="text-4xl text-white font-bold md:text-5xl lg:text-6xl">
                  Choose The Plan
                </h1>
                <h1 className="text-4xl text-white font-bold md:text-5xl lg:text-6xl">
                  That's Right For You
                </h1>
                <p className="text-white/80 text-sm md:text-base lg:text-lg max-w-4xl mx-auto">
                  Giving you access to essential features and over 1,000
                  creative tools. Upgrade to the Pro Plan to unlock powerful AI
                  capabilities, cloud syncing, and a whole new level of creative
                  freedom.
                </p>
              </div>
              <Plans />
            </div>
          </section>


          {/* FAQ */}
          <section className="w-full relative    lg lg:bg-transparent   pt-20">
            {/* angular gradient */}
            <div className=" size-150 md:size-250 lg:size-300 absolute top-100 right-0 translate-x-[20%] rounded-full blur-[200px] bg-conic from-[#FA5424] via-[#C22C00] via-[#982300] to-[#FA5424] -z-10 opacity-20 ">

            </div>

            {/* rounded rectangle */}
            <div className="w-30 lg:w-40 h-60 lg:h-80 absolute -z-10 top-0 -translate-x-2/3 lg:-translate-x-1/2 border-[#FF9777]  border-20 rounded-full"></div>
            {/* white rounded rectangle */}
            <div className="w-60 h-30 lg:w-100 lg:h-50 absolute -z-10 top-125 -translate-x-4/5 lg:-translate-x-1/2 border-white border-20 rounded-full"></div>
            {/* orange circle */}
            <div className="size-60 lg:size-100 border-20 rounded-full border-orange-600 -z-10 absolute top-48 right-0 translate-x-5/6 lg:translate-x-1/2"></div>

            <div className="max-w-7xl relative mx-auto px-4 md:px-6  lg:px-8">
              {/* header */}
              <div className="text-center max-w-3xl mx-auto space-y-4 lg:space-y-6">
                <h1 className="text-3xl   text-white font-bold md:text-4xl lg:text-6xl">
                  Frequently Asked Questions
                </h1>
                <p className="text-sm md:text-base lg:text-lg mx-auto text-[#D9D9D9]">
                  Got questions? We've got answers. Find everything you need to
                  know about using our platform, plans, and features.
                </p>
              </div>
              <div className="mt-12 md:mt-20 max-w-4xl mb-20 mx-auto ">
                <Accordian title="What is this platform used for?">
                  <p className="text-[#919191]">
                    It’s an AI-powered design assistant that helps you generate,
                    customize, and export creative assets in seconds—whether for
                    personal projects, brand work, or commercial use.
                  </p>
                </Accordian>
                <Accordian title="What is this platform used for?">
                  <p className="text-[#919191]">
                    It’s an AI-powered design assistant that helps you generate,
                    customize, and export creative assets in seconds—whether for
                    personal projects, brand work, or commercial use.
                  </p>
                </Accordian>
                <Accordian title="What is this platform used for?">
                  <p className="text-[#919191]">
                    It’s an AI-powered design assistant that helps you generate,
                    customize, and export creative assets in seconds—whether for
                    personal projects, brand work, or commercial use.
                  </p>
                </Accordian>
                <Accordian title="What is this platform used for?">
                  <p className="text-[#919191]">
                    It’s an AI-powered design assistant that helps you generate,
                    customize, and export creative assets in seconds—whether for
                    personal projects, brand work, or commercial use.
                  </p>
                </Accordian>
              </div>
            </div>
           
          </section>

          {/* CTA section */}
          <section className="w-full relative my-10">
            {/* lines rotated to 45deg from right */}
            <div className=" absolute top-1/2 w-full  h-10  rotate-45 origin-right bg-gradient-to-l from-white/6 via-white/10 to-transparent -z-10"></div>
            <div className=" absolute bottom-0 w-full  h-10 rotate-45 origin-right bg-gradient-to-l from-white/6 via-white/10 to-transparent -z-10 "></div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
              <div className="border relative backdrop-blur-[2px] max-w-6xl rounded-3xl mx-auto border-white/20 space-y-4 lg:space-y-8 py-10 lg:py-20 ">
                {/* overlay */}
                <div
                  style={{
                    backgroundImage: "url(/images/ctaBackground.png)",
                    backgroundSize: "5%",
                  }}
                  className="absolute h-full opacity-15 -z-20  inset-0 "
                ></div>
                {/* radial gradient */}
                <div
                  className=" absolute inset-0 -z-10  mix-blend-screen w-full "
                  style={{
                    background:
                      "radial-gradient(50% 100% at 50% -20% , rgba(255, 255, 255, 0.4) 7.35%, rgba(255, 84, 31, 0.32) 24.23%, rgba(247, 175, 153, 0.4) 36%, rgba(255, 84, 31, 0.4) 49.99%, rgba(0, 0, 0, 0) 100%)",
                  }}
                ></div>

                <h4 className="text-4xl md:text-5xl lg:text-6xl text-white  font-bold">
                  Ready to design smarter?
                </h4>
                <p className="text-white/80 max-w-2xl md:text-base mx-auto">
                  Whether you're a freelancer, a team, or a growing agency—our
                  tools adapt to your workflow. Design faster. Deliver better.
                </p>
                <div className="flex justify-center">
                  <Link href="">
                    <button className="flex text-sm md:text-base lg:text-lg  gap-2 text-white items-center jusity-center px-6 py-2 rounded-lg bg-[#FF541F]">
                      Get Started
                      <img
                        src="/images/Vector.png"
                        className="w-4 h-3 md:w-6 md:h-4"
                      />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
           
        
      </main>
    </div>
  );
}
