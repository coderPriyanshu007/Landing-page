"use client"

import { useState } from "react"
import PricingCard from "./PricingCard";
export default function(){

    const [duration,setDuration] = useState('m'); //m-monthly y-yearly

   
    return <div className="mt-10">
        <div className="w-fit text-sm md:text-lg space-x-2 p-2.5 mx-auto text-white rounded-full bg-white/10">
            <button  onClick={()=>setDuration('m')} className={`${duration === 'm' ? 'bg-white/20': ''} px-8 py-1.5 rounded-full `}>
                Monthly
            </button>
             <button  onClick={()=>setDuration('y')} className={`${duration === 'y' ? 'bg-white/20': ''} px-8 py-1.5 rounded-full `}>
                Yearly
            </button>
        </div>
        <div className="space-y-4 py-4 mt-12 lg:flex items-center">
            <PricingCard duration={duration} monthlyPrice='17' yearlyPrice='149' title='Free' listItems={['20 design generation/month','Low-res downloads','Basic style presets','Limited customization options']} />
            <PricingCard duration={duration} monthlyPrice='29' yearlyPrice='299' title="Pro" pro={true} listItems={['Everything in Free','Enigma AI','Unlimited design generations','Custom Themes','High-resolution exports','Custom Extensions','Developer Tools']} />
            <PricingCard duration={duration} monthlyPrice='49' yearlyPrice='499' title="Team" listItems={['Everything in Free','Unlimited Shared Commands','Unlimited Shared Quicklinks','Priority support']} />
        </div>
    </div>
}