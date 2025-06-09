import { Box, Typography, Button, Container } from '@mui/material'
import React from 'react'

import PropTypes from 'prop-types';

const Hero = ({Hdata}) => {

    const HeroStyle = (theme) => ({
        backgroundColor: '#271d2f',
        height: {lg: '460px', xl: '640px'},
        '.container':{
            height: '100%',
        },
        '.hero__bg--desktop':{display: { xs: 'none', md: 'block' }, height: '100%'},
        '.hero__bg--mobile':{display: { xs: 'block', md: 'none' }, height: '100%'},
        '.hero__content':{
            color: '#fff',
            height: '100%',
            [theme.breakpoints.down('md')]: { justifyContent: 'flex-end', paddingBottom: '20px', },
            [theme.breakpoints.up('lg')]: { width: '55%', },
            [theme.breakpoints.up('md')]: { width: '50%', right: '0', },
        },
        '.inner':{
            flexDirection: 'column',
            gap: '1rem',
            paddingY: '4px',
            [theme.breakpoints.down('md')]: {
                justifyContent: 'flex-end',
                paddingBottom: '20px',
            },
            '.inner-box':{
                paddingTop: {md: '160px'},
                width: '100%',
                [theme.breakpoints.down('md')]: {
                    marginBottom: '0.5rem',
                },
            }
        },
        'h1, .desc--desktop, .desc--mobile':{
            fontSize: '1rem',
            fontWeight: '600',
            lineHeight: '1.2',
            textTransform:'uppercase',
        }
    })
    return (
        <Box component={'section'} className='hero flex align-center justify-center relative txt-center' id='home' sx={HeroStyle} >
            <Container maxWidth='lg' className='container flex align-center justify-center relative' >
                <Box component={'div'} className='hero__bg' sx={{height: '100%',}}>
                    <Box component={'img'} src={Hdata?.bgDesk} alt="hero background" className='hero__bg--desktop' />
                    <Box component={'img'} src={Hdata?.bgMobile} alt="hero background" className='hero__bg--mobile' />
                </Box>
                <Box component={'div'} className='hero__content flex justify-center absolute txt-center' >
                    <Box className='inner flex align-center justify-center' >
                        <Box className='inner-box' >
                            <Typography
                                variant='h1'
                                sx={(theme) => ({
                                    fontSize: '27px !important',
                                    marginBottom: '3px',
                                    [theme.breakpoints.up('lg')]: {
                                        fontSize: '28px !important',
                                        lineHeight: '136.5%',
                                    },
                                    [theme.breakpoints.up('md')]: {
                                        fontSize: '22px !important',
                                    },
                                })}
                            >
                                {Hdata?.titleLogo}
                            </Typography>
                            <Typography
                                variant='h1'
                                sx={(theme) => ({
                                    fontSize: {xs: '16px !important', md: '22px !important', lg: '30px !important'},
                                    marginBottom: '3px',
                                    [theme.breakpoints.up('lg')]: {
                                        lineHeight: '136.5%',
                                    }
                                })}
                            >
                                {Hdata?.title}
                            </Typography>
                            <Typography
                                className='desc--desktop'
                                sx={(theme) => ({
                                    display: 'none',
                                    fontSize: '13px !important',
                                    color: '#fff',
                                    marginBottom: '3px',
                                    [theme.breakpoints.up('md')]: {
                                        display: 'block',
                                        fontSize: '22px !important',
                                        lineHeight: '1.5',
                                    },
                                    [theme.breakpoints.up('sm')]: {
                                        fontSize: '16px !important',
                                    },
                                })}
                            >
                                {Hdata?.descDesktop}
                            </Typography>
                            <Typography
                                className='desc--mobile'
                                sx={(theme) => ({
                                    display: 'none',
                                    fontSize: {xs: '15px !important', md: '22px !important'},
                                    color: '#fff',
                                    marginBottom: '3px',
                                    [theme.breakpoints.down('md')]: {
                                        display: 'block',
                                        lineHeight: '1.5',
                                    },
                                })}
                            >
                                {Hdata?.descMobile}
                            </Typography>
                        </Box>
                        <Button
                            href={Hdata?.btnLink}
                            className='btn'
                            variant='contained'
                            sx={{
                                backgroundColor: 'rgb(241, 144, 33)',
                                borderRadius: '50px',
                                borderWidth: 0,
                                display: 'flex',
                                fontSize: {xs: '14px', md: '16px'},
                                fontWeight: '600',
                                height: {xs: '32px', md: '14px'},
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: {xs: '1.6em 1.5em', md: '28px 3em'},
                                lineHeight: {xs: '140%', md: '1.5'},
                                textTransform: 'uppercase',
                                width:{xs: '160px', md: '205px'},
                                '&:hover':{
                                    backgroundColor: '#f4a64d',
                                    borderColor: '#f4a64d',
                                }
                            }}
                        >
                            {Hdata?.btnText}
                        </Button>
                    </Box>
                </Box>
            </Container>
            
        </Box>
    )
}
Hero.propTypes = {
    Hdata: PropTypes.any,
}


export default Hero
