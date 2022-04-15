import { Fragment } from "react";
import { Box } from '@mui/material';
import SectionCarousel from '../sections/Carousel.section';
import SectionGallery from '../sections/Gallery.section';
import { containerStyle } from '../styles/styles'


const Home = props => {
    return (
        <Fragment> 
            <SectionCarousel width={props.width}/>
            <SectionGallery />
        </Fragment>

    )
};

export default Home;