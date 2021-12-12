// Dependencies scoped imports
import React from 'react';
import { Box } from '@mui/material';

// Project scoped imports
import SocialMedia from '../SocialMedia';

// Module scoped imports
import { StyledRoot, StyledImg, StyledTitle, StyledSubTitle } from './styles';
import { PersonCardProps } from './types';

/**
 * @description Person card with picture, name, position and social media links.
 *
 * API:
 *
 * - [PersonCard API](https://github.com/norwegianbegginer/Dekode/tree/master/src/components/PersonCard)
 * - inherits [Box API](https://material-ui.com/api/box/)
 */
const PersonCard = ({
  title,
  subtitle,
  imgUrl,
  sx,
  classes,
  ...rootProps
}: PersonCardProps) => (
  <StyledRoot sx={sx} className={classes?.root} {...rootProps}>
    <Box>
      <StyledImg src={imgUrl} alt="" />
    </Box>
    <Box>
      <StyledTitle variant="h4" variantMapping={{ h4: `p` }}>
        {title}
      </StyledTitle>
      <StyledSubTitle variant="body2">{subtitle}</StyledSubTitle>
      <SocialMedia />
    </Box>
  </StyledRoot>
);

export default PersonCard;
