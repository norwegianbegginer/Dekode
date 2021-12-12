import { BoxProps } from '@mui/material';

export interface CirclesPageProps extends BoxProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<CirclesPageClasses>;
}

export interface CirclesPageClasses {
  /** Styles applied to the root element. */
  root: string;
}
