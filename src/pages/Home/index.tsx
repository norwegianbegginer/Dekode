// Dependencies scoped imports
import React from 'react';

// Project scoped imports

// Module scoped imports
import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { StyledRoot } from './styles';
import { HomeProps } from './types';

/**
 * @description This is the home page. Description to provide.
 *
 * API:
 *
 * - [Home API](https://github.com/norwegianbegginer/Dekode/tree/master/src/pages/Home)
 * - inherits [Box API](https://material-ui.com/api/box/)
 */
const Home = ({ sx, classes, ...rootProps }: HomeProps) => (
  <StyledRoot sx={sx} className={classes?.root} {...rootProps}>
    <Container maxWidth="lg">
      <Typography variant="h1">Homepage</Typography>
      <Link to="circles">Circles</Link>
    </Container>
  </StyledRoot>
);

export default Home;
