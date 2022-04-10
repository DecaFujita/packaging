import { Box, Typography } from '@mui/material';
import { containerStyle, heroStyle } from '../styles/styles';
import Map from '../components/imgs/map';
import heroImg from '../img/site_contato.jpeg';
import { footerHeight } from '../assets/globalVariables';
import IconFacebook from '../components/iconos/facebook.component';
import IconInstagram from '../components/iconos/instagram.component';
import IconLinkedIn from '../components/iconos/linkedin.component';
import nosotrosImg from '../img/designing.jpeg';
import ciudadesImg from '../img/contacto.png';
import { Fragment } from 'react';

const hero = theme => ({
    height: '30rem',
    width: '100%',
    background: `url(${nosotrosImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
})
const container = theme => ({
    width: '120rem',
    margin: '0 auto',
    display: 'flex',
    [theme.breakpoints.down('desktop')]: {
        width: '90rem',
        flexDirection: 'column',
    }
})
const text = theme => ({
    width: '70%',
    paddingRight: '10rem',
    [theme.breakpoints.down('desktop')]: {
        width: '100%', 
        paddingRight: 0,
    }
})
const contact = theme => ({
    marginTop: '1.5rem',
    width: '30%',
    minHeight: `calc(100vh - ${footerHeight} - 40rem)`,
    background: theme.palette.secondary.light,
    padding: '2rem',
    [theme.breakpoints.down('desktop')]: {
        width: '100%',
    }
})
const social = theme => ({
    display: 'flex',
   '& a': {
        marginTop: '2rem',
        marginRight: '2rem',
        fill: 'white',
        transform: 'translateY(0.5rem)',
        '& svg': {
            height: '2.5rem',
        }
    }
})

const colorPrimary = theme => ({
    color: theme.palette.primary.main
})

const imgCiudades = theme => ({
    marginTop: '3rem',
    width: '100%',
    height: '25rem',
    background: `url(${ciudadesImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
})

const Contacto = props => {
    return (
        <Box sx={[containerStyle, {paddingTop: '10rem'}]}>
            <Box sx={hero} />
            <Box sx={container}>
                <Box sx={text}>
                    <Typography sx={colorPrimary} variant='h3' mb={2} mt={5}>
                        Nosotros
                    </Typography>
                    <Typography variant='body1'>
                        Somos una empresa de branding, con 25 años de actuación en el mercado brasilero y 8 años en el mercado chileno,
                        con oficinas en Río de janeiro y Santiago de Chile. 
                        <br/><br/>
                        Observamos marcas todos los días. Ponemos atención a detalles, códigos y promesas, atentos a identificar
                        lo que lleva a que las personas establezcan fuertes vínculos emocionales con las marcas.
                        <br/><br/>
                        Hoy contamos con especialistas incluyendo: brandmakers,diseñadores gráficos
                        y de producto, redactores publicitarios, webdesigners, diseñadores de packaging, ilustradores,
                        periodistas, revisores y productores, además del staff de apoyo técnico y operacional.
                        <br/><br/>
                        Nuestro equipo esta dividido en cuatro especialidades: Planificación Estratégica, Diseño de
                        Packaging, Comunicación y Experiencia de Marca. 
                    </Typography>
                    <Box sx={imgCiudades} />
                </Box>
                <Box sx={contact}>
                    <Fragment>
                    <Typography sx={{color: 'white'}} variant='h6' mb={2} mt={5}>
                        Encuéntranos en Santiago...
                    </Typography>
                    <Typography variant='body1' sx={{color: 'white'}} mb={3} mt={3}>
                        Av. Pedro de Valdivia 1215, Of. 503
                        <br/>
                        Providencia, Santiago
                        <br/>
                        Tel.: +56 9 8293 6938
                        <br/>
                        <span style={{fontWeight:'600'}}>contacto@packagingbrands.cl</span>
                    </Typography>
                    <Map/>
                    </Fragment>
                    
        
                    <Typography sx={{color: 'white'}} variant='h6' mb={2} mt={5}>
                       ... y también en Rio de Janeiro
                    </Typography>
                    <Typography variant='body1' sx={{color: 'white'}} mt={3}>
                        Tel.: +56 2 2954 9416
                        <br/>
                        <span style={{fontWeight:'600'}}>contato@packaging.com.br</span>
                    </Typography>
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
            </Box>
        </Box>
        
    )
};

export default Contacto;
