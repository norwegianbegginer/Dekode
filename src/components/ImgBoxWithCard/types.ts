import { BoxProps } from '@mui/material';

export interface ImgBoxWithCardProps extends BoxProps {
  imgUrl: string;
  imgAlt: string;
  boxTxt: string;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<ImgBoxWithCardClasses>;
}

export interface ImgBoxWithCardClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the message element. */
  message: string;
}
