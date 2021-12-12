import { Typography, styled } from '@mui/material';

export const StyledTxt = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  cursor: `pointer`,
  textDecoration: `underline`,
}));
