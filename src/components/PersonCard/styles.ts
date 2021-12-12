import { Box, Typography, styled } from '@mui/material';

export const StyledRoot = styled(Box)(({ theme }) => ({
  display: `flex`,
}));

export const StyledImg = styled(`img`)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(1),

  [theme.breakpoints.down(`sm`)]: {
    fontSize: `16px`,
    lineHeight: `24px`,
  },
}));

export const StyledSubTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(1.5),

  [theme.breakpoints.down(`sm`)]: {
    fontSize: `10`,
    lineHeight: `16px`,
  },
}));
