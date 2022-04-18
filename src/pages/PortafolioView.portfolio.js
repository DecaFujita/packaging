import { Box, Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { containerStyle } from '../styles/styles';
import portafolioList from '../assets/portfolioList';
import { useContext } from 'react';
import { PortfolioContext } from '../contexts/Portfolio.context';
import { CardMedia } from '@mui/material';

const containerTablet = theme => ({
    [theme.breakpoints.down('tablet')]: {
        width: '100%',
      },
})

const client = theme => ({
    fontWeight: '700',
    color: theme.palette.primary.main
})

const description = theme => ({
    fontSize: '1.4rem'
})

const tags = theme => ({
    fontSize: '1.4rem',
    color: theme.palette.primary.main
})

const imgHero = theme => ({
    height: '50rem',
    background: 'url()'
})
const PortafolioView = props => {
    const { id } = useParams();
    const { width } = useContext(PortfolioContext);
    const project = portafolioList.find(proj => proj.id === parseInt(id))

    const desktop = (width <= 1200)
    const tablet = (width <= 700)

    return (
        <Box sx={[containerStyle, tablet && containerTablet, {paddingTop: '10.5rem', display: 'flex', flexWrap: 'wrap', justifyContent:'space-between'}]} maxWidth="lg">
            <Box sx={{width: tablet ? '100%' : '30%', paddingRight:  tablet ? '1rem': '3rem'}}>
                <Box>
                    <Typography variant='h6' mb={1} sx={client}>{project.client}</Typography>
                    <Typography variant='h3' mb={tablet ? 2 : 5}>{project.project}</Typography>
                    <Typography sx={description} mb={5}>{project.description}</Typography>
                </Box>
                <Box sx={{marginTop:'-3rem', display: tablet && 'flex'}}>
                    {project.tags.map(tag => <Typography sx={[tags, {marginRight: '2rem'}]}>{tag}</Typography>)}
                </Box>
            </Box>

            {/* <img src={project.imgHero} style={{height: desktop ? 'auto' : '50rem', marginBottom: '2rem', width: desktop ? '75%' : 'auto'}} alt={[project.altHero]} />
             */}

            <CardMedia 
                sx={[{ height: desktop ? 'fit-content':'50rem', width: desktop ? '70%' : 'auto' }, tablet && {width: '100%'}]}
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