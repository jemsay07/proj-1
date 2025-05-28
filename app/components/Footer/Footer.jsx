import { Box, Container } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box 
        component={'footer'}
        sx={{
            background: '#1A202C',
            color: '#fff',
            paddingY: {xs:'16px', sm: '32px', md: '40px'},
            textAlign: 'center'
        }}
    >
        <Container maxWidth="lg">
            All right reserved &copy; 
        </Container>
    </Box>
  )
}

export default Footer
