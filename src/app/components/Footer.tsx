import Link from "next/link";
import Image from "next/image";
import { FacebookIcon, InstagramIcon, LinkedInIcon, TikTokIcon, YouTubeIcon } from "./icons";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <div className="bg-primary-dark w-full p-10 flex flex-col items-center">
      <div className="flex flex-col items-center space-y-4 w-full max-w-4xl">
        <div className="w-full flex flex-col items-center">
          <Link href="/" className="text-xl font-bold pr-2 pb-3">
              <Image
                src="/top_logo.png"
                width={205}
                height={72}
                alt="Tiffany Logo"
              />
          </Link>
          <div className="text-white">
            <h2 className="font-bold text-center">5350 Discovery Park Blvd.</h2>
            <h2 className="font-bold text-center pb-4">Williamsburg, VA 23188</h2>
            <div className="flex space-x-2 justify-center items-center pb-1">
              <PhoneIcon className="h-3.5 w-3.5"/>
              <a href="tel:757-871-4452" className="text-xs hover:underline">757-871-4452</a>
            </div>
            <div className="flex space-x-2 justify-center items-center">
              <EnvelopeIcon className="h-3.5 w-3.5"/>
              <a href="mailto:tiffanylittle@lizmoore.com" className="text-xs hover:underline">tiffanylittle@lizmoore.com</a>
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          <a target="_blank" href="https://www.facebook.com/Tiffanylittlelizmoore/" rel="noopener noreferrer">
            <FacebookIcon />
          </a>
          <a target="_blank" href="https://www.instagram.com/tiffanylittle_varealtor/" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/tiffany-little-42220288/" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
          <a target="_blank" href="https://www.youtube.com/@tiffanylittlevarealtor757/" rel="noopener noreferrer">
            <YouTubeIcon />
          </a>
          <a target="_blank" href="https://www.tiktok.com/@tiffanyfaulklittle/" rel="noopener noreferrer">
            <TikTokIcon />
          </a>
        </div>
      </div>
      <div className="mt-6">
        <Image 
          src="/liz_moore.png"
          width={100}
          height={100}
          alt="Liz Moore logo"
        />
      </div>
    </div>
  )
}
