import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

const sandwich = theme => ({
    display: 'flex',
    width:'5rem',
    height: '5rem',
    marginRight: '2rem',
    borderRadius: '50px',
    background: 'rgba(255,255,255,.7)',
    padding: '1.6rem',
    
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
})

const sandwichTab = theme => ({
    height: '.3rem',
    width: '2.5rem',
    borderRadius: '1rem',
    background: theme.palette.secondary.main ,
    transition: 'all .2s linear',
})

const menu = theme => ({
    position: 'absolute',
    right: '0',
    top: '8rem',
    background: 'white',
    width: '100%',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-around',
    fontSize: '2rem',
    borderTop: `solid 1px ${theme.palette.greys.two}`,
    // boxShadow: `1px 1px 2px ${theme.palette.greys.two}`,
    '& a': {
        textDecoration: 'none'
    },
    '& a:link, a:visited': {
        color: theme.palette.secondary.main
    }
})

const Sandwich = props => {
    const tl = anime.timeline({
        easing: 'linear',
        duration: 750
      });
    useEffect(() => {
        tl.add({
            targets:'#menu',
            opacity:'1'
        })
    })

    return (
        <Box onClick={props.handleClick}>
            <Box sx={sandwich}>
                <Box sx={[sandwichTab, { transform: props.isOpen && 'rotate(45deg) translateY(4.5px) translateX(4px)'}]}/>
                <Box sx={[sandwichTab, { opacity: props.isOpen && '0'}]}/>
                <Box sx={[sandwichTab, { transform: props.isOpen && 'rotate(-45deg) translateY(-4.5px) translateX(4px)'}]}/>
            </Box>
            {props.isOpen &&
                <Box id='menu' sx={menu}>
                    <NavLink exact='true' to='/' style={({isActive}) => ({color: isActive ? '#1EB5D7' : ''})} href='/home'>Home</NavLink>
                    <NavLink exact='true' to='/portafolio'  style={({isActive}) => ({color: isActive ? '#1EB5D7' : ''})} href='/portafolio.html'>Portafolio</NavLink>
                    <NavLink exact='true' to='/nosotros'  style={({isActive}) => ({color: isActive ? '#1EB5D7' : ''})} href='/nosotros'>Nosotros</NavLink>
                </Box>
            }
        </Box>
    )
}

export default Sandwich;