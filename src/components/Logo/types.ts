export interface LogoProps {
  redirect?: boolean;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<LogoClasses>;
}

export interface LogoClasses {
  /** Styles applied to the root element. */
  root: string;
}
