// Williamsburg, New Kent, Toano, West Point, King & Queen County, Charles City, Prince George County, Chesterfield, Chester, Richmond, Yorktown, Poquoson,
// Newport News, Hampton, Gloucester, Norfolk, Virginia Beach, Chesapeake, Isle of Wight, Suffolk, Surry

import Image from "next/image"

interface AreasServedFormat {
    place: string,
    image: string
}

const areasServed: AreasServedFormat[] = [
    { place: "Williamsburg", image: "/areas_served/williamsburg.png"},
    { place: "Richmond", image: "/areas_served/richmond.png"},
    { place: "Yorktown", image: "/areas_served/yorktown.png"},
    { place: "Gloucester", image: "/areas_served/gloucester.png"},
    { place: "Norfolk", image: "/areas_served/norfolk.png"},
    { place: "Virginia Beach", image: "/areas_served/v_beach.png"},
]

const areasExcess: AreasServedFormat[] = [
    { place: "New Kent", image: "/areas_served/williamsburg.png"},
    { place: "Toano", image: "/areas_served/williamsburg.png"},
    { place: "West Point", image: "/areas_served/williamsburg.png"},
    { place: "King & Queen County", image: "/areas_served/williamsburg.png"},
    { place: "Charles City", image: "/areas_served/williamsburg.png"},
    { place: "Prince George County", image: "/areas_served/williamsburg.png"},
    { place: "Chesterfield", image: "/areas_served/williamsburg.png"},
    { place: "Chester", image: "/areas_served/williamsburg.png"},
    { place: "Poquoson", image: "/areas_served/williamsburg.png"},
    { place: "Newport News", image: "/areas_served/williamsburg.png"},
    { place: "Hampton", image: "/areas_served/williamsburg.png"},
    { place: "Chesapeake", image: "/areas_served/williamsburg.png"},
    { place: "Isle of Wight", image: "/areas_served/williamsburg.png"},
    { place: "Suffolk", image: "/areas_served/williamsburg.png"},
    { place: "Surry", image: "/areas_served/williamsburg.png"},
]

export default function AreasServed() {
  return (
    <div>
        <section className='hero-bg text-white h-full z-0'>
            <div className="flex justify-center items-center space-y-5 h-full p-10 pt-24 hero-text">
                <h1 className="text-2xl font-[600] uppercase">Areas Served</h1>
            </div>
        </section>
        <section className="bg-white text-primary-dark p-10">
            <div className="grid grid-cols-2 gap-6 justify-items-center pb-10">
                {areasServed.map((area) => (
                    <div key={area.place} className="flex flex-col items-center">
                        <h3 className="uppercase font-bold">{area.place}</h3>
                        <Image 
                            src={area.image}
                            alt={area.place}
                            height={150}
                            width={150}
                        />
                    </div>
                ))}
            </div>
            <div >
                <h3 className="font-bold pb-2">Also serving</h3>
                <div className="flex flex-wrap -mx-2">
                    {areasExcess.map((area, i) => (
                        <div key={`${area.place}-${i}`} className="flex items-center w-1/2 px-2 py-1">
                            <div className="w-4 h-4 flex justify-center items-center">
                                <span className="block rounded-full bg-black w-2 h-2"></span>
                            </div>
                            <div className="text-left pl-2 text-xs">{area.place}</div>
                        </div>
                    ))}
                </div>
            <div className="pt-4">
                <h3 className="font-bold pb-2 text-primary-dark">Don’t see an area you're interested in? <span className="text-black">I can still help.</span> </h3>
                <p> My brokerage is a member of <a target="_blank" href="https://www.leadingre.com/" className="font-bold italic hover:underline">LeadingRe</a> which can connect you with an agent around the world.</p>
                <p></p>
            </div>
        </div>
        </section>
    </div>
  )
}
