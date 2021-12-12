import Img1 from '../../assets/1stor.svg';
import Img2 from '../../assets/2stor.svg';
import { TCarouselItem } from './types';

export const CAROUSELE_ITEMS: TCarouselItem[] = [
  {
    title: `Lorem ipsum`,
    date: `17. august 2020`,
    description: `In optics, violet is a spectral color: It refers to the color of any different single wavelength of light on the short wavelength end of the visible spectrum.`,
    imgUrl: Img1,
  },
  {
    title: `Lorem ipsum`,
    date: `17. august 2020`,
    description: `In optics, violet is a spectral color: It refers to the color of any different single wavelength of light on the short wavelength end of the visible spectrum.`,
    imgUrl: Img2,
  },
  {
    title: `Lorem ipsum`,
    date: `17. august 2020`,
    description: `In optics, violet is a spectral color: It refers to the color of any different single wavelength of light on the short wavelength end of the visible spectrum.`,
    imgUrl: Img1,
  },
  {
    title: `Lorem ipsum`,
    date: `17. august 2020`,
    description: `In optics, violet is a spectral color: It refers to the color of any different single wavelength of light on the short wavelength end of the visible spectrum.`,
    imgUrl: Img1,
  },
  {
    title: `Lorem ipsum`,
    date: `17. august 2020`,
    description: `In optics, violet is a spectral color: It refers to the color of any different single wavelength of light on the short wavelength end of the visible spectrum.`,
    imgUrl: Img2,
  },
  {
    title: `Lorem ipsum`,
    date: `17. august 2020`,
    description: `In optics, violet is a spectral color: It refers to the color of any different single wavelength of light on the short wavelength end of the visible spectrum.`,
    imgUrl: Img1,
  },
];

const itemsPerChunk = 3;

export const chunkedCaruseleItems = CAROUSELE_ITEMS.reduce(
  (resultArray, item, index) => {
    const chunkIndex = Math.floor(index / itemsPerChunk);

    if (!resultArray[chunkIndex]) {
      // eslint-disable-next-line no-param-reassign
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(item);

    return resultArray;
  },
  [] as TCarouselItem[][],
);
