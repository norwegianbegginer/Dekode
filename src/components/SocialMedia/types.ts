import { BoxProps } from '@mui/material';

export interface SocialMediaProps extends BoxProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<SocialMediaClasses>;
}

export interface SocialMediaClasses {
  /** Styles applied to the root element. */
  root: string;
}
