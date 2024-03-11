import { HomeIcon, BanknotesIcon, TruckIcon } from "@heroicons/react/24/solid";
import Button from "../components/Button";
import Image from "next/image";
import Tiffany from "../../../public/about_me.png"
import VideoSection from "./VideoSection";
import { GoogleReview, formatReview, getGoogleReviews } from "./reviews";
import ReviewCarousel from "../components/ReviewCarousel";
import HeroSection from "./HeroSection";
import Link from "next/link";

function AboutSection() {
  return(
    <div className="bg-white">
      <div className='mx-auto h-full w-[80%] pt-10 pb-10 lg:w-[90vw] xl:w-[66%] 4k:pt-20'>
        {/* Flex Col Text*/}
          <div className="flex justify-center flex-wrap w-full lg:space-x-10 lg:flex-nowrap lg:items-center 4k:items-start">
            {/* Text */}
              <div className="text-primary-dark xl:flex xl:flex-col xl:space-y-4 4k:text-3xl">
                {/* Title */}
                <h2 className="uppercase font-bold text-xs pb-2 md:text-lg xl:text-2xl 4k:text-4xl">About me</h2>
                <h3 className='text-2xl font-bold pb-4 md:text-3xl xl:text-4xl 4k:text-6xl'>Welcome to my world</h3>
                {/* About Section   */}
                <div className="text-sm text-justify md:text-lg xl:text-xl 4k:text-2xl">
                  <p className='pb-4'>I'm Tiffany Little! Hailing from the heart of Hampton Roads, Virginia, I grew up immersed in the local community. My academic journey fortified my passion for real estate, blending local insights with a solid educational foundation.</p>
                  <p className='pb-8 xl:pb-24'>Embarking on my real estate career, I quickly found my calling. With each client, I strive to transform the dream of homeownership into reality, leveraging my local expertise and dedicated service.</p>
                </div>
                {/* Button visible on large and higher */}
                <div className="hidden justify-center lg:flex lg:visible">
                  <Link href="/about">
                      <Button text="There's more" className="text-[.65rem] w-[75vw] px-4 py-3 mb-0 md:text-base lg:w-[33vw] xl:w-[22vw] 4k:text-3xl"  invert={false}/>
                  </Link>
                </div>
              </div>
              {/* Image of Tiffany */}
              <Image 
              src={Tiffany}
              alt="Tiffany Little"
              className="drop-shadow-2xl mb-10 w-[90%] lg:w-[50%]"
              />
          </div>
          {/* Button visible on med and smaller */}
          <div className="flex justify-center lg:hidden">
            <Link href="/about">
                <Button text="There's more" className="text-[.65rem] w-[75vw] px-4 py-3 mb-0 md:text-base lg:w-[25%]"  invert={false}/>
            </Link>
          </div>
        </div>
      </div>
  )
}

function ServicesSection() {
  return(
    <div className='p-6 services-bg -mb-1'>
        <div className="flex flex-col text-white items-center">
        <h2 className="uppercase font-bold text-md pb-6 md:text-2xl md:pb-6 4k:pb-10 4k:text-4xl">Services</h2>
        {/* Flex parent */}
        <div className="flex justify-center pb-2 w-full space-x-10 md:space-x-32 xl:space-x-40">
          {/* Home Icon */}
          <div className="flex flex-col items-center">
            <HomeIcon className="h-[40px] md:h-[80px] xl:h-[100px]"/>
            <h3 className="text-base md:text-lg">Buying</h3>
          </div>
          {/* Money Icon */}
          <div className="flex flex-col items-center md:pb-6 xl:pb-12">
            <BanknotesIcon className="h-[40px] md:h-[80px] xl:h-[100px]" /> 
            <h3 className="text-base md:text-lg">Selling</h3>
          </div>
        </div>
        {/* Truck Icon */}
          <div className="flex flex-col items-center pb-6 md:pb-14">
            <TruckIcon className="h-[40px] md:h-[80px] xl:h-[100px]"/>
            <h3 className="text-base md:text-lg">Relocation</h3>
          </div>
        <Link href="/services">
        <Button text="Learn More" className="mb-8 text-base w-full px-3.5 py-2 md:text-xl lg:w-full md:px-10 md:py-4" invert={true}/>
        </Link>
      </div>
    </div>
  )
}

const placeId = 'ChIJKd06kWWLsIkRLg0tOyeV9Yg'
async function ReviewsSection() {
  const reviews: any[] = await getGoogleReviews(placeId);
  const formattedReviews: GoogleReview[] = []
  if(reviews && reviews.length > 0) 
  {
    reviews.map(review => {
      formattedReviews.push(formatReview(review));
    });
  }
  return(
    <div className="h-full w-full p-10 text-white -mb-1 bg-primary-dark">
      <div className="mx-auto flex flex-col items-center justify-center pb-10 md:w-3/4 lg:w-[50%] xl:w-[33%]">
        <h6 className="uppercase font-bold text-md md:text-2xl 4k:text-4xl">Reviews</h6>
        {
          formattedReviews && formattedReviews.length > 0 ? (
            <ReviewCarousel reviews={formattedReviews}/>
          ) : (
            <div>Loading reviews</div>
          )
        }
      </div>
    </div>
  )
}

export default async function Home() {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <AboutSection />
      <ServicesSection />
      <ReviewsSection />
    </>

  )
}
