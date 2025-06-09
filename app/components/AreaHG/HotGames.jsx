import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import Heading from '../Utils/Heading'

import PropTypes from 'prop-types';

import { AspectRatio } from '@mui/icons-material';

import { Swiper, SwiperSlide } from 'swiper/react';

// import { Navigation, Pagination, Scrollbar, A11y  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import Buttons from '../Utils/Buttons';

const ppFontSize = [
  {
    fontSizeLg: "2rem",
    fontSizeMd: "1.75rem",
    fontSizeSm: "1.5rem",
    fontSizeXs: "1.25rem"
  }
];

const HotGames = ({data}) => {
  const GameCardStyle = {
    '&.game-card': {
        borderRadius: '8px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: {xs: '378px', sm: '390px', md: '420px', lg: '468px'},
        marginBottom: {xs:'16px', sm:'20px', md:'24px', lg:'28px'},
        position: 'relative',
        '&:hover .hover-overlay, &:active .hover-overlay, &:focus .hover-overlay': {
            opacity: 1,
            transition: 'opacity 0.3s ease-in-out',
        },
    }
  };
  const HoverOverlayStyle = {
    '&.hover-overlay': {
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        opacity: 0,
        transition: 'opacity 0.3s ease-in-out',
        color: '#fff',
        gap: '0.875rem',
    }
  };

  const GameInnerTitleStyle = {
    '&.game-inner-title': {
        position: 'absolute',
        borderRadius: '4px',
        bottom: '20px',
        padding: '0.5rem',
        textAlign: 'center',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: {md: '3.8rem'},
    }
  }

  const GameTextStyle = {
    '&.game-text': {
        color: '#fff',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif;',
        fontWeight: 500,
        lineHeight: '140%',
        textAlign: 'center',
    }
  };
  return (
    <Box id="hot-games">
        <Container maxWidth='lg'>
            <Heading
                title="Phasellus"
                fontSize={ppFontSize}
                display={true} // Assuming you want to display the title
            />
            <Swiper
                spaceBetween={30}
                slidesPerView={4}
                navigation={false}
                pagination={false}
                scrollbar={false}
                breakpoints={{
                    0: {
                        slidesPerView: 1.4,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 12,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 14,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 16,
                    },
                }}
            >
                {
                    data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Box
                                className='relative'
                                sx={{
                                    cursor: 'pointer',
                                    width: 'inherit',
                                }}
                            >
                                <Box
                                    className='game-card'
                                    sx={[GameCardStyle, {background: item.bgC, }]}
                                >
                                    <AspectRatio
                                        variant="soft"
                                        objectfit="cover"
                                        ratio={1 / 1.5}
                                    >

                                        <img src={`${item.imgUrl}`} alt={`Game ${item.title}`} />
                                    </AspectRatio>
                                    <Box
                                        className='hover-overlay'
                                        sx={HoverOverlayStyle}
                                    >
                                        <Buttons
                                            text='Phasellus'
                                            variant='default'
                                            width={{xs: "180px", sm: "210px"}}
                                        />
                                        <Buttons
                                            text='Phasellus'
                                            variant='trans'
                                            width={{xs: "180px", sm: "210px"}}
                                        />
                                    </Box>
                                    <Box
                                        className='game-inner-title'
                                        sx={GameInnerTitleStyle} 
                                    >
                                        <Typography
                                            component={'h3'}
                                            className='game-text'
                                            sx={[GameTextStyle, {
                                                fontWeight: '600 !important',
                                                textTransform: 'uppercase',
                                                textOverflow: 'ellipsis',
                                                // display: '-webkit-box',
                                                // webkitLineClamp: '2',
                                                // webkitBoxOrient: 'vertical',
                                                fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.5rem' },
                                                width: '100%',
                                                overflow: 'hidden',
                                            }]}>
                                            {item.title}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Typography
                                    className='game-text'
                                    sx={[GameTextStyle, { fontSize: { xs: '0.75rem', sm: '0.875rem', lg: '0.95rem' }, }]}
                                >
                                    {item.description}
                                </Typography>
                            </Box>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Container>
    </Box>
  )
}

HotGames.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      bgC: PropTypes.string.isRequired,
      imgUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default HotGames
