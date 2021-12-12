import { Box, Typography, styled, Container } from '@mui/material';

export const StyledRoot = styled(Box)(({ theme }) => ({
  display: `flex`,

  maxHeight: `560px`,
  width: `100%`,
}));

export const StyledContainer = styled(Container)(({ theme }) => ({
  '&.MuiContainer-root': { paddingRight: 0, maxWidth: `1200px` },
  position: `relative`,
}));

export const StyledCard = styled(Box)(({ theme }) => ({
  position: `absolute`,
  top: `50%`,
  left: `0`,
  transform: `translateY(-50% )`,
  maxWidth: `600px`,
  width: `50%`,
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(6),
  borderRadius: `8px 0px 0px 8px`,
  boxShadow: `0px 4px 8px rgba(145, 158, 167, 0.32)`,

  [theme.breakpoints.down(`sm`)]: {
    padding: theme.spacing(3),
    left: `-24px`,
  },
}));

export const StyledImg = styled(`img`)(({ theme }) => ({
  maxWidth: `888px`,
  width: `100%`,

  /* [theme.breakpoints.down(`sm`)]: {
    fontSize: `16px`,
  }, */
}));

export const CardTxt = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: 300,
  textAlign: `center`,

  [theme.breakpoints.down(`sm`)]: {
    fontSize: `16px`,
  },
}));
