import { Box } from '@mui/material';
import React from 'react'

const Heading = ({title, fontSize, display}) => {
    
  return (
    title && display ? (
        <Box
            component="h2"
            className='title'
            sx={(theme) => ({
                color: '#fff',
                fontSize: {
                    xs: fontSize?.[0]?.fontSizeXs || "1.25rem",
                    sm: fontSize?.[0]?.fontSizeSm || "1.5rem",
                    md: fontSize?.[0]?.fontSizeMd || "1.75rem",
                    lg: fontSize?.[0]?.fontSizeLg || "2rem"
                },
                fontFamily: "'Poppins', sans-serif",
                lineHeight: '1.25rem !important', //18px
                [theme.breakpoints.up('md')]: {
                    marginBottom: '3.125rem !important',
                },
                [theme.breakpoints.up('sm')]: {
                    lineHeight: '135.68%!important',
                    marginBottom: '1.25rem !important',
                },
                '&:after': {
                    content: '""',
                    display: 'block',
                    backgroundColor: '#f29b37',
                    height: 3,
                    margin: '1rem 0',
                    width: 24,
                    '@media (min-width: 600px)': {
                        height: 7,
                        width: '79px',
                    },
                    '@media (min-width: 900px)': {
                        width: 51,
                    },
                },
            })}
        >
            {title}
        </Box>
    ) : ''
  )
}

export default Heading
