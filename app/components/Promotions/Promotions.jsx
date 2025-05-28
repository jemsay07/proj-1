import React, { useEffect, useState } from 'react'
import { Box, Container, Typography } from '@mui/material'
import { AspectRatio } from '@mui/icons-material';
import Heading from '../Utils/Heading'

import Pattern3 from '../../../assets/images/bg/pattern3.svg'


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
        bgCL: 'linear-gradient(0deg,#eba250 0%, #5c3301 5%, #f2860a 100%);',
        imgUrl: 'https://placehold.co/633x336/eba250/5c3301',
        text1: 'Lorem ipsum',
        text2: 'Dolor sit amet',
    },
    {
        bgCL: 'linear-gradient(0deg,#eba250 0%, #5c3301 5%, #f2860a 100%);',
        imgUrl: 'https://placehold.co/633x336/eba250/5c3301',
        text1: 'Lorem ipsum',
        text2: 'Dolor sit amet',
    }
];

const Promotions = () => {
  const [isMoobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call it once to set the initial state

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const PromotionsContent = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'inherit',
        height: { xs: '215px', sm: '180px', md: '220px', lg: '300px' },
        borderRadius: '8px',
        overflow: 'hidden',
    }

    const InnerImgStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        height: '100%',
    }
    const InnerTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: {xs: '5px', md: '10px'},
        width: '50%',
        height: '100%',
    }
    const ParagraphStyle = {
        fontSize: {xs: '0.875rem', md: '1.533vw', lg: '1.25rem'},
        fontWeight: 600,
        fontFamily: 'Poppins, sans-serif',
        lineHeight: '135.68%',
        color: '#fff',
        textAlign: 'center',
        marginTop: {xs: 0, md: '10px'},
    };

  return (
    <Box
        id="promotions"
        sx={{
            backgroundColor: '#271d2f',
            backgroundImage: `url(${Pattern3.src})`,
            color: '#fff',
            padding: '20px',
            position: 'relative',
            paddingY: {xs: '40px', md: '64px'},
            zIndex: 1,
        }}
    >
        <Container maxWidth="lg">
            <Heading
                title="Bibendum"
                display={true} // Assuming you want to display the title
            />
            <Box sx={{ flexGrow: 1, marginBottom: { xs: '2rem', md: '3.5rem' } }}>
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
                                slidesPerView: 1,
                                spaceBetween: 10,
                                freeMode: true,
                                centeredSlides: true,
                            },
                            600: {
                                slidesPerView: 1.5,
                                spaceBetween: 20,
                                freeMode: true,
                                centeredSlides: true,
                            },
                            900: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                        }}
                        >
                        {data.map((child, index) => (
                            <SwiperSlide key={index}>
                                <Box
                                    component={'div'}
                                    className='promotions__content--img'
                                    sx={[PromotionsContent, {background: child.bgCL}]}
                                >
                                    <Box sx={InnerImgStyle}>
                                        <AspectRatio
                                            objectfit="cover"
                                            ratio={1.5}
                                        >
                                            <img src={child.imgUrl} alt="swiper img"/>
                                        </AspectRatio>
                                    </Box>
                                    <Box sx={InnerTextStyle}>
                                        <Box sx={{ paddingY: '10px', textAlign: 'center' }}>
                                            <Typography component={'h3'} sx={ParagraphStyle}>
                                                {child.text1}
                                            </Typography>
                                            <Typography sx={ParagraphStyle}>
                                                {child.text2}
                                            </Typography>
                                        </Box>
                                        <Buttons
                                            text="View More"
                                            variant="default"
                                            fontSize={{xs: '0.8rem', md: '1rem'}}
                                            width={{xs: 'calc(100% - 20px)', sm: 'calc(100% - 30px)', md: '100%', lg: '166px'}}
                                        />
                                    </Box>
                                </Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)' },
                            gap: '20px',
                            marginBottom: { xs: '2rem', sm: '1.25rem', md: '3.5rem' },
                        }}
                    >
                        {data.map((child, index) => (
                            <Box
                                key={index}
                                component={'div'}
                                className='promotions__content--img'
                                sx={[PromotionsContent, {background: child.bgCL}]}
                            >
                                <Box sx={InnerImgStyle}>
                                    <AspectRatio
                                        objectfit="cover"
                                        ratio={1.5}
                                    >
                                        <img src={child.imgUrl} alt="swiper img"/>
                                    </AspectRatio>
                                </Box>
                                <Box sx={InnerTextStyle}>
                                    <Box sx={{ paddingY: '10px', textAlign: 'center' }}>
                                        <Typography component={'h3'} sx={ParagraphStyle}>
                                            {child.text1}
                                        </Typography>
                                        <Typography sx={ParagraphStyle}>
                                            {child.text2}
                                        </Typography>
                                    </Box>
                                    <Buttons
                                        text="Sit amet"
                                        variant="default"
                                        fontSize={{xs: '0.8rem', md: '1rem'}}
                                        width={{xs: 'calc(100% - 20px)', sm: 'calc(100% - 30px)', md: '100%', lg: '166px'}}
                                    />
                                </Box>
                            </Box>
                        ))}
                    </Box>
                )}
                <Buttons
                    text="Molestie"
                    variant="trans"
                    width={{xs: 'calc(100% - 20px)', sm: '210px'}}
                />
            </Box>
        </Container>
    </Box>
  )
}

export default Promotions
