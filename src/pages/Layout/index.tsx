// Dependencies scoped imports
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

// Project scoped imports
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

// Module scoped imports
import { StyledRoot } from './styles';
import { LayoutProps } from './types';

/**
 * @description Layout of the page. Components visible through all of routings.
 *
 * API:
 *
 * - [Layout API](https://github.com/norwegianbegginer/Dekode/tree/master/src/pages/Layout)
 * - inherits [Box API](https://material-ui.com/api/box/)
 */
const Layout = ({ sx, classes, ...rootProps }: LayoutProps) => (
  <StyledRoot sx={sx} className={classes?.root} {...rootProps}>
    <NavBar />
    <Box flex={1}>
      <Outlet />
    </Box>
    <Footer />
  </StyledRoot>
);

export default Layout;
