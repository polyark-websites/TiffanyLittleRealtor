'use client'

import { useState } from 'react';
import { GoogleReview } from '../(home)/reviews'
import ReviewCard from './ReviewCard'
import { motion } from 'framer-motion';

const variants = {
    enter: (direction: string) => {
      return {
        x: direction === 'next' ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: string) => {
      return {
        zIndex: 0,
        x: direction === 'next' ? -1000 : 1000,
        opacity: 0,
      };
    },
  };

export default function ReviewCarousel({ reviews }: { reviews: GoogleReview[]}) {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [slideDirection, setSlideDirection] = useState<string>('');

    const showNextReview = () => {
        console.log("Review");
        setSlideDirection('next');
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length); // Loop back to the first review
    };
  
    const showPrevReview = () => {
        setSlideDirection('prev');
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length); // Loop back to the last review
    };
  
    return (
        <div className="flex flex-row w-full h-full items-center justify-between">
            <button
                className="bg-white flex w-10 h-10 items-center justify-center rounded-full rotate-90 shrink-0 cursor-pointer md:w-14 md:h-14"
                onClick={showPrevReview}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-primary-dark inline md:w-5" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z" clipRule="evenodd" data-original="#000000"></path>
                </svg>
            </button>
            <motion.div
                key={currentIndex}
                custom={slideDirection}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
                }}
                className="flex flex-row"
            >
                <ReviewCard review={reviews[currentIndex]} />
            </motion.div>
            <button
                className="bg-white w-10 h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0 cursor-pointer md:w-14 md:h-14"
                onClick={showNextReview}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-primary-dark inline md:w-5" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z" clipRule="evenodd" data-original="#000000"></path>
                </svg>
            </button>
        </div>

    );
}
