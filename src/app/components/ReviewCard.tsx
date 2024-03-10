import { GoogleReview } from "../(home)/reviews";
import Image from "next/image";
import Star from "./Star";
import { truncateWithPunctuation } from "./utils";

export default function ReviewCard({ review }: { review: GoogleReview }) {
    const reviewText = truncateWithPunctuation(review.reviewText, 100);
    return (
    <div className="max-w-4xl min-h-[33vh] mx-auto">
        <div className="flex flex-row justify-center max-w-xl mt-12 mx-auto space-x-8">
            <div className="flex flex-col items-center text-center">
                <Image 
                    src={review.profilePhoto}
                    alt={`${review.firstName} ${review.lastName}`}
                    width={28}
                    height={28}
                    className="w-28 h-28 rounded-full shadow-[0_2px_22px_-4px_rgba(93,96,127,0.6)] border-2 border-white" 
                />
                <div className="mt-4">
                    <h4 className="text-sm font-extrabold">{review.firstName} {review.lastName?.charAt(0)}.</h4>
                </div>
            </div>
        </div>
        <div className="flex justify-center">
            <p>{review.timeAgo}</p>
        </div>
        <div className="flex justify-center space-x-1 mt-4">
                {
                    Array.from({ length: 5 }, (_, i) => (
                        <Star key={i} isGold />
                    ))}
        </div>
        <div className="mt-4 text-center">
                {/* <p className="text-sm leading-relaxed">Lorem ipsum dolor</p> */}
                <p className="text-sm leading-relaxed">{reviewText}</p>
        </div>
    </div>
    )
}
