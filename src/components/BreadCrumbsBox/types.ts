import { BoxProps } from '@mui/material';

export interface BreadCrumbsBoxProps extends BoxProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<BreadCrumbsBoxClasses>;
}

export interface BreadCrumbsBoxClasses {
  /** Styles applied to the root element. */
  root: string;
}
