import { BoxProps } from '@mui/material';

export interface NavBarProps extends BoxProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<NavBarClasses>;
}

export interface NavBarClasses {
  /** Styles applied to the root element. */
  root: string;
}
