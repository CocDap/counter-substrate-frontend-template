import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          margin: 0,
          '& ::-webkit-scrollbar': {
            width: '5px',
            height: '5px',
          },
          '& ::-webkit-scrollbar-track': {
            boxShadow: `inset 0 0 5px #fff`,
            borderRadius: '10px',
          },
          '& ::-webkit-scrollbar-thumb': {
            backgroundColor: '#C4C8CC',
            borderRadius: '10px',
          },
          '& ::-webkit-scrollbar-thumb:hover': {},
        },
        body: {
          margin: 0,
        }
      },
    },
  },
  palette: {
    primary: {
      main: "rgb(20, 21, 21)"
    }
  }
});

export default theme;
