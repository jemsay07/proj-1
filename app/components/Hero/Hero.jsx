import { Box, Typography, Button, Container } from '@mui/material'
import React from 'react'


const data = [
    {
        bgDesk: 'https://placehold.co/1360x460/271d2f/19171a',
        bgMobile: 'https://placehold.co/750x544/19171a/271d2f',
        titleLogo: 'Quisquam',
        title: '100% Adipisicing elit',
        descDesktop: 'voluptatibus d.',
        descMobile: 'voluptatibus m.',
        btnText: 'Join Now',
        btnLink: '#',
        
    }
]

const Hero = () => {
  return (
    <Box 
        component={'section'}
        className='hero'
        id='home'
        sx={{ 
            backgroundColor: '#271d2f',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            height: {lg: '460px', xl: '640px'}
        }}
    >
        <Container 
            maxWidth='lg'
            sx={{ 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                position: 'relative',
            }}
        >
            <Box component={'div'} className='hero__bg' sx={{height: '100%',}}>
                <Box 
                    component={'img'}
                    src={data[0].bgDesk}
                    alt="hero background"
                    className='hero__bg--desktop'
                    sx={{ display: { xs: 'none', md: 'block' }, height: '100%' }}
                />
                <Box 
                    component={'img'}
                    src={data[0].bgMobile}
                    alt="hero background"
                    className='hero__bg--mobile'
                    sx={{ display: { xs: 'bloc', md: 'none' }, height: '100%' }}
                />
            </Box>
            <Box 
                component={'div'}
                className='hero__content'
                sx={(theme)=> ({
                    display: 'flex',
                    justifyContent: 'center',
                    position: 'absolute',
                    color: '#fff',
                    height: '100%',
                    [theme.breakpoints.down('md')]: {
                        justifyContent: 'flex-end',
                        paddingBottom: '20px',
                    },
                    
                    [theme.breakpoints.up('lg')]: {
                        width: '55%',
                    },
                    [theme.breakpoints.up('md')]: {
                        width: '50%',
                        textAlign: 'center',
                        right: '0',
                    },
                })}
            >
                <Box
                    sx={(theme)=> ({
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '1rem',
                        paddingY: '4px',
                        [theme.breakpoints.down('md')]: {
                            justifyContent: 'flex-end',
                            paddingBottom: '20px',
                        },
                    })}
                >
                    <Box
                        sx={(theme) => ({
                            paddingTop: {md: '160px'},
                            width: '100%',
                            [theme.breakpoints.down('md')]: {
                                marginBottom: '0.5rem',
                            },
                        })}
                    >
                        <Typography
                            variant='h1'
                            sx={(theme) => ({
                                fontSize: '27px',
                                fontWeight: '600',
                                lineHeight: '1.2',
                                marginBottom: '3px',
                                textTransform:'uppercase',
                                [theme.breakpoints.up('lg')]: {
                                    fontSize: '28px',
                                    lineHeight: '136.5%',
                                },
                                [theme.breakpoints.up('md')]: {
                                    fontSize: '22px',
                                },
                            })}
                        >
                            {data[0].titleLogo}
                        </Typography>
                        <Typography
                            variant='h1'
                            sx={(theme) => ({
                                fontSize: {xs: '16px', md: '22px', lg: '30px'},
                                fontWeight: '600',
                                lineHeight: '1.2',
                                marginBottom: '3px',
                                textTransform:'uppercase',
                                [theme.breakpoints.up('lg')]: {
                                    lineHeight: '136.5%',
                                }
                            })}
                        >
                            {data[0].title}
                        </Typography>
                        <Typography
                            className='desc--desktop'
                            sx={(theme) => ({
                                display: 'none',
                                fontSize: '13px',
                                fontWeight: '600',
                                lineHeight: '1.2',
                                color: '#fff',
                                marginBottom: '3px',
                                textTransform:'uppercase',
                                [theme.breakpoints.up('md')]: {
                                    display: 'block',
                                    fontSize: '22px',
                                    lineHeight: '1.5',
                                },
                                [theme.breakpoints.up('sm')]: {
                                    fontSize: '16px',
                                },
                            })}
                        >
                            {data[0].descDesktop}
                        </Typography>
                        <Typography
                            className='desc--mobile'
                            sx={(theme) => ({
                                display: 'none',
                                fontSize: {xs: '15px', md: '22px'},
                                fontWeight: '600',
                                lineHeight: '1.2',
                                color: '#fff',
                                marginBottom: '3px',
                                textTransform:'uppercase',
                                [theme.breakpoints.down('md')]: {
                                    display: 'block',
                                    lineHeight: '1.5',
                                },
                            })}
                        >
                            {data[0].descMobile}
                        </Typography>
                    </Box>
                    <Button
                        href={data[0].btnLink}
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
                        {data[0].btnText}
                    </Button>
                </Box>
            </Box>
        </Container>
        
    </Box>
  )
}

export default Hero
