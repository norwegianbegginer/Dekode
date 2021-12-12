import { BoxProps } from '@mui/material';

export interface CaruseleItemProps extends BoxProps {
  imgUrl: string;
  title: string;
  date: string;
  description: string;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<CaruseleItemClasses>;
}

export interface CaruseleItemClasses {
  /** Styles applied to the root element. */
  root: string;
}
