import { Fragment } from "react";
import SectionCarousel from '../sections/Carousel.section';
import SectionGallery from '../sections/Gallery.section';


const Home = props => {
    return (
        <Fragment> 
            <SectionCarousel width={props.width}/>
            <SectionGallery />
        </Fragment>

    )
};

export default Home;