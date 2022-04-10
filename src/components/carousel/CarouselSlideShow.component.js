import heroKlauben from  '../../img/slide_klauben_HI.jpg';
import heroWrapioca from '../../img/slide_wrapioca_HI.jpg';
import heroYoPilates from '../../img/slide_yo_HI.jpg';
import { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import { Box } from '@mui/material';

const container = theme => ({ height: '100%',width: '100%' })

const slideshow = theme => ({ height: '100%', width: '100%', overflow: 'hidden' })

const slideFrame = theme => ({
    height: '100%',
    width: '400%',
    display: 'flex',
    background: 'grey',
    position: 'relative',
})

const img = theme => ({ width: '25%', backgroundSize: 'cover' })

const slideshowDots = theme => ({
    position: 'absolute',
    width: '30rem',
    display: 'flex',
    left: '2rem',
    bottom: '1rem',
    zIndez: '2'
})

const dot = theme => ({
    width: '.8rem',
    height: '.8rem',
    borderRadius: '50px',
    marginRight: '1rem',
    backgroundColor: theme.palette.secondary.light
})

const SlideShow = props => {
    
    const tl = anime.timeline({ easing: 'easeOutExpo', loop: true, duration: 3000 });

    useEffect(() => {
        tl.add({ targets: '#slide', translateX: '-25%' })
        .add({ targets: '#dot2', backgroundColor: '#1EB5D7' },'-=3000')
        .add({ targets: '#slide', translateX: '-50%' })
        .add({ targets: '#dot3', backgroundColor: '#1EB5D7' },'-=3000')
        .add({ targets: '#dot2', backgroundColor: '#B9B4B0' },'-=3000')
        .add({ targets: '#slide', translateX: '-75%' })
        .add({ targets: '#dot1', backgroundColor: '#1EB5D7' },'-=3000')
        .add({ targets: '#dot3', backgroundColor: '#B9B4B0' },'-=3000')
    }, [])

    return (
    <Box sx={container}>
        <Box sx={slideshow}>
            <Box id='slide' sx={slideFrame}>
                <Box sx={[{ background: `url(${heroYoPilates})`}, img]}/>
                <Box sx={[{ background: `url(${heroKlauben})`}, img]}/>
                <Box sx={[{ background: `url(${heroWrapioca})`}, img]}/>
                <Box sx={[{ background: `url(${heroYoPilates})`}, img]}/>
            </Box> 
        </Box>
        <Box sx={slideshowDots}>
            <Box id='dot1' sx={dot} />
            <Box id='dot2' sx={dot} />
            <Box id='dot3' sx={dot} />
        </Box>
    </Box>
    
)}

export default SlideShow;