import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import Heading from '../Utils/Heading'
import { AspectRatio } from '@mui/icons-material';
import Buttons from '../Utils/Buttons';
import PropTypes from 'prop-types';

const ppFontSize = [
  {
    fontSizeLg: "2rem",
    fontSizeMd: "1.75rem",
    fontSizeSm: "1.5rem",
    fontSizeXs: "1.25rem"
  }
];

const NewG = ({data}) => {
  return (
    <Box id="new-games" sx={{marginBottom: {xs: '56px', md: '3.5rem', lg: '5rem'},}}>
      <Container maxWidth='lg'>
        <Heading
            title="Duis Sed"
            fontSize={ppFontSize}
            display={true} // Assuming you want to display the title
        />
        <Box sx={{flexGrow: 1, marginBottom: {xs: '2rem', md: '3.5rem'}}}>
            <Grid container spacing={{xs: 2, sm: 3, md: 4 }} columns={{ xs: 2, sm: 3, md: 4 }}>
                {
                    data.map((item, index) => (
                        <Grid key={index} size={1}>
                            <Box
                                className='flex align-center justify-center'
                                sx={{
                                    background: item.bgCL,
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    height: {xs: '185px', sm: '190px', md: '205px', lg: '219px'},
                                    position: 'relative',
                                    '&:hover .hover': {
                                        opacity: '1',
                                        transition: 'opacity 0.3s ease-in-out',
                                    }
                                }}
                            >
                                <AspectRatio
                                    objectfit="cover"
                                    ratio={1.5}
                                >
                                    <img src={item.imgUrl} alt="swiper img"/>
                                </AspectRatio>
                                <Box className='hover align-center justify-center absolute'
                                    sx={{
                                        display: {xs: 'none', md:'flex'},
                                        flexDirection: 'column',
                                        color: '#fff',
                                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                        width: '100%',
                                        height: '100%',
                                        gap: 0.5,
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease-in-out',
                                    }}>
                                    <Buttons
                                        text='Vulputate'
                                        variant='default'
                                        width={{xs: 'calc(100% - 20px)', lg: '210px'}}
                                    />
                                    <Buttons
                                        text='Lacinia'
                                        variant='trans'
                                        width={{xs: 'calc(100% - 20px)', lg: '210px'}}
                                    />
                                </Box>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
        <Box sx={{marginTop: '2rem', textAlign: 'center'}}>
          <Buttons
            text='Molestie'
            variant='trans'
            width={{xs: 'calc(100% - 20px)', sm: '210px'}}
          />
          </Box>
      </Container>
    </Box>
  )
}
NewG.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      bgCL: PropTypes.string.isRequired,
      imgUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NewG
