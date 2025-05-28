import React, { useEffect, useState } from 'react'
import { Box, Button, Container, Typography } from '@mui/material'
import { AspectRatio } from '@mui/icons-material';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import Buttons from '../Utils/Buttons';

const data = [
    {
        title: 'Pellentesque quis',
        desc: ' Nam a accumsan arcu. Phasellus lacinia risus at nibh volutpat varius. Morbi orci magna.',
        btnText: 'fringilla',
        btnLink: '#',
    }
]

const swiperMobile = [
    { image: 'https://placehold.co/296x213/271d2f/19171a', },
    { image: 'https://placehold.co/296x213/271d2f/19171a', },
    { image: 'https://placehold.co/296x213/271d2f/19171a', },
]

const Exclusive = () => {
    const [isMoobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 600);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call it once to set the initial state

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const ExclusiveContent = {
        backgroundColor: '#f3f3f3',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: { xs: '215px', sm: '180px', md: '220px', lg: '300px' },
        overflow: 'hidden',
    }
  return (
    <Box
        component={'section'}
        className='exclusive'
        id='exclusive'
        sx={{ 
            backgroundColor: '#FFF',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            paddingY: {xs: '2rem', md: '80px'},
        }}
    >
        <Container maxWidth='lg'>
            <Box component={'div'} sx={{marginBottom: { xs: '1.5rem', md: '3rem' },}}>
                {data.map((data, key) => {
                    return <Box key={key} component={'div'} className='exclusive__content'>
                        <Typography
                            variant='h2'
                            component={'h2'}
                            className='exclusive__content--title'
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                fontSize: { xs: '20px', md: '32px' },
                                fontWeight: 700,
                                lineHeight: '140%',
                            }}
                        >
                            {data.title}
                            <Box 
                                component={'span'}
                                sx={{
                                    backgroundColor: '#f29b37',
                                    display:'inline-block',
                                    marginY: { xs: '1rem', md: '1.05rem' },
                                    minHeight: '3px',
                                    height: {md:'4px'},
                                    width: {xs: '24px', md: '91.12px'},
                                }}
                            ></Box>
                        </Typography>
                        <Typography
                            variant='body1'
                            component={'p'}
                            className='exclusive__content--desc'
                            sx={{
                                color: '#1A1A1A',
                                fontSize: { xs: '12px', md: '14px', lg: '20px' },
                                lineHeight: '140%',
                                marginBottom: '24px',
                            }}
                        >
                            {data.desc}
                        </Typography>
                    </Box>
                })}
            </Box>
            <Box
                component={'div'}
                sx={{ marginBottom: { xs: '1.5rem', md: '3rem', lg: '3.5rem' } }} >
                {isMoobile ? (
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={'auto'}
                    navigation={false}
                    pagination={false}
                    scrollbar={false}
                    grabCursor={false}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.6,
                            spaceBetween: 10,
                            freeMode: true,
                            centeredSlides: true,
                        },
                        600: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                            freeMode: true,
                            centeredSlides: true,
                        },
                        900: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    >
                    {swiperMobile.map((child, index) => (
                        <SwiperSlide key={index}>
                            <Box
                                component={'div'}
                                className='exclusive__content--img'
                                sx={[ExclusiveContent, {width: 'inherit'}]}
                            >
                                <AspectRatio
                                    objectfit="cover"
                                    ratio={isMoobile ? 1 : 1.5}
                                >
                                    <img src={child.image} alt="swiper img"/>
                                </AspectRatio>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
                ):(
                    <Box
                        component={'div'}
                        className='exclusive__content'
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            gap: '20px',
                            marginTop: { xs: '1rem', md: '1.05rem' },
                        }}
                    >
                        {swiperMobile.map((data, index) => (
                            <Box
                                key={index}
                                component={'div'}
                                className='exclusive__content--img'
                                sx={[ExclusiveContent, { width: 'calc(100% / 3)' }]}
                            >
                                <AspectRatio
                                    variant="soft"
                                    objectfit="cover"
                                    ratio={isMoobile ? 1 : 1.5}
                                >
                                    <img src={data.image} alt="swiper img"/>
                                </AspectRatio>
                            </Box>
                        ))}
                    </Box>
                )}
            </Box>
            <Buttons
                text={data[0].btnText}
                variant='trans'
                color='#000'
                link={data[0].btnLink}
                padding={{ xs: '14px 40px', sm: '25px 40px' }}
                width={{ xs: 'calc(275px - 4px)', sm: 'calc(221px - 4px)', md: '220px' }}
            />
        </Container>
    </Box>
  )
}

export default Exclusive
