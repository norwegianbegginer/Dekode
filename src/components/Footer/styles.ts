import { Box, Typography, styled } from '@mui/material';

export const StyledRoot = styled(Box)(({ theme }) => ({
  boxShadow: `4px 0px 4px rgba(145, 158, 167, 0.25)`,
  padding: `${theme.spacing(6)} 0`,

  [theme.breakpoints.down(`sm`)]: {
    paddingBottom: theme.spacing(6.5),
  },
}));

export const StyledMainWrapper = styled(Box)(({ theme }) => ({
  display: `flex`,
  marginTop: theme.spacing(6),

  [theme.breakpoints.down(`sm`)]: {
    flexDirection: `column`,
  },
}));

export const StyledWrapper = styled(Box)(({ theme }) => ({
  flex: 1,
  display: `flex`,
  flexDirection: `column`,
}));

export const StyledLinkBoxesWrapper = styled(Box)(({ theme }) => ({
  flex: 2,
  display: `flex`,
  width: `100%`,
  height: `fit-content`,

  [theme.breakpoints.down(`sm`)]: {
    flexDirection: `column`,
    marginTop: theme.spacing(3),
  },
}));

export const StyledLeftLinksWrapper = styled(Box)(({ theme }) => ({
  flex: 1,
}));

export const StyledRightLinksWrapper = styled(Box)(({ theme }) => ({
  flex: 1,
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `space-between `,
  marginBottom: `${theme.spacing(3)}`,
  [theme.breakpoints.down(`sm`)]: {
    marginBottom: 0,
  },
}));

export const StyledLinksWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down(`sm`)]: {
    marginBottom: theme.spacing(8.5),
  },
}));

export const StyledTxt = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

export const StyledLinkTxt = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
}));
