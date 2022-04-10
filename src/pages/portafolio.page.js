import { Box } from '@mui/material';
import { containerStyle } from '../styles/styles';
import portafolioList from '../assets/portfolioList';
import { useState } from 'react';
import { PortfolioContext } from '../contexts/Portfolio.context';
import { useContext } from 'react';



const gridImages = theme => ({
    width: '100%',
    paddingTop: '10rem',
    display: 'flex',
    flexWrap: 'wrap'
})

const image = theme => ({ width: '32.2%', height: '330px', margin: '.5rem' })

const caps = theme => ({
    paddingTop: '3rem',
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
    const [ isPage, setIsPage ] = useState(portafolioList);
    const [ isActiveLink, setIsActiveLink ] = useState(false);
    const { width } = useContext(PortfolioContext);
    const mobile = (width <= 500)
  
    const shuffle = (arr) => {
        let currentIndex = arr.length
        while (currentIndex !== 0) {
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--; 
            [ arr[currentIndex], arr[randomIndex]  ] = [ arr[randomIndex], arr[currentIndex] ];
        }
        return arr;
    }

    const handleFilter = (val) => {
        if (val === 'all') {
            setIsPage(portafolioList)
            setIsActiveLink(false)
        } else {
            let updatedList = portafolioList.filter(item => item.tags.includes(val))
            setIsActiveLink(val)
            setIsPage(shuffle(updatedList))
        }
    }

    return (
        <Box sx={containerStyle}>
            <Box sx={gridImages}>                     
                {isPage.map((item, index) => 
                    <Box key={index} sx={[image, {backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center'}]}>
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
