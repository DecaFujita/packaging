import { Box, Grid, Typography } from '@mui/material';
import IconFacebook from '../components/iconos/facebook.component';
import IconInstagram from '../components/iconos/instagram.component';
import IconLinkedIn from '../components/iconos/linkedin.component';
import logoFooter from '../img/logo_hor_footer.svg';
import { useNavigate } from 'react-router-dom';


const footer = theme => ({
    background: theme.palette.secondary.light,
    marginTop: '1.5rem',
    padding: '3rem 5rem',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('tablet')]: {
        display: 'block'
    }
})

const social = theme => ({
    padding: '0 !important',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
   '& a': {
        marginLeft: '2rem',
        fill: 'white',
        transform: 'translateY(0.5rem)',
        '& svg': {
            height: '2.5rem',
        }
    },
    [theme.breakpoints.down('tablet')]: {
        justifyContent: 'center',
        marginTop: '2rem'
    }
})

const footerAddress = theme => ({
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
    [theme.breakpoints.down('tablet')]: {
        fontSize: '1.4rem'
    }
})

const logo = theme => ({
    width: '15rem',
    background: `url(${logoFooter})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    [theme.breakpoints.down('tablet')]: {
        display: 'none'
    }
})

const Footer = props => {
    const navigate = useNavigate();
    const goTo = (path) => { navigate(path) }

    return (
        <Box sx={footer}>
            <Box sx={logo} onClick={() => goTo('/')} />
            <Box sx={footerAddress}>
                <Typography variant='body2'>
                    Av. Pedro de Valdivia, 1215 - Of. 512 - Providencia - RM <br/>
                    +56 9 8293 6938 - contacto@packagingbrands.cl
                </Typography>
            </Box>
            <Box sx={social}>
                <a href="#">
                    <IconFacebook/>
                </a>
                <a href="#">
                    <IconInstagram/>
                </a>
                <a href="#">
                    <IconLinkedIn/>
                </a>
            </Box>
        </Box>
    )
}


export default Footer;