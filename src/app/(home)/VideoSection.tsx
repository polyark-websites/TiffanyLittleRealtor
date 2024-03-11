'use client'

import { useEffect, useRef } from "react";

export default function VideoSection() {
    const videoRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {       
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current !== null) {
            videoRef.current.src += "&autoplay=1"; // Attempt to autoplay when the video scrolls into view
          }
        });
      }, { threshold: 1 }); // Trigger when 50% of the video is in view
  
      if (videoRef.current) {
        observer.observe(videoRef.current);
      }
  
      return () => {
        if (videoRef.current) {
          observer.unobserve(videoRef.current);
        }
      };
    }, []);
  
    return (
      <div className="bg-primary-dark text-white ">
        <div className="mx-auto w-[90%] pt-4 pb-4 md:h-[518px] lg:pl-24 lg:pr-24 lg:h-[576px] lg:pb-10 xl:h-[720px] 4k:w-[1440px]">
          <div className="flex flex-col h-full w-auto">
            <h1 className="uppercase text-xs pb-2 font-bold md:text-lg md:pb-4 md:pt-4 lg:text-xl lg:pb-10 xl:pb-4 4k:text-2xl">Falling in love with williamsburg</h1>
            <iframe
              ref={videoRef}
              className="w-auto h-full"
              src="https://www.youtube.com/embed/0MG7ILTT-ZI?controls=0&showinfo=0&rel=0&mute=1&modestbranding=1&autoplay=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

        </div>
      </div>
    );
  }