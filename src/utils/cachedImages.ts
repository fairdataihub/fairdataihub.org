// No Cloudinary import needed
import imagesData from '@/public/gallery/images.json';

let cachedResults: { resources: typeof imagesData } | null = null;

export default async function getResults() {
  if (!cachedResults) {
    cachedResults = { resources: imagesData };
  }
  return cachedResults;
}
