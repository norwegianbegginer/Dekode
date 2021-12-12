import { Box, Typography, styled } from '@mui/material';

export const StyledRoot = styled(Box)(({ theme }) => ({
  display: `flex`,
  flexDirection: `column`,
  minHeight: `100vh`,
}));

export const StyledMessage = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
}));
