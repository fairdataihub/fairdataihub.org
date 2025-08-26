// No Cloudinary import needed
import imagesData from '@/public/gallery/updated_gallery.json';

let cachedResults: { resources: typeof imagesData } | null = null;

export default async function getResults() {
  if (!cachedResults) {
    cachedResults = { resources: imagesData };
  }
  return cachedResults;
}
