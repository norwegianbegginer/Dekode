import { BoxProps } from '@mui/material';

export interface PurpleCirclesPageProps extends BoxProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<PurpleCirclesPageClasses>;
}

export interface PurpleCirclesPageClasses {
  /** Styles applied to the root element. */
  root: string;
}
