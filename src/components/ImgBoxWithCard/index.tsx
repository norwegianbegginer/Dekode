// Dependencies scoped imports
import React from 'react';
import { Box } from '@mui/material';

// Project scoped imports

// Module scoped imports
import {
  StyledRoot,
  StyledCard,
  CardTxt,
  StyledContainer,
  StyledImg,
} from './styles';
import { ImgBoxWithCardProps } from './types';

/**
 * @description Contains image with absolute card.
 *
 * API:
 *
 * - [ImgBoxWithCard API](https://github.com/norwegianbegginer/Dekode/tree/master/src/components/ImgBoxWithCard)
 * - inherits [Box API](https://material-ui.com/api/box/)
 */
const ImgBoxWithCard = ({
  imgUrl,
  imgAlt,
  boxTxt,
  sx,
  classes,
  ...rootProps
}: ImgBoxWithCardProps) => (
  <StyledContainer>
    <StyledRoot sx={sx} className={classes?.root} {...rootProps}>
      <Box flex={1} />
      <StyledImg src={imgUrl} alt={imgAlt} />
    </StyledRoot>
    <StyledCard>
      <CardTxt variant="h3" variantMapping={{ h3: `p` }}>
        {boxTxt}
      </CardTxt>
    </StyledCard>
  </StyledContainer>
);

export default ImgBoxWithCard;
