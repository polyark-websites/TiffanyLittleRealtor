import { Dancing_Script, Montserrat } from "next/font/google"
import Testimonial from "../components/Testimonial";

const dancing_script = Dancing_Script({ subsets: ["latin"], weight:["400", "500", "700"] });
const montserrat = Montserrat({ subsets: ["latin"], weight:["400", "600", "800"] });

const testimonials1: any[] = [
    { 
        text: `Tiffany was extremely professional. She kept me updated every step and answered my text and emails promptly. I had a problem 
        tenant and she made sure that they didn’t interfere with showing and selling my house. I would use her again definitely.`, 
        name: "Catherine S."
    },
    { 
        text: `Tiffany was very responsive. She was very informative to any questions we had during the home search and purchase process. 
        My wife and I were very specific in the area and type of home that we were looking for and Tiffany worked showed a lot of persistence in showing 
        50+ homes over a few months until we found the right one.`, 
        name: "Jorrell Williams"
    },
    { 
        text: `Tiffany was superb. She helped sell our house quickly and at a very good price. Every part of the selling process was 
        professionally, efficiently, and effectively handled. From the moment we engaged her we felt her to be on “our side,” so we were fully confident 
        that she was doing the best for us. I would recommend Tiffany without hesitation.`, 
        name: "Michael Rainsborough"
    },
    { 
        text: `Tiffany went above and beyond in helping my family find a home to lease. We were out of state and she used some great tools 
        to show us homes virtually and is extremely knowledgeable of the area and neighborhoods.`, 
        name: "Aubrey George"
    },
]

const testimonials2: any[] = [
    { 
        text: `Tiffany has a great personality and a kind spirit. I need to have some repairs done to my home. She was knowledgeable in finding 
        a reasonable contractor for the repairs to my home. Tiffany reminded me to contact my insurance company that payed a large part of the repairs 
        thanks to her quick thinking.`, 
        name: "Tonya Robinson"
    },
    { 
        text: `When we finally chose a agent, Tiffany was the obvious choice. Tiffany contacted us while we were doing a FSBO campaign. She 
        offered to do a free market analysis and kept checking to see how our sale was going.`, 
        name: "James Sanders"
    },
    { 
        text: `Tiffany Little sold my home for me and was a huge help during every step of the process. From the very beginning she provided me a sheet 
        with comps and what my house was worth. When I had an issue come up on the inspection she reached out to multiple contractors on my behalf and made 
        sure I got the best deal. We got over asking and she made sure the entire process was seamless. I will gladly work with Tiffany again and highly 
        recommend her. She made this process easy.`, 
        name: "Ruth Faulk"
    },
    { 
        text: `Tiffany was great to work with in purchasing a home. She was very responsive And informative to any questions we had during the home search and purchase process.`, 
        name: "Melvin Williams"
    },
]

export default function Clients() {
  return (
    <div>
        <section className={`hero-bg text-white h-full z-0`}>
            <div className="flex justify-center items-center space-y-5 h-full p-10 pt-24 hero-text">
            </div>
        </section>
        <section className="flex flex-col justify-center items-center p-10">
            <h1 className={`text-2xl text-primary-light font-[600] ${dancing_script.className} pb-5`}>A <span className={`uppercase text-primary-dark ${montserrat.className} font-[800]`}>Little</span> praise...</h1>
            <div className="flex -mb-5 text-sm">
                <div className="flex flex-col space-y-4 text-justify">
                    <div className="text-center pb-6">
                        <img src="clients/jones.png" alt="Jones family getting their new house" className="h-full pb-2"/>
                        <p className="italic text-xs">Jones family getting their new house</p>
                    </div>
                    {
                        testimonials1.map((testimonial, i) => (
                            <div>
                                <Testimonial text={testimonial.text} name={testimonial.name} key={`${testimonial.name}-${i}`}/>
                            </div>
                        ))
                    }
                    <div className="text-center pb-6">
                        <img src="clients/stradtner.png" alt="Stradtner family happily moving in" className="h-full pb-2"/>
                        <p className="italic text-xs">Stradtner family happily moving in</p>
                    </div>
                    {
                        testimonials2.map((testimonial, i) => (
                            <div>
                                <Testimonial text={testimonial.text} name={testimonial.name} key={`${testimonial.name}-${i}`}/>
                            </div>
                        ))
                    }
                    </div>
                </div>
        </section>
    </div>
  )
}
