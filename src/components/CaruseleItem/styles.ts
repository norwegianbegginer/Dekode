import { Box, Typography, styled } from '@mui/material';

export const StyledRoot = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));

export const StyledImg = styled(`img`)(({ theme }) => ({
  [theme.breakpoints.down(`sm`)]: {
    height: `176px`,
  },
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 500,
  marginBottom: theme.spacing(1.5),
  marginTop: theme.spacing(1.5),

  [theme.breakpoints.down(`sm`)]: {
    fontSize: `24px`,
    lineHeight: `32px`,
  },
}));

export const StyledDateTxt = styled(Typography)(({ theme }) => ({
  color: `#707070`,
  marginBottom: theme.spacing(1.5),
}));

export const StyledDescription = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down(`sm`)]: {
    fontSize: `14px`,
    lineHeight: `24px`,
  },
}));
