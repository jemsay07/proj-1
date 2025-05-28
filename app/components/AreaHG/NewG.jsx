import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import Heading from '../Utils/Heading'
import { AspectRatio } from '@mui/icons-material';
import Buttons from '../Utils/Buttons';


const data = [
    { bgCL: 'linear-gradient(0deg,#57c785 50%, #eddd53 100%)', imgUrl: 'https://placehold.co/310x468/57c785/eddd53' },
    { bgCL: 'linear-gradient(0deg, #262c1f 0%, #566446 100%)', imgUrl: 'https://placehold.co/310x468/262c1f/566446' },
    { bgCL: 'linear-gradient(0deg,#22c1c3 0%, #fdbb2d 100%)', imgUrl: 'https://placehold.co/310x468/22c1c3/fdbb2d' },
    { bgCL: 'linear-gradient(0deg,#3f5efb 0%, #fc466b 100%)', imgUrl: 'https://placehold.co/310x468/3f5efb/fc466b' },
    { bgCL: 'linear-gradient(0deg, #183618 0%, #367a36 100%)', imgUrl: 'https://placehold.co/310x468/183618/367a36' },
    { bgCL: 'linear-gradient(0deg,#eeaeca 0%, #94bbe9 100%)', imgUrl: 'https://placehold.co/310x468/eeaeca/94bbe9' },
    { bgCL: 'linear-gradient(0deg,#2a7b9b 0%, #57c785 50%)', imgUrl: 'https://placehold.co/310x468/2a7b9b/57c785' },
    { bgCL: 'linear-gradient(0deg, #42324f 0%, #9a76b7 100%)', imgUrl: 'https://placehold.co/310x468/42324f/9a76b7' },
    { bgCL: 'linear-gradient(0deg,#cf21a4 0%, #ffd67d 100%)', imgUrl: 'https://placehold.co/310x468/cf21a4/ffd67d' },
    { bgCL: 'linear-gradient(0deg,#91ed28 0%, #fcad46 100%)', imgUrl: 'https://placehold.co/310x468/91ed28/fcad46' },
    { bgCL: 'linear-gradient(0deg, #532f12 0%, #c26c2f 100%)', imgUrl: 'https://placehold.co/310x468/532f12/c26c2f' },
    { bgCL: 'linear-gradient(0deg,#c8aeee 0%, #94e9db 100%)', imgUrl: 'https://placehold.co/310x468/c8aeee/94e9db' },
]

const ppFontSize = [
  {
    fontSizeLg: "2rem",
    fontSizeMd: "1.75rem",
    fontSizeSm: "1.5rem",
    fontSizeXs: "1.25rem"
  }
];

const NewG = () => {
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
                                sx={{
                                    background: item.bgCL,
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    justifyContent:'center',
                                    alignItems: 'center',
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
                                <Box className='hover'
                                    sx={{
                                        display: {xs: 'none', md:'flex'},
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        flexDirection: 'column',
                                        position: 'absolute',
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

export default NewG
