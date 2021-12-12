import { Box, Link, styled } from '@mui/material';

export const StyledRoot = styled(Box)(({ theme }) => ({
  display: `flex`,
  height: `fit-content`,
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  height: `16px`,

  '&:nth-child(2)': {
    margin: `0 24px`,
  },
}));

export const StyledIcon = styled(`img`)(({ theme }) => ({
  fontSize: `16px`,
}));
