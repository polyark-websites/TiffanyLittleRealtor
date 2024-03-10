import { FormData } from "./ContactSection";

export const logo_white = '/public/top_logo.png';

export function truncateWithPunctuation(text: string, maxLength: number) {
    // Define the punctuation marks you consider as valid ending characters.
    const punctuation = ['.', '!', '?'];
    if (text.length <= maxLength) {
      return text; // Return the original text if it's short enough.
    }
  
    // Find the nearest punctuation to maxLength
    let nearestPunctuationIndex = null;
    for (let i = 0; i < text.length; i++) {
      if (punctuation.includes(text[i])) {
        nearestPunctuationIndex = i;
        // Stop if this punctuation is after maxLength but not too far
        if (i >= maxLength) break;
      }
    }
  
    // If a punctuation mark was found close enough to maxLength, truncate the text there.
    if (nearestPunctuationIndex !== null) {
      return text.substring(0, nearestPunctuationIndex + 1);
    }
  
    // If no suitable punctuation is found, truncate at maxLength.
    return text.substring(0, maxLength);
  }

// Helper function to chunk the array
export function chunkArray<T>(array: T[], size: number): T[][] {
  return array.reduce((acc, _, index) => 
      index % size ? acc : [...acc, array.slice(index, index + size)], 
      [] as T[][]);
}

export function sendEmail(data: FormData) {
  const apiEndpoint = '/api/email';

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}

export function scrollToSection(sectionId: string) {
  const section = document.querySelector(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}