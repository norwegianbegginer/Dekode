import { Box, Typography, styled } from '@mui/material';

export const StyledRoot = styled(Box)(({ theme }) => ({}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 500,
  marginBottom: theme.spacing(1.5),
  marginTop: theme.spacing(1.5),
}));

export const StyledDateTxt = styled(Typography)(({ theme }) => ({
  color: `#707070`,
  marginBottom: theme.spacing(1.5),
}));

export const StyledDescription = styled(Typography)(({ theme }) => ({}));
