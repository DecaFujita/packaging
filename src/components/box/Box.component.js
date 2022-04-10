import { Box } from '@mui/material';

const box = (theme) => ({ 
    height: '100px',
    width: '100px',
    background: theme.palette.primary.main,
});

const BoxComponent = props => {
    return(
        <Box sx={box}></Box>
    )
}
export default BoxComponent;
