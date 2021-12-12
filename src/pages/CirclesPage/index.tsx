// Dependencies scoped imports
import React from 'react';
import { Container } from '@mui/material';

// Project scoped imports

// Module scoped imports
import { Link } from 'react-router-dom';
import { useTrans } from './trans';
import { StyledRoot, StyledMessage } from './styles';
import { CirclesPageProps } from './types';

/**
 * @description Page with circles links. Description to extend.
 *
 * API:
 *
 * - [CirclesPage API](https://github.com/norwegianbegginer/Dekode/tree/master/src/components/CirclesPage)
 * - inherits [Box API](https://material-ui.com/api/box/)
 */
const CirclesPage = ({ sx, classes, ...rootProps }: CirclesPageProps) => {
  const translated = useTrans();

  return (
    <StyledRoot sx={sx} className={classes?.root} {...rootProps}>
      <Container maxWidth="lg">
        <Link to="purple-circles">Purple Circles</Link>
      </Container>
    </StyledRoot>
  );
};

export default CirclesPage;
