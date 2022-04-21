import { Box } from '@mui/material';
import logoPackaging  from '../../img/logo_hor.svg';
import { useState, useEffect, useRef, useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Sandwich from './Sandwich.component';
import { PortfolioContext } from '../../contexts/Portfolio.context';

const navbar = theme => ({
    position: 'fixed',
    width: '100%',
    height: '5rem',
    zIndex: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('laptop')]: { // change it to mobile later! 
      height: '8rem'
    }, 
})

const navlogo = theme => ({
    width: '15rem',
    marginLeft: '5rem',
    height: '10rem',
    background: `url(${logoPackaging})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    cursor: 'pointer',
    [theme.breakpoints.down('laptop')]: { // change it to mobile later! 
      width: '20rem',
      marginLeft: '2rem', 
    }, 
})

const menu = theme => ({
    width: '300px',
    display: 'flex',
    marginRight: '50px',
    justifyContent: 'space-between',
    fontSize: '1rem',
    fontFamily: 'Raleway',
    fontWeight: '700',
    letterSpacing: '.1rem',
    textTransform: 'uppercase',
    '& a': {
        textDecoration: 'none',
        cursos: 'pointer',
        borderBottom: '1px solid transparent',
        transition: 'border .5s linear'
    },
    '& a:link, a:visited': {
        color: theme.palette.secondary.dark
    },
    '& a:hover': {
      borderBottom: `1.5px solid ${theme.palette.primary.main}`,
      // color: theme.palette.primary.light
    }
})

const Navbar = props => {
    const scrollRef = useRef(false);
    const [ scrollTop, setScrollTop ] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();
    const goTo = (path) => { navigate(path) }
    const  { isOpen, setIsOpen, width } = useContext(PortfolioContext);

    const handleClick = () => {
      setIsOpen(!isOpen)
    }

    useEffect(() => {
        try {
            window.scroll({
              top: 0,
              left: 0,
              behavior: 'smooth',
            });
          } catch (error) {
            // fallback for older browsers
            window.scrollTo(0, 0);
          }
      }, [])
      
    useEffect(() => {
      const onScroll = () => {
        let currentPosition = window.pageYOffset; // document.documentElement.scrollTop;
        setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
      }
  
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
      if (scrollTop >= 100) { scrollRef.current = true }
      else { scrollRef.current = false }
    }, [scrollTop])
   
    return (
        <Box sx={[navbar, {background: scrollRef.current ||  location.pathname === '/portafolio' ? 'white' : '' || location.pathname === '/nosotros' ? 'white' : '' || width  < 700 ? 'white' : '', transition: 'background .2s linear'}]}>
          <Box sx={navlogo} onClick={() => goTo('/')} />
          { width < 700 // tablet bp
          ? 
            <Sandwich handleClick={handleClick} isOpen={isOpen} />
          :
            <Box sx={menu}>
              <NavLink exact='true' to='/' style={({isActive}) => ({color: isActive ? '#1EB5D7' : ''})} href='/home'>Home</NavLink>
              <NavLink exact='true' to='/portafolio' style={({isActive}) => ({color: isActive ? '#1EB5D7' : ''})}  href='/portafolio.html'>Portafolio</NavLink>
              <NavLink exact='true' to='/nosotros' style={({isActive}) => ({color: isActive ? '#1EB5D7' : ''})}  href='/nosotros'>Nosotros</NavLink>
            </Box>
          }
      </Box>
    )
};

export default Navbar;
