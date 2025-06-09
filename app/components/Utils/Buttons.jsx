import { Box, Button } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';

const Buttons = ({
    text='Helo',
    variant='default',
    link='#',
    color = '#fff',
    fontSize = {xs: "0.875rem", sm: "1rem"},
    padding = {xs: "9px 41px"},
    width = {xs: "180px", sm: "210px"}
}) => {

  // Define styles for the button using MUI's sx prop

    const BtnStyle = (theme) => ({
        '&.btnWrap':{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '0.313rem',
            '.btn':{
                borderRadius: "50px",
                boxShadow: "0 0 0 !important",
                color: color,
                cursor: "pointer",
                fontFamily: "'Poppins',sans-serif",
                fontWeight: 600,
                fontSize: fontSize,
                height: "48px",
                minHeight: "18px",
                padding: padding,
                whiteSpace: "nowrap",
                transition: "all 0.5s ease",
                width: width,
                '&.btn--default':{
                    backgroundColor: "#f19021 !important",
                    border: "3px solid transparent !important",
                    "&:hover": {
                        backgroundColor: "#f4a64d !important",
                    },
                },
                '&.btn--trans':{
                    backgroundColor: "transparent !important",
                    border: "3px solid #f19021 !important",
                    color: color,
                    minHeight: "12px",
                    "&:hover": {
                        backgroundColor: "#f4a64d !important",
                        borderColor: "#f4a64d !important",
                        color: "#fff"
                    },
                }

            }
        },
    });

  return (
    <Box className='btnWrap' sx={BtnStyle}>
      <Button
        type='button'
        href={`${link}`}
        className={`btn btn--${variant}`}
      >
        {text}
      </Button>
    </Box>
  )
}
Buttons.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.string,
  link: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  padding: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  width: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ])
};

export default Buttons
