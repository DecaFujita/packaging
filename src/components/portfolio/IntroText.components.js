import { Box, Container, Grid, Typography } from '@mui/material';


const container = theme => ({
    paddingRight: '3rem',
    width: '30%',
    [theme.breakpoints.down('tablet')]: {
        paddingRight: '2rem',
        paddingLeft: '3rem',
        width: '100%',
    }
})

const containerTags = theme => ({
    marginTop:'-3rem',
    [theme.breakpoints.down('tablet')]: {
        display: 'flex',
        marginBottom: '2rem'
    }
})

const sxclient = theme => ({
    fontWeight: '700',
    color: theme.palette.primary.main
})

const sxdescription = theme => ({
    fontSize: '1.4rem'
})

const sxtags = theme => ({
    fontSize: '1.4rem',
    color: theme.palette.primary.main,
    marginRight: '2rem'
})

const IntroText = props => {
    const { client, project, description, tags, tablet } = props;
    
    return (
        <Box sx={container}>
            <Box>
                <Typography variant='h6' mb={1} sx={sxclient}>{client}</Typography>
                <Typography variant='h3' mb={tablet ? 2 : 4}>{project}</Typography>
                <Typography sx={sxdescription} mb={5}>{description}</Typography>
            </Box>
            <Box sx={containerTags}>
                {tags.map(tag => <Typography sx={sxtags}>{tag}</Typography>)}
            </Box>
        </Box>
    )
}
    

export default IntroText;