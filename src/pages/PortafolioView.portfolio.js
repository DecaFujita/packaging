import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { containerStyle } from '../styles/styles';
import portafolioList from '../assets/portfolioList';
import { useContext } from 'react';
import { PortfolioContext } from '../contexts/Portfolio.context';
import { CardMedia } from '@mui/material';
import IntroText from '../components/portfolio/IntroText.components';

const containerTablet = theme => ({
    [theme.breakpoints.down('tablet')]: { width: '100%' },
})

const imgHero = theme => ({
    height: '50rem',
    width: 'auto',
    [theme.breakpoints.down('desktop')]: {
        height: 'auto',
        width: '70%'
    },
    [theme.breakpoints.down('tablet')]: {
        width: '100%', 
        height: 'auto'
    }
})


const PortafolioView = props => {
    const { id } = useParams();
    const { width } = useContext(PortfolioContext);
    const project = portafolioList.find(proj => proj.id === parseInt(id))
    const tablet = (width <= 700)

    return (
        <Box sx={[containerStyle, tablet && containerTablet, {paddingTop: '10.5rem', display: 'flex', flexWrap: 'wrap', justifyContent:'space-between'}]} maxWidth="lg">
            <IntroText client={project.client} project={project.project} description={project.description} tags={project.tags}/>
            <CardMedia 
                sx={imgHero}
                component="img"
                image={project.imgHero}
                alt={project.altHero}
            />
            
            { project.portfolioImgs.map (item => 
                <img style={{ height: 'auto', width: '100%' }} src={item.img} alt={item.alt} />
            )}
        </Box>
    )
}

export default PortafolioView; 