// Dependencies scoped imports
import React from 'react';
import { Box } from '@mui/material';

// Project scoped imports

// Module scoped imports
import {
  StyledDateTxt,
  StyledDescription,
  StyledRoot,
  StyledTitle,
} from './styles';
import { CaruseleItemProps } from './types';

/**
 * @description Contains caursele item component.
 *
 * API:
 *
 * - [CaruseleItem API](https://github.com/norwegianbegginer/Dekode/tree/master/src/components/CaruseleItem)
 * - inherits [Box API](https://material-ui.com/api/box/)
 */
const CaruseleItem = ({
  imgUrl,
  title,
  date,
  description,
  sx,
  classes,
  ...rootProps
}: CaruseleItemProps) => (
  <StyledRoot sx={sx} className={classes?.root} {...rootProps}>
    <Box>
      <img src={imgUrl} alt={title} />
    </Box>
    <StyledTitle variant="h2">{title}</StyledTitle>
    <StyledDateTxt variant="body2">{date}</StyledDateTxt>
    <StyledDescription variant="body1">{description}</StyledDescription>
  </StyledRoot>
);

export default CaruseleItem;
