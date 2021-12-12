import { BoxProps } from '@mui/material';
import { TCarouselItem } from '../Carousel/types';

export interface CaruseleItemProps extends BoxProps {
  item: TCarouselItem;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<CaruseleItemClasses>;
}

export interface CaruseleItemClasses {
  /** Styles applied to the root element. */
  root: string;
}
