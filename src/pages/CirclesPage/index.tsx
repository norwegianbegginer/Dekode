// Dependencies scoped imports
import React from 'react';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';

// Project scoped imports

// Module scoped imports
import { StyledRoot } from './styles';
import { CirclesPageProps } from './types';

/**
 * @description Page with circles links. Description to extend.
 *
 * API:
 *
 * - [CirclesPage API](https://github.com/norwegianbegginer/Dekode/tree/master/src/components/CirclesPage)
 * - inherits [Box API](https://material-ui.com/api/box/)
 */
const CirclesPage = ({ sx, classes, ...rootProps }: CirclesPageProps) => (
  <StyledRoot sx={sx} className={classes?.root} {...rootProps}>
    <Container maxWidth="lg">
      <Link to="purple-circles">Purple Circles</Link>
    </Container>
  </StyledRoot>
);

export default CirclesPage;
