import { Box } from '@mui/material';
const box = theme => ({
    maxWidth: '100%',
    maxHeigth: '100%',

})

const GalleryImg = props => (
    <Box sx={box, {backgroundImage: `url('${props.img}')`}}>
    </Box>
)

export default GalleryImg;