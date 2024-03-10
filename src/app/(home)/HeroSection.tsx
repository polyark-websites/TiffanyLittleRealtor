'use client'

import Button from "../components/Button"
import { scrollToSection } from "../components/utils"

export default function HeroSection() {
    return(
      // Main Hero BG
      <div className='hero-bg text-white z-0'>
          <div className="mx-auto w-[90%] h-[50vh] md:h-[50vh] lg:h-[66vh] lg:w-[90%]">
            <div className="flex flex-col justify-center space-y-5 h-full p-4 hero-text">
              <h1 className="text-2xl font-[600] uppercase md:text-4xl 4k:text-6xl">Your Home, My Mission</h1>
              <p className="text-lg lg:pb-8 md:text-xl 4k:text-3xl">Constantly evolving with the market to deliver unparalleled value and insight for your home journey!</p>
              <Button text="Let's Connect" className="text-[.65rem] px-4 py-3 md:text-lg lg:text-base lg:w-1/4 4k:text-2xl" invert={false} onClick={() => scrollToSection('#contact')}/>
            </div>
        </div>
      </div>

    )
  }