import { Box, Typography, styled, Container } from '@mui/material';

export const StyledRoot = styled(Box)(({ theme }) => ({}));

export const StyledPageTitle = styled(Typography)(({ theme }) => ({
  textAlign: `center`,
  marginBottom: theme.spacing(6),

  [theme.breakpoints.down(`sm`)]: {
    fontSize: `32px`,
  },
}));

export const StyledPageSubTitle = styled(Typography)(({ theme }) => ({
  textAlign: `center`,
  fontStyle: `italic`,
  marginBottom: theme.spacing(6),

  [theme.breakpoints.down(`sm`)]: {
    fontSize: `24px`,
    lineHeight: `32px`,
  },
}));

export const StyledContainer = styled(Container)(({ theme }) => ({
  '&.MuiContainer-root': { padding: 0 },
  '& .MuiContainer-maxWidthSm': { padding: 0 },
}));

export const StyledSectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),

  [theme.breakpoints.down(`sm`)]: {
    fontSize: `24px`,
    lineHeight: `32px`,
  },
}));

export const StyledTxt = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(6),

  [theme.breakpoints.down(`sm`)]: {
    fontSize: `16px`,
    lineHeight: `24px`,
  },
}));

export const StyledButtonWrapper = styled(Box)(({ theme }) => ({
  display: `flex`,
  justifyContent: `center`,
  marginBottom: theme.spacing(7.5),
}));

export const StyledBtnTxt = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
}));
