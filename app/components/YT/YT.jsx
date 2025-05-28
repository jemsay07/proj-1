import React, { useEffect, useState } from 'react'
import { Box, Container } from '@mui/material';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';

const data = ['D0UnqGm_miA','9xwazD5SyVg','u31qwQUeGuM','LXb3EKWsInQ','9Nm9tU93BZo'];

const YT = () => {

  const [currentData, setCurrentData] = useState('');

  const handleClick = (link) => {
    const ytLink = `https://www.youtube.com/embed/${link}`;
    setCurrentData(ytLink);
  }
  
  // Set a default value for currentData if it's empty
  useEffect(() => {
    if(!currentData && data[0].length > 0){
        setCurrentData(`https://www.youtube.com/embed/${data[0]}`)
    }
  }, [currentData])

  const bigStyle = {
    marginBottom: {xs:'1.25rem', md: '2.5rem'},
    '> iframe': {
        height: {xs: '46.706vw', sm: '638px'},
        border: 0,
        borderRadius: '5px'
    }
  }

  const smallStyle = {
    cursor: 'pointer',
    '&.card-small':{
        marginBottom: {xs:'1.969rem', md: '3.844rem'},
        '.card-video':{
            height: {xs: '115px', sm: '120px', md: '125px'},
            width: {xs: '100%'},
            '&:hover:after, &.active:after':{
                content: "''",
                display: 'block',
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                height: 'calc(100% - 1px)',
                border: 'solid 2px #be9d5d',
                borderRadius: '3px',
                boxSizing: 'border-box',
                transition: 'border 0.3s ease-in-out'
            },
        },
        'img':{
            borderRadius: '3px',
            height: '100%',
            objectFit: 'fill',
            width: {xs: '100%'},
        }
    },
  }
  return (
    <Box
        id="big-wins"
        sx={{
            paddingY: {xs: '40px', md: '64px'},
        }}
    >
        <Container maxWidth="lg" sx={{color: "#FFF"}}>
            { currentData && (
                <Box className="card-big" sx={bigStyle}>
                    <iframe
                        src={currentData}
                        width="100%"
                        id="ytIframe"
                        title="YouTube Video Player"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </Box>
            )}
            <Box className='card-small' sx={smallStyle}>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={'auto'}
                    navigation={false}
                    pagination={false}
                    scrollbar={false}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 14,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 15,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 16,
                        },
                    }}
                >
                    {
                        data.map((item, ind) => {
                            const imgLink = `https://img.youtube.com/vi/${item}/mqdefault.jpg`;
                            const vC = `https://www.youtube.com/embed/${item}`;

                            //mqdefault
                            //sddefault
                            return (
                                <SwiperSlide key={ind}>
                                    <Box className={`card-video ${currentData === vC ? ' active' : ''}`} onClick={() => handleClick(item)}>
                                        <img src={imgLink} alt='' />
                                    </Box>
                                </SwiperSlide>
                            )
                        })
                    }
                    
                </Swiper>
            </Box>
            
        </Container>
    </Box>
  )
}

export default YT
