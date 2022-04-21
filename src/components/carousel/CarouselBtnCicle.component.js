import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const btnCircle = theme => ({
    display: 'flex',
    height: '9rem',
    width: '9rem',
    borderRadius: '50%',
    background: theme.palette.primary.main,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: '15rem',
    bottom: '2rem',
    zIndex: '2',
    transform: 'traslateX(10rem)',
    cursor: 'pointer',
    '& p': {
        textAlign: 'center',
        fontFamily: 'Raleway',
        fontSize: '1.4rem',
        margin: '15px',
        lineHeight: '1.5rem',
        fontWeight: '700',
        color: 'white'
    },
    [theme.breakpoints.down('mobile')]: {
        height: '11rem',
        width: '11rem',
        bottom: '-5rem',
        '& p': {
            fontSize: '1.6rem',
            lineHeight: '1.6rem',
        },
    },
})

const CarouselBtnCicle = props => {
    const navigate = useNavigate();
    return (
    <Box sx={btnCircle} onClick={()=>navigate('/portafolio')}>
        <p>
            Conozca este proyecto
        </p>
    </Box>
)};

export default CarouselBtnCicle;