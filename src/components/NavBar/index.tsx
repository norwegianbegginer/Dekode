// Dependencies scoped imports
import React from 'react';
import { Container, Stack, SwipeableDrawer, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// Project scoped imports
import { useNavigate } from 'react-router-dom';
import Logo from '../Logo';
import SearchIcon from '../../assets/icons/search.svg';

// Module scoped imports
import {
  StyledRoot,
  StyledLink,
  StyledImage,
  StyledIconButton,
  StyledMainWrapper,
  StyledLeftWrapper,
  StyledLogoWrapper,
  StyledToolbar,
} from './styles';
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
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpenNavMenu = () => setIsOpen(true);

  const handleDrawerItemClick = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <>
      <StyledRoot position="sticky" elevation={0}>
        <StyledToolbar disableGutters>
          <Container maxWidth="lg">
            <StyledMainWrapper>
              <StyledLeftWrapper>
                <StyledLogoWrapper>
                  <Logo />
                </StyledLogoWrapper>
                {NAV_LINKS.map((el) => (
                  <StyledLink key={el.name} to={el.path}>
                    {el.name}
                  </StyledLink>
                ))}
                <StyledIconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </StyledIconButton>
              </StyledLeftWrapper>

              <Stack direction="row" alignItems="center">
                <StyledLink to="">Search</StyledLink>
                <StyledImage alt="search icon" src={SearchIcon} />
              </Stack>
            </StyledMainWrapper>
          </Container>
        </StyledToolbar>
      </StyledRoot>
      <SwipeableDrawer
        anchor="top"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onOpen={() => 2}
      >
        {NAV_LINKS.map((el) => (
          <MenuItem onClick={() => handleDrawerItemClick(el.path)}>
            {el.name}
          </MenuItem>
        ))}
      </SwipeableDrawer>
    </>
  );
};

export default NavBar;
