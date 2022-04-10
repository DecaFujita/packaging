import { Box, Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { containerStyle } from '../styles/styles';
import portafolioList from '../assets/portfolioList';
import { Fragment } from 'react';


const text = theme => ({
    
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

const PortafolioView = props => {
    const { id } = useParams();
    const project = portafolioList.find(proj => proj.id === parseInt(id))

    return (
        <Box sx={[containerStyle, {paddingTop: '10.5rem', display: 'flex', flexWrap: 'wrap', justifyContent:'space-between'}]} maxWidth="lg">
            <Box sx={[text, {width: '25%', height:'50rem', paddingRight: '3rem'}]}>
                <Box>
                    <Typography variant='h6' mb={1} sx={client}>{project.client}</Typography>
                    <Typography variant='h3' mb={5}>{project.project}</Typography>
                    <Typography sx={description} mb={5}>{project.description}</Typography>
                </Box>
                <Box>
                    {project.tags.map(tag => <Typography sx={tags}>{tag}</Typography>)}
                </Box>
            </Box>
            <img src={project.imgHero} style={{height: '50rem', marginBottom: '2rem'}} alt={[project.altHero]} />
            { project.portfolioImgs.map (item => 
                <img style={{ height: 'auto', width: '100%' }} src={item.img} alt={item.alt} />
            )}
        </Box>
    )
}

export default PortafolioView; 