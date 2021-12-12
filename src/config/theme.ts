import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: `#8500D7`,
    },
    secondary: {
      main: `#FF007A`,
    },
    background: {
      default: `#FFFFFF`,
    },
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 568,
      md: 900,
      lg: 1248,
      xl: 1536,
    },
  },
  typography: {
    /* fontFamily: `Add your font`, */
    h1: {
      fontSize: `56px`,
      lineHeight: `64px`,
      fontWeight: 500,
      color: `#262626`,
    },
    h2: {
      fontSize: `32px`,
      lineHeight: `40px`,
      color: `#262626`,
    },
    h3: {
      fontSize: `24px`,
      lineHeight: `32px`,
      color: `#262626`,
    },
    h4: {
      fontSize: `20px`,
      lineHeight: `28px`,
      color: `#262626`,
    },
    h5: {
      fontSize: `16px`,
      lineHeight: `24px`,
      color: `#262626`,
    },
    h6: {
      fontSize: `14px`,
      lineHeight: `20px`,
      color: `#262626`,
    },
    body1: {
      fontSize: `16px`,
      lineHeight: `24px`,
      color: `#262626`,
    },
    body2: {
      fontSize: `12px`,
      lineHeight: `16px`,
      color: `#262626`,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          minHeight: `100vh`,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: `0 24px`,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: `12px 24px`,
          border: `2px solid #8500D7`,
          color: `#262626`,
          fontSize: `16px`,
          fontWeight: 500,
          borderRadius: `8px`,
          textTransform: `capitalize`,
          '&:hover': { borderWidth: 2, backgroundColor: `#E7BFFF` },
          '&:focus': {
            backgroundColor: `#E7BFFF`,
            boxShadow: `0 0 0 1px #1E6CF9, 0px 0px 4px #1E6CF9`,
          },
          '&:active': {
            borderWidth: 2,
            backgroundColor: `#E7BFFF`,
            boxShadow: `0 0 0 2px #fff, 0 0 0 4px #8500D7`,
          },
        },
      },
    },
  },
});
