import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import Buttons from '../Utils/Buttons';
import PropTypes from 'prop-types';

const Sb = ({data}) => {

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
        className='relative'
        sx={{
            backgroundColor: 'transparent',
            marginBottom: {xs: '56px', md: '3.5rem', lg: '5rem'},
        }}
    >
        <Container maxWidth="lg" sx={{ padding: '20px', backgroundColor: 'transparent', borderRadius: '8px' }}>
            <Box
                className='flex align-center'
                sx={{
                    backgroundColor: data?.bgC,
                    backgroundImage: data?.bgCL,
                    borderRadius: '8px',
                    color: '#fff',
                    flexDirection:'column',
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
                    {data?.title}
                </Typography>
                <Box sx={DeskStyle} >
                    <Typography sx={ParagraphStyle}> {data?.descD1} </Typography>
                    <Typography className='txt-desc2' sx={ParagraphStyle}>{data?.descD2}</Typography>
                </Box>
                <Box sx={MobiStyle} >
                    <Typography className='txt-desc2' sx={ParagraphStyle}>{data?.descM}</Typography>
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
Sb.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            bgC: PropTypes.string,
            bgCL: PropTypes.string,
            title: PropTypes.string,
            descD1: PropTypes.string,
            descD2: PropTypes.string,
            descM: PropTypes.string,
        })
    ).isRequired,
};

export default Sb
