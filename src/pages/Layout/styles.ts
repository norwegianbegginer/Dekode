import { Box, styled } from '@mui/material';

export const StyledRoot = styled(Box)(({ theme }) => ({
  display: `flex`,
  flexDirection: `column`,
  minHeight: `100vh`,
}));
