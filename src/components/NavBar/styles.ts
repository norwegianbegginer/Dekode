import { Box, styled, AppBar, Toolbar, Icon } from '@mui/material';
import { Link } from 'react-router-dom';

export const StyledRoot = styled(AppBar)(({ theme }) => ({
  zIndex: 99,
  backgroundColor: theme.palette.background.default,
  boxShadow: `0 4px 4px #919EA740`,
  color: theme.palette.text.primary,

  '&.MuiToolbar-root': {
    padding: `0`,
  },
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: `none`,
  color: theme.palette.text.primary,
  fontWeight: `bold`,
}));

export const StyledImage = styled(`img`)(({ theme }) => ({
  width: 17.49,
  height: 17.49,
  marginLeft: 8,
  filter: `brightness(0)`,
}));
