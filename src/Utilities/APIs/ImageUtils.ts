import {IMAGE_URL} from '@env';

export const getImageUrl = (url: string): string => {
  const imageRootURL = IMAGE_URL;
  return imageRootURL + url;
};
