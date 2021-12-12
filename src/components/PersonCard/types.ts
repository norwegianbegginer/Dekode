import { BoxProps } from '@mui/material';

export interface PersonCardProps extends BoxProps {
  title: string;
  subtitle: string;
  imgUrl: string;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<PersonCardClasses>;
}

export interface PersonCardClasses {
  /** Styles applied to the root element. */
  root: string;
}
