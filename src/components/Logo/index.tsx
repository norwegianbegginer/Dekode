// Dependencies scoped imports
import React from 'react';

// Project scoped imports
import LogoSvg from '../../assets/Logo.svg';

// Module scoped imports
import { StyledLink, StyledRoot } from './styles';
import { LogoProps } from './types';

/**
 * @description Company logo component.
 *
 * API:
 *
 * - [Logo API](https://github.com/norwegianbegginer/Dekode/tree/master/src/components/Logo)
 * - inherits [Box API](https://material-ui.com/api/box/)
 */
const Logo = ({
  redirect,
  classes,
  ...rootProps
}: LogoProps & typeof defaultProps) => {
  if (redirect)
    return (
      <StyledLink to="/">
        <StyledRoot
          src={LogoSvg}
          alt=""
          className={classes?.root}
          {...rootProps}
        />
      </StyledLink>
    );
  return (
    <StyledRoot src={LogoSvg} alt="" className={classes?.root} {...rootProps} />
  );
};
const defaultProps = {
  redirect: true,
};
Logo.defaultProps = defaultProps;

export default Logo;
