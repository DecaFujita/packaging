import { createTheme } from "@mui/material";
const theme = createTheme({
    palette: {
        primary: {
            light: '#46C2DE',
            main: '#1EB5D7',
            dark: '#1995B0'
        },
        secondary: {
            light: '#B9B4B0',
            main: '#817872',
            dark: '#665A53'
        },
        greys: {
          one: '#F5F5F4',
          two: '#E2E0DF',
          three: '#CFCFC9'
        }
    },
    container: {
        margin: '0 auto',
        width: '100vw'
    },
   breakpoints: {
    values: {
      mobile: 500,
      tablet: 700,
      laptop: 900,
      desktop: 1200,
    },
  },
  typography: {
    h1: { fontSize: '9.6rem' }, //96
    h2: { fontSize: '6rem' }, //60
    h3: { fontSize: '4.8rem', fontWeight: '300' }, //48
    h4: { fontSize: '3.2rem' }, //32
    h5: { fontSize: '2.4rem' }, //24
    h6: { fontSize: '1.9rem' }, //19
    body1: { fontSize: '1.6rem' }, //16
    body2: { fontSize: '1.4rem' }, //16
  },
});

export default theme;