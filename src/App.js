import Navbar from './components/navbar/Navbar.component';
import Footer from './sections/Footer.section';
import { ThemeProvider } from '@mui/material/styles';
import theme from './contexts/Theme.context';
import { CssBaseline,  GlobalStyles } from '@mui/material';
import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import PortafolioView from './pages/PortafolioView.portfolio';
import './App.css';

import Home from './pages/home.page';
import Nosotros from './pages/nosotros.page';
import Portafolio from './pages/portafolio.page';
import { globalStyle } from './styles/styles';
import { PortfolioProvider } from './contexts/Portfolio.context';

const App = () => {
  return (
  <Fragment>
    <CssBaseline/>
    <ThemeProvider theme={theme}>
    <GlobalStyles styles={globalStyle} />
    <PortfolioProvider>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/portafolio' element={<Portafolio/>} />
        <Route exact path='/nosotros' element={<Nosotros />} />
        <Route exact path='/portafolio/:id' element={<PortafolioView />} />
        {/* <Route element={NotFound}/> */}
      </Routes>
      <Footer />
    </PortfolioProvider>
    </ThemeProvider>
  </Fragment>
  );
}

export default App;
