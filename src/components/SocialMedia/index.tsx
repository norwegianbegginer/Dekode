// Dependencies scoped imports
import React from 'react';

// Project scoped imports
import TwitterIcon from '../../assets/icons/Twitter.svg';
import InstagramIcon from '../../assets/icons/instagram.svg';
import FacebookIcon from '../../assets/icons/Facebook.svg';
// Module scoped imports
import { StyledIcon, StyledLink, StyledRoot } from './styles';
import { SocialMediaProps } from './types';

/**
 * @description Component that contains social media icons with links.
 *
 * API:
 *
 * - [SocialMedia API](https://github.com/norwegianbegginer/Dekode/tree/master/src/components/SocialMedia)
 * - inherits [Box API](https://material-ui.com/api/box/)
 */
const SocialMedia = ({ sx, classes, ...rootProps }: SocialMediaProps) => (
  <StyledRoot sx={sx} className={classes?.root} {...rootProps}>
    <StyledLink href="https://dekode.no" target="_blank">
      <StyledIcon src={TwitterIcon} alt="" />
    </StyledLink>
    <StyledLink href="https://dekode.no" target="_blank">
      <StyledIcon src={InstagramIcon} alt="" />
    </StyledLink>
    <StyledLink href="https://dekode.no" target="_blank">
      <StyledIcon src={FacebookIcon} alt="" />
    </StyledLink>
  </StyledRoot>
);

export default SocialMedia;
