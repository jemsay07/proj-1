import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import Buttons from '../Utils/Buttons';

const data = [
    {
        bgC: '#4E3374',
        bgCL: 'linear-gradient(0deg,rgba(78, 51, 116, 1) 0%, rgba(70, 51, 114, 1) 35%, rgba(146, 100, 143, 1) 100%)',
        title: 'Duis quis pulvinar nulla Cras erat orci vulputate',
        descD1: 'Duis sed lectus odio donec lacinia augue',
        descD2: 'Bibendum lacus urna molestie.',
        descM: 'In sit amet massa felis.',
    }
]

const Sb = () => {

    const ParagraphStyle = {
        fontSize: { xs: '3.722vw', md: '1rem', lg: '1.625rem' },
        fontWeight: 700,
        lineHeight: {sm: '135.68', md: '1.357rem', lg: '140%'},
        marginY: 0,
        '&.txt-desc2': {
            color: '#f4a64d',
            fontSize: { xs: '3.2vw', md: '0.875rem', lg: '1.375rem' },
            marginY: '0.625rem',
            lineHeight: '135.68%'
        },
    };

    const DeskStyle = { display: { xs: 'none', md: 'block' }}
    const MobiStyle = { display: { xs: 'block', md: 'none' }}

  return (
    <Box 
        sx={{
            backgroundColor: 'transparent',
            position: 'relative',
            marginBottom: {xs: '56px', md: '3.5rem', lg: '5rem'},
        }}
    >
        <Container maxWidth="lg" sx={{ padding: '20px', backgroundColor: 'transparent', borderRadius: '8px' }}>
            <Box
                sx={{
                    backgroundColor: data[0].bgC,
                    backgroundImage: data[0].bgCL,
                    borderRadius: '8px',
                    color: '#fff',
                    display: 'flex',
                    flexDirection:'column',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    height: {xs: '79.467vw', md: '35.139vw', lg:'480px'},
                    paddingY: { xs: '40px', md: '64px' },
                    marginTop: {xs: '56px', md: '3.5rem', lg: '5rem'},
                    position: 'relative',
                    textAlign: 'center',
                }}>
                <Typography
                    variant="h4"
                    sx={{
                        fontSize: { xs: '3.733vw', md: '1rem', lg: '1.625rem' },
                        fontWeight: 'bold',
                        lineHeight: {sm: '135.68%', md: '1.357rem', lg: '140%'},
                        marginY: 0,
                        maxWidth: {xs: '71.978vw'},
                        textTransform: 'uppercase',
                    }}
                >
                    {data[0].title}
                </Typography>
                <Box sx={DeskStyle} >
                    <Typography sx={ParagraphStyle}> {data[0].descD1} </Typography>
                    <Typography className='txt-desc2' sx={ParagraphStyle}>{data[0].descD2}</Typography>
                </Box>
                <Box sx={MobiStyle} >
                    <Typography className='txt-desc2' sx={ParagraphStyle}>{data[0].descM}</Typography>
                </Box>
                <Box sx={DeskStyle}>
                    <Buttons
                        text='vulputate'
                        variant='trans'
                        link='#'
                    />
                </Box>
            </Box>
            <Box sx={[ MobiStyle, { marginTop: '1rem' } ]}>
                <Buttons
                    text='vulputate'
                    variant='trans'
                    link='#'
                />
            </Box>
        </Container>
    </Box>
  )
}

export default Sb
