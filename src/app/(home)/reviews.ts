export interface GoogleReview {
    firstName: string,
    lastName: string,
    profilePhoto: string,
    rating: number,
    timeAgo: string,
    reviewText: string
}

export async function getGoogleReviews(placeId: string)
{
    const link = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${process.env.GOOGLE_API_KEY}`;
    const res = await fetch(link);
    if(!res)
    {
        return { error: "Unable to get results" }
    }
    const json = await res.json();
    const reviews = json.result.reviews;
    return reviews;
}

export function formatReview(review: any)
{
    const names = review.author_name.split(' ');
    const firstName = names[0];
    const lastName = names.length > 1 ? names.slice(1).join(' ') : '';
    const formattedReview: GoogleReview = {
        firstName: firstName,
        lastName: lastName,
        profilePhoto: review.profile_photo_url,
        rating: review.rating,
        timeAgo: review.relative_time_description,
        reviewText: review.text
      };

    return formattedReview;
}