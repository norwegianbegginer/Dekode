import { LinkProps } from '@mui/material';

export interface LanguageSelectorProps extends LinkProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<LanguageSelectorClasses>;
}

export interface LanguageSelectorClasses {
  /** Styles applied to the root element. */
  root: string;
}
