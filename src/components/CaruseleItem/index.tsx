// Dependencies scoped imports
import React from 'react';
import { Box } from '@mui/material';

// Project scoped imports

// Module scoped imports
import {
  StyledDateTxt,
  StyledDescription,
  StyledImg,
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
  item,
  sx,
  classes,
  ...rootProps
}: CaruseleItemProps) => (
  <StyledRoot sx={sx} className={classes?.root} {...rootProps}>
    <Box display="flex" justifyContent="center">
      <StyledImg src={item.imgUrl} alt={item.title} />
    </Box>
    <StyledTitle variant="h2">{item.title}</StyledTitle>
    <StyledDateTxt variant="body2">{item.date}</StyledDateTxt>
    <StyledDescription variant="body1">{item.description}</StyledDescription>
  </StyledRoot>
);

export default CaruseleItem;
