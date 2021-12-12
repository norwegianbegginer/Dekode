// Dependencies scoped imports
import React from 'react';
import {
  Box,
  Container,
  Link,
  Typography,
  Toolbar,
  Stack,
  Icon,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

// Project scoped imports
import Logo from '../Logo';
import SearchIcon from '../../assets/icons/search.svg';

// Module scoped imports
import { StyledRoot, StyledLink, StyledImage } from './styles';
import { useTrans } from './trans';
import { NavBarProps } from './types';
import { NAV_LINKS } from './constants';

/**
 * @description App navigation bar.
 *
 * API:
 *
 * - [NavBar API](https://github.com/norwegianbegginer/Dekode/tree/master/src/components/NavBar)
 * - inherits [Box API](https://material-ui.com/api/box/)
 */
const NavBar = ({ sx, classes, ...rootProps }: NavBarProps) => {
  const translated = useTrans();

  return (
    <StyledRoot position="sticky" elevation={0}>
      <Toolbar>
        <Container maxWidth="lg">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              width="40%"
              maxWidth="501px"
            >
              <Logo />

              {NAV_LINKS.map((el) => (
                <StyledLink key={el.name} to={el.path}>
                  {el.name}
                </StyledLink>
              ))}
            </Stack>

            <Stack direction="row" alignItems="center">
              <StyledLink to="">Search</StyledLink>
              <StyledImage alt="search icon" src={SearchIcon} />
            </Stack>
          </Stack>
        </Container>
      </Toolbar>
    </StyledRoot>
  );

  // return (
  //   <StyledRoot elevation={0} position="sticky">
  //     <StyledToolbar>
  //       <Container maxWidth="xl">
  //         <StyledContentWrapper>
  //           <Box sx={{ display: `flex` }}>
  //             <Box>logo</Box>
  //             <Box>
  //               {NAV_LINKS.map((el) => (
  //                 <StyledLink key={el.name} to={el.path}>
  //                   {el.name}
  //                 </StyledLink>
  //               ))}
  //             </Box>
  //           </Box>
  //           <Box>
  //             <Typography>Search</Typography>
  //           </Box>
  //         </StyledContentWrapper>
  //       </Container>
  //     </StyledToolbar>
  //   </StyledRoot>
  // );
};

export default NavBar;
