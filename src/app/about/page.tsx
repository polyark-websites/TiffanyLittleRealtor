import { Dancing_Script, Montserrat } from "next/font/google"

const dancing_script = Dancing_Script({ subsets: ["latin"], weight:["400", "500", "700"] });
const montserrat = Montserrat({ subsets: ["latin"], weight:["400", "600", "800"] });

export default function About() {
  return (
    <div>
    <section className={`hero-bg text-white h-full z-0`}>
            <div className="flex justify-center items-center space-y-5 h-full p-10 pt-10 hero-text">
            </div>
        </section>
        <div className="mx-auto lg:w-[75%] xl:w-[50%]">
        <section className="flex flex-col justify-center items-center p-10">
            <h1 className={`text-3xl text-primary-light font-[600] ${dancing_script.className} pb-5 text-center md:text-5xl 4k:text-6xl 4k:pb-10`}>A <span className={`uppercase text-primary-dark ${montserrat.className} font-[800]`}>Little</span> about Tiffany...</h1>
            <div className="flex -mb-5 text-sm md:text-lg lg:text-xl 4k:text-2xl text-center">
                <div className="space-y-4">
                    <p>
                    I love helping people find what isn’t just a house but a place to call home.
                    Before my career as a REALTOR®, I worked with many forms of housing from luxury residential to tax credit
                    and HUD based rental properties.
                    </p>
                    <p className="">
                    As a former national trainer with <span className="italic">NeighborWorks America</span> and certification
                    in <span className="font-bold">Community Engagement</span> and <span className="font-bold">Resident Leadership</span>, I thrive on working and listening to my clients to ensure they
                    have a positive home buying experience.
                    </p>
                    <div className="mx-auto xl:w-[75%] xl:pb-4 xl:pt-4">
                        <img src="/about_me/little_family.jpg" alt="" className="w-full"/>
                    </div>
                    <p>
                    I am a native to Hampton Roads, and growing up on the Peninsula has 
                    allowed me to know my communities and witness the area grow and change. My family and I recently moved to Williamsburg, 
                    and we love the local restaurants, lush landscape and recreational opportunities unique to the area. In my spare time, 
                    I enjoy spending time with my family, curling up with a good book, traveling and volunteering with several organizations. 
                    </p>
                    <div className="mx-auto xl:w-[75%] xl:pb-4 xl:pt-4">
                        <img src="/about_me/little_family2.jpg" alt="" className="w-full"/>
                    </div>
                    <div className="bg-primary-dark mx-auto p-4 text-white md:w-[75%] lg:w-[50%] xl:w-[40%] 4k:w-[33%]">
                        <div className="pb-4">
                            <h6 className="font-bold ">I Love Williamsburg Because</h6>
                            <p>The friendly people, parks, and walking trails</p>
                        </div>
                        <div className="pb-4">
                            <h6 className="font-bold ">Favorite Restaurant</h6>
                            <p>Too many to choose just one</p>
                        </div>
                        <div className="pb-4">
                            <h6 className="font-bold ">Kids</h6>
                            <p>Two beautiful children</p>
                        </div>
                        <div className="pb-4">
                            <h6 className="font-bold ">On My Bucket List</h6>
                            <p>To travel to Italy</p>
                        </div>
                        <div className="pb-4">
                            <h6 className="font-bold ">Favorite Destination</h6>
                            <p>Anywhere with a beautiful beach</p>
                        </div>
                        <div className="">
                            <h6 className="font-bold ">Hobby</h6>
                            <p>Traveling and reading</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    </div>
  )
}
