import { footerHeight } from '../assets/globalVariables';

const globalStyle = theme => ({
    '*': { margin: 0, padding: 0},
    // '*::before, *::after': {boxSizing: 'border-box' },
    
    'html': {
      fontSize: '62.5%',
      [theme.breakpoints.down('laptop')]: {
        fontSize: '50%',
      },
    //   boxSizing: 'border-box',
      fontFamily: 'Raleway, sans-serif',
      fontWeight: '200',
      lineHeight: '1.6',
      width: '100vw',
      overflowX: 'hidden'
    },

    // h1::selection, h2::selection, h3::selection, 
    // h4::selection, h5::selection, h6::selection, 
    // p::selection {
    //   background: #1EB5D7;
    //   color: white;
    // }
    
});

const containerStyle = theme => ({ 
    margin: '0 auto',
    width: '120rem',
    [theme.breakpoints.down('desktop')]: {
      width: '90rem',
    },
    minHeight: `calc(100vh - ${footerHeight})` ,
    fontFamily: 'Raleway, sans-serif',
    color: theme.palette.secondary.main,
}); 

const heroStyle = theme => ({ 
  width: '100%',
  minHeight: `calc(100vh - ${footerHeight})` ,
}); 

export { globalStyle, containerStyle, heroStyle };