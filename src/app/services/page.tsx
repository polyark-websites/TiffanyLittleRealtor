import { BanknotesIcon, HomeIcon, TruckIcon } from '@heroicons/react/24/solid'
import React from 'react'

const services: any[] = [
    {
        icon: HomeIcon,
        headline: "Buying",
        text: "Embark on your home-buying journey with me:",
        list: [
            { heading: "Personalized Search", subtitle: "Tailored property matches to meet your specific needs."},
            { heading: "Exclusive Viewings", subtitle: ""},
            { heading: "Seamless Process", subtitle: ""},
        ],
        dark: true
    },
    {
        icon: BanknotesIcon,
        headline: "Selling",
        text: "Maximize your home’s potential with my selling expertise:",
        list: [
            { heading: "Expert Valuation", subtitle: ""},
            { heading: "Targeted Marketing", subtitle: ""},
            { heading: "Negotiation Skill", subtitle: ""},
        ],
        dark: false
    },
]

function ServiceSection({ icon: Icon, headline, text, list, dark }: { icon: any, headline: string, text: string, list: any[], dark: boolean })
{
    const className = dark ? "bg-primary-dark text-white" : "bg-white text-primary-dark"
    return(
        <div className={`${className} p-10`}>
            <div className="flex flex-col items-center pb-2">
                {Icon && <Icon className="h-[40px] md:h-[80px]" />}
                <h3 className="text-base md:text-lg">{headline}</h3>
            </div>
            <p className="text-sm pb-2">{text}</p>
            <ul className='list-disc pl-10 pr-10 text-sm space-y-2'>
                {
                    list.map((item, i) => (
                        <li key={`${item.heading}-${i}`}>
                            <h6 className="font-bold">{item.heading}</h6>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default function Services() {
  return (
    <div>
        <section className={`hero-bg text-white h-full z-0`}>
            <div className="flex justify-center items-center space-y-5 h-full p-10 pt-24 hero-text">
                <h1 className="text-2xl font-[600] uppercase">Services</h1>
            </div>
        </section>
        <section className="p-10 space-y-4 -mb-4 pb-4">
            <p className="text-md">I am dedicated to guiding you through every step of your real estate journey with expertise and care.</p>
            <div className="flex flex-col pb-2 space-y-10">
            </div>
        </section>
        {
            services.map((service, i) => (
                <ServiceSection icon={service.icon} headline={service.headline} text={service.text} list={service.list} key={`${service.text}-${i}`} dark={i%2===0}/>
            ))
        }
        <div className="bg-primary-dark text-white p-10">
            <div className="flex flex-col items-center pb-2">
                <TruckIcon className="h-[40px] md:h-[80px]" />
                <h3 className="text-base md:text-lg">Relocation</h3>
            </div>
            <p className="text-sm pb-2">As a certified Relocation Specialist, I yearn to offer unparalleled support for a stress-free move:</p>
            <ul className='list-disc pl-10 pr-10 text-sm space-y-2'>
                <li>
                    <h6 className="font-bold">Certification</h6>
                    <p className="text-xs">Pursuing the <span className="italic">Certified Relocation Professional (CRP®)</span> designation for top-tier relocation services.</p>
                </li>
                <li>
                    <h6 className="font-bold">Comprehensive Assistance</h6>
                    <ul className="list-disc pl-4 text-xs space-y-1">
                        <li>Fast and efficient selling process.</li>
                        <li>Assistance in finding your ideal home in a new area.</li>
                        <li>Detailed local insights and connections to trusted agents.</li>
                    </ul>
                </li>
                <li>
                    <h6 className="font-bold">Tailored Relocation Services</h6>
                    <ul className="list-disc pl-4 text-xs space-y-1">
                        <li>Coordination of packing and moving services.</li>
                        <li>Tours and orientation in your new community.</li>
                        <li>Connections to essential local services and amenities (schools, childcare, etc.).</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
  )
}
