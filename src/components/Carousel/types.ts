import { BoxProps } from '@mui/material';

export type CustomCarouselProps = BoxProps;

export interface CustomCarouselClasses {
  /** Styles applied to the root element. */
  root: string;
}

export type TCarouselItem = {
  title: string;
  date: string;
  description: string;
  imgUrl: string;
};
