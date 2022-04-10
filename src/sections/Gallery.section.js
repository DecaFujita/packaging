import { Box } from '@mui/material';
import ballerina_pro from '../img/brand_pro.jpg';
import colun_cafe from '../img/brand_coluncafe.jpg';
import lipi_plus from '../img/ds_lipiplus.png';
import yo from '../img/main_yo.jpg';
import estar_bien from '../img/main_estarbien.jpg';
import rayfilter from '../img/brand_rayfilter.jpg';
import mckay from '../img/pack_mckay.jpg';
import { PortfolioContext } from '../contexts/Portfolio.context';
import { useContext } from 'react';


const galleryGrid = theme => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(4, 40rem)',
    [theme.breakpoints.down('desktop')]: {
        gridTemplateRows: 'repeat(4, 30rem)',
    },
    [theme.breakpoints.down('mobile')]: {
        gridTemplateColumns: 'repeat(2, 50vw)',
        gridTemplateRows: 'repeat(5, 25rem)',
    },
    gridGap: '1.5rem'
})

const gallery = theme => ({
    gridColumn: '1/2',
    gridRows: '1/2',
    marginRight: '5rem',
    [theme.breakpoints.down('mobile')]: {
        // width: '50vw', 
        marginRight: '0',
        marginLeft: '2rem'
    },
    '& h2': {
        fontFamily: 'Raleway',
        fontSize: '4rem',
        letterSpacing: '.15rem',
        lineHeight: '4rem',
        fontWeight: '700',
        color: theme.palette.primary.main,
        [theme.breakpoints.down('mobile')]: {
            fontSize: '3rem',
            lineHeight: '3rem',
        },
    },
    '& h3': {
        marginTop: '2rem',
        fontSize: '2.3rem',
        fontWeight: '400',
        letterSpacing: '.15rem',
        lineHeight: '2.5rem',
        color: theme.palette.secondary.main,
        [theme.breakpoints.down('mobile')]: {
            fontSize: '2rem',
            lineHeight: '2.5rem',
        },
    },
})

const galleryImg = theme => ({
    backgroundSize:'cover', backgroundPosition: 'center', 
})

const SectionGallery = props => {
    const { width } = useContext(PortfolioContext);
    const mobile = (width <= 500)
    return (
    <Box sx={galleryGrid}> 
        <Box sx={gallery}>
            <h2>Somos<br/>especialistas.</h2>
            <h3>Entregamos planificación, diseño, comunicación y experiencia.</h3>
        </Box>
        <Box sx={[galleryImg, {gridColumn: '2/3', gridRow: '1/2', backgroundImage: `url(${ballerina_pro})`}]}/>
        <Box sx={[galleryImg, {gridColumn: mobile ? '2/3' : '3/4', gridRow:  mobile ? '3/4' : '1/2', backgroundImage: `url(${colun_cafe})`}]}/>
        <Box sx={[galleryImg, {gridColumn: '1/3', gridRow: '2/3', backgroundImage:  `url(${lipi_plus})`}]}/>
        <Box sx={[galleryImg, {gridColumn: '1/2', gridRow: mobile ? '3/4' : '3/5', backgroundImage: `url(${yo})`}]}/>
        <Box sx={[galleryImg, {gridColumn: mobile ? '1/3' : '2/4', gridRow: mobile ? '4/5' : '3/4', backgroundImage: `url(${estar_bien})`}]}/>
        <Box sx={[galleryImg, {gridColumn: mobile ? '1/2' : '2/3', gridRow: mobile ? '5/6' : '4/5', backgroundImage: `url(${rayfilter})`}]}/>
        <Box sx={[galleryImg, {gridColumn: mobile ? '2/3' : '3/4', gridRow: mobile ? '5/6' : '4/5', backgroundImage: `url(${mckay})`}]}/>
    </Box>
   )}

export default SectionGallery;