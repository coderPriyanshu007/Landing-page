"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { XCircle } from "lucide-react";
export default function(){

  const [open,setOpen] = useState(true);
    return <>
       <button onClick={()=> setOpen(!open)} className=" lg:hidden rounded-md  backdrop-blur-sm p-1.5  hover:bg-white/10  flex items-center justify-center">
                
                  <Image 
                  src="/images/ham-menu.svg"
                  alt="hamburger menu"
                  width={25}
                  height={20}
                  className="object-cover "
                />
                
               
              </button>
              
                  <ul  className={`w-full fixed inset-y-0 min-h-screen ${open ? 'opacity-100 translate-x-[0]' : 'opacity-0 translate-x-full'}  absolute transition duration-700 ease-in-out   right-0 top-0  bg-black  p-4 `}>
                    <li  className="w-full mt-4 flex items-center justify-end "><button onClick={()=>setOpen(false)} className="ms-auto" ><XCircle  /></button></li>
                  <li  className=" border-white/10 py-2 border-b hover:bg-black/70 " >
                    <Link href='/' className=" block w-full ">
                      Home
                    </Link>
                  </li>
                  <li className=" border-white/10 py-2 border-b hover:bg-black/70  " >
                    <Link href='/' className=" block w-full ">
                      Home
                    </Link>
                  </li>
                  <li className=" border-white/10 py-2 border-b hover:bg-black/70 " >
                    <Link href='/' className=" block w-full ">
                      Home
                    </Link>
                  </li>
                  <li className=" border-white/10 py-2 border-b hover:bg-black/70 " >
                    <Link href='/' className=" block w-full ">
                      Home
                    </Link>
                  </li>
                  
                </ul>
               
    </>
}