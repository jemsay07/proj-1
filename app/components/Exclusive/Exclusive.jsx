import React, { useEffect, useState } from 'react'
import { Box, Container, Typography } from '@mui/material'
import { AspectRatio } from '@mui/icons-material';

import PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import Buttons from '../Utils/Buttons';

const Exclusive = ({Edata}) => {

    const Ndata = Edata[0];
    const SwiperMobile = Edata[1]?.swiperData;

    const [isMobile, setIsMobile] = useState(false);
    
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
            className='exclusive flex align-center justify-center'
            id='exclusive'
            sx={{ 
                backgroundColor: '#FFF',
                textAlign: 'center',
                position: 'relative',
                paddingY: {xs: '2rem', md: '80px'},
            }}
        >
            <Container maxWidth='lg'>
                <Box component={'div'} sx={{marginBottom: { xs: '1.5rem', md: '3rem' },}}>
                    <Box component={'div'} className='exclusive__content'>
                        <Typography
                            variant='h2'
                            component={'h2'}
                            className='exclusive__content--title flex align-center justify-center'
                            sx={{
                                flexDirection: 'column',
                                fontSize: { xs: '20px', md: '32px' },
                                fontWeight: 700,
                                lineHeight: '140%',
                            }}
                        >
                            {Ndata?.title}
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
                            {Ndata?.desc}
                        </Typography>
                    </Box>
                </Box>
                <Box
                    component={'div'}
                    sx={{ marginBottom: { xs: '1.5rem', md: '3rem', lg: '3.5rem' } }} >
                    {isMobile ? (
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
                        {SwiperMobile.map((child, index) => (
                            <SwiperSlide key={index}>
                                <Box
                                    component={'div'}
                                    className='exclusive__content--img'
                                    sx={[ExclusiveContent, {width: 'inherit'}]}
                                >
                                    <AspectRatio
                                        objectfit="cover"
                                        ratio={isMobile ? 1 : 1.5}
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
                            className='exclusive__content flex align-center justify-center'
                            sx={{
                                flexDirection: 'row',
                                gap: '20px',
                                marginTop: { xs: '1rem', md: '1.05rem' },
                            }}
                        >
                            {SwiperMobile.map((data, index) => (
                                <Box
                                    key={index}
                                    component={'div'}
                                    className='exclusive__content--img'
                                    sx={[ExclusiveContent, { width: 'calc(100% / 3)' }]}
                                >
                                    <AspectRatio
                                        variant="soft"
                                        objectfit="cover"
                                        ratio={isMobile ? 1 : 1.5}
                                    >
                                        <img src={data.image} alt="swiper img"/>
                                    </AspectRatio>
                                </Box>
                            ))}
                        </Box>
                    )}
                </Box>
                <Buttons
                    text={Ndata?.btnText}
                    variant='trans'
                    color='#000'
                    link={Ndata?.btnLink}
                    padding={{ xs: '14px 40px', sm: '25px 40px' }}
                    width={{ xs: 'calc(275px - 4px)', sm: 'calc(221px - 4px)', md: '220px' }}
                />
            </Container>
        </Box>
    )
}


Exclusive.propTypes = {
    Edata: PropTypes.array.isRequired,
};

export default Exclusive
