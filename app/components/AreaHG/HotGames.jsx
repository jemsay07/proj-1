import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import Heading from '../Utils/Heading'

import { AspectRatio } from '@mui/icons-material';

import { Swiper, SwiperSlide } from 'swiper/react';

// import { Navigation, Pagination, Scrollbar, A11y  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import Buttons from '../Utils/Buttons';


const data = [
    {
        title: 'Mauris vulputate',
        description: 'Sed luctus malesuada scelerisque. Fusce consectetur turpis et vestibulum sagittis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc et ornare neque. Fusce pretium lacinia egestas. Curabitur laoreet sed odio sed molestie. Sed ut congue risus. Nullam porttitor, enim a facilisis tincidunt, ligula felis eleifend est, in efficitur augue leo nec erat. Suspendisse potenti. Sed sed dolor ac enim commodo aliquet.',
        bgC: 'linear-gradient(0deg, #42324f 0%, #9a76b7 100%)',
        imgUrl: 'https://placehold.co/310x468/42324f/9a76b7'
    },
    {
        title: 'pulvinar nulla',
        description: 'Donec sit amet nulla sit amet nibh tincidunt rhoncus. Curabitur ultricies quis justo in tincidunt. Proin non metus efficitur, tincidunt orci tristique, viverra magna. Cras aliquam risus nisl, quis semper orci molestie vel. Integer tincidunt, enim a sollicitudin tristique, erat orci accumsan augue, quis pretium ante libero eget ante. Praesent venenatis purus eu mauris pulvinar pretium. Ut molestie risus nec tortor pellentesque egestas. Integer vel ultrices ligula. ',
        bgC: 'linear-gradient(0deg, #262c1f 0%, #566446 100%)',
        imgUrl: 'https://placehold.co/310x468/262c1f/566446'
    },
    {
        title: 'pulvinar vel porttitor',
        description: 'Nam a accumsan arcu. Phasellus lacinia risus at nibh volutpat varius. Morbi orci magna, pulvinar vel porttitor et, posuere vitae dui. Vivamus convallis molestie nunc non sodales',
        bgC: 'linear-gradient(0deg, #532f12 0%, #c26c2f 100%)',
        imgUrl: 'https://placehold.co/310x468/532f12/c26c2f'
    },
    {
        title: 'ultricies fringilla',
        description: 'ivamus convallis molestie nunc non sodales. Pellentesque at turpis sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec elementum, sapien ac vehicula ultricies, lacus urna molestie nibh, eget congue felis turpis sed lorem. Sed id massa sit amet tellus dignissim tempus. Sed in ligula sed enim facilisis tincidunt. Suspendisse potenti. Sed sed dolor ac enim commodo aliquet.',
        bgC: 'linear-gradient(0deg, #183618 0%, #367a36 100%)',
        imgUrl: 'https://placehold.co/310x468/183618/367a36'
    },
]

const ppFontSize = [
  {
    fontSizeLg: "2rem",
    fontSizeMd: "1.75rem",
    fontSizeSm: "1.5rem",
    fontSizeXs: "1.25rem"
  }
];

const HotGames = () => {
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
                                sx={{
                                    position: 'relative',
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

export default HotGames
