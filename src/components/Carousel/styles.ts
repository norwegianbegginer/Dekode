import { Box, styled, Container } from '@mui/material';

export const StyledRoot = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(12),
  height: `fit-content`,
}));

export const StyledCarouselWrapper = styled(Container)(({ theme }) => ({
  [theme.breakpoints.down(`sm`)]: {
    display: `none`,
  },
}));

export const StyledChunkWrapper = styled(Box)(({ theme }) => ({
  display: `flex`,
  gap: theme.spacing(6),
  backgroundColor: theme.palette.background.default,
}));

export const StyledSwipeableWrapper = styled(Box)(({ theme }) => ({
  padding: `0 6px`,
  display: `flex`,
  gap: theme.spacing(6),
  overflow: `scroll`,

  '&::-webkit-scrollbar': {
    width: 0,
  },

  [theme.breakpoints.up(`sm`)]: {
    display: `none`,
  },
}));
