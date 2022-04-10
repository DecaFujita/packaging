import { Box } from '@mui/material';
import { fontWeight } from '@mui/system';

const btnCircle = theme => ({
    display: 'flex',
    height: '9rem',
    width: '9rem',
    borderRadius: '50%',
    background: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: '15rem',
    bottom: '2rem',
    zIndex: '2',
    transform: 'traslateX(10rem)',
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

const CarouselBtnCicle = props => (
    <Box sx={btnCircle}>
        <p>
            Conozca este proyecto
        </p>
    </Box>
);

export default CarouselBtnCicle;