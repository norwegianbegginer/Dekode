import { styled, AppBar, Box, IconButton, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

export const StyledRoot = styled(AppBar)(({ theme }) => ({
  zIndex: 99,
  backgroundColor: theme.palette.background.default,
  boxShadow: `0 4px 4px #919EA740`,
  color: theme.palette.text.primary,
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.down(`sm`)]: {
    height: `72px`,
  },
}));

export const StyledMainWrapper = styled(Box)(({ theme }) => ({
  display: `flex`,
  justifyContent: `space-between`,
  alignItems: `center`,
}));

export const StyledLeftWrapper = styled(Box)(({ theme }) => ({
  display: `flex`,
  justifyContent: `space-between`,
  alignItems: `center`,
  width: `40%`,
  maxWidth: `501px`,
  padding: `24px 0 8px 0`,

  [theme.breakpoints.down(`sm`)]: {
    width: `100%`,
    padding: `0`,
  },
}));

export const StyledLogoWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down(`sm`)]: {
    order: 1,
    flex: 1,
    display: `flex`,
    justifyContent: `center`,
  },
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  display: `none`,
  [theme.breakpoints.down(`sm`)]: {
    display: `flex`,
    order: 0,
  },
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: `none`,
  color: theme.palette.text.primary,
  fontWeight: `bold`,
  margin: `0 16px`,

  [theme.breakpoints.down(`sm`)]: {
    display: `none`,
  },
}));

export const StyledImage = styled(`img`)(({ theme }) => ({
  width: 17.49,
  height: 17.49,
  marginLeft: 8,
  filter: `brightness(0)`,
}));
