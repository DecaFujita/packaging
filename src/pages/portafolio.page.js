import { Box } from '@mui/material';
import { containerStyle } from '../styles/styles';
import portafolioList from '../assets/portfolioList';
import { useNavigate } from 'react-router-dom';

const gridImages = theme => ({
    width: '100%',
    paddingTop: '10rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
})

const image = theme => ({ 
    width: '32.2%', 
    height: '330px',
    margin: '.5rem',
    [theme.breakpoints.down('tablet')]: {
        width: '48.3%',
        height: '25rem',
    },
    [theme.breakpoints.down('mobile')]: {
        width: '100%',
        height: '20rem',
        margin: '0.2rem'
    }

})

const caps = theme => ({
    paddingTop: '3rem',
    [theme.breakpoints.down('mobile')]: {
        paddingTop: '1rem',
    },
    position: 'relative',
    width: '100%',
    height: '100%',
    transition: 'opacity .5s linear',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0 ,
    cursor: 'pointer',
    color: theme.palette.secondary.dark,
    '& h2': {
        color: 'white',
        borderBottom: '1px solid white',
        padding: '.5rem 0 2rem 0',
        margin: '0 1rem 2rem 1rem'
    },
    '& p': { fontSize: '1.4rem',
        '&:hover': { color: 'white' }
    },
    '&:hover': {
        opacity: 1,
        background: theme.palette.secondary.light
    }
})

const seeMore = theme => ({ position: 'absolute', right: '1rem', bottom: '.5rem' })

const Portafolio = props => {
    // const [ isPage, setIsPage ] = useState(portafolioList);
    // const isPage = useRef(portafolioList);
    
    const navigate = useNavigate();

    return (
        <Box sx={containerStyle}>
            <Box sx={gridImages}>                     
                {portafolioList.map((item, index) => 
                    <Box 
                        key={index} 
                        sx={[image, {backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center'}]}
                        onClick={()=> navigate(`/portafolio/${item.id}`)}
                        >
                        <Box sx={caps}>
                            <h3>{item.client}</h3>
                            <h2>{item.project}</h2>

                            { item.tags.map((tag, index) => <p key={`tag-${index}`}>{tag}</p>)}

                            <Box sx={seeMore}>
                                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.625 0H8.375V7.875L0.5 7.875L0.5 10.125H8.375V18H10.625V10.125H18.5V7.875L10.625 7.875V0Z" fill="white"/>
                                </svg>
                            </Box>
                        </Box>
                    </Box>
                )}
            </Box>
        </Box>
    )
};

export default Portafolio;
