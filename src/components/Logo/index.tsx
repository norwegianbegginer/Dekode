// Dependencies scoped imports
import React from 'react';
import { Link } from 'react-router-dom';

// Project scoped imports
import LogoSvg from '../../assets/Logo.svg';

// Module scoped imports
import { StyledRoot } from './styles';
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
      <Link to="/">
        <StyledRoot
          src={LogoSvg}
          alt=""
          className={classes?.root}
          {...rootProps}
        />
      </Link>
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
