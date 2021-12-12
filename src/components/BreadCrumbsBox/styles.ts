import { Box, Typography, styled, Breadcrumbs } from '@mui/material';
import { Link } from 'react-router-dom';

export const StyledRoot = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(4)} 0`,

  [theme.breakpoints.down(`sm`)]: {
    paddingTop: theme.spacing(4.75),
  },
}));

export const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  '& .MuiBreadcrumbs-separator': {
    color: theme.palette.primary.main,
    fontSize: `12px`,
  },
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: `none`,
}));

export const StyledRootTxt = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.primary.main,
  lineHeight: `24px`,

  [theme.breakpoints.down(`sm`)]: {
    fontSize: `16px`,
    lineHeight: `24px`,
  },
}));

export const StyledTxt = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  lineHeight: `24px`,

  '&::first-letter': {
    textTransform: `uppercase`,
  },

  [theme.breakpoints.down(`sm`)]: {
    fontSize: `16px`,
    lineHeight: `24px`,
  },
}));
