import CarouselBtnCicle from '../components/carousel/CarouselBtnCicle.component';
import SlideShow from '../components/carousel/CarouselSlideShow.component';
import { Box } from '@mui/material';
import { useContext } from 'react';
import { PortfolioContext } from '../contexts/Portfolio.context';

const carouselSection = theme => ({
    display: 'grid',
    gridTemplateColumns: '1fr repeat(3, 40rem) 1fr',
    gridTemplateRows: 'minmax(50rem, 70vh)',
    [theme.breakpoints.down('desktop')]: {
        gridTemplateColumns: '1fr repeat(3, 30rem) 1fr',
        gridTemplateRows: 'minmax(50rem, 50vh)',
    },
    [theme.breakpoints.down('mobile')]: {
        gridTemplateColumns: '1fr 60rem 1fr',
        gridTemplateRows: '50rem 25rem',
    },
    gridGap: '1.5rem'
})

const openText = theme => ({
    position: 'relative',
    color: theme.palette.primary.main,
    textTransform: 'uppercase',
    fontFamily: 'Raleway',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'center',
    zIndex: 1,
    '& h2': {
        fontSize: '3rem',
        lineHeight: '3.5rem',
        fontWeight: '600',
        letterSpacing: '.1rem'
    },
    '& h1': {
        fontSize: '9.5rem',
        lineHeight: '9rem',
        letterSpacing: '.2rem',
        marginLeft: '-.5rem'
    },
    [theme.breakpoints.down('mobile')]: {
        marginLeft: '2rem',
        marginTop: '-2rem',
        '& h2': {
            fontSize: '2.5rem',
            lineHeight: '2.5rem',
            fontWeight: '600',
            letterSpacing: '.1rem'
        },
        '& h1': {
            fontSize: '5.5rem',
            lineHeight: '5rem',
            letterSpacing: '.2rem',
            marginLeft: '-.5rem',
            marginTop: '.5rem'
        },
    }
})

const bar = theme => ({
    marginTop: '1.8rem',
    display: 'flex',
    background: theme.palette.primary.main,
    height: '1.8rem',
    width: '26rem',
    marginBottom: '1rem',
    [theme.breakpoints.down('mobile')]: {
        marginTop: '1.4rem',
        height: '1.5rem',
        width: '19rem',
    }
})

const section1 = theme => ({
    gridColumn: '2/3',
    [theme.breakpoints.down('mobile')]: {
        gridColumn: '1/-1',
        gridRow: '2/3'
    }
})

const section2 = theme => ({ 
    position: 'relative',
    gridColumn: '3/-1',
    marginBottom: '1.5rem',
    [theme.breakpoints.down('mobile')]: {
        gridColumn: '1/-1',
        gridRow: '1/2'
    }
})

const SectionCarousel = props => {
    const  { width } = useContext(PortfolioContext);
    return (
    <Box sx={carouselSection}>
        <Box sx={section1}>
            <Box sx={openText}>
                <h2>Somos { width > 500 ? <br/> : ' ' } una agencia</h2>
                <h1>full<br/>branding</h1>
                <Box sx={bar}></Box>
            </Box>
        </Box>
        
        <Box sx={section2}>
            <CarouselBtnCicle />
            <SlideShow />
        </Box> 
    </Box>
)};

export default SectionCarousel;