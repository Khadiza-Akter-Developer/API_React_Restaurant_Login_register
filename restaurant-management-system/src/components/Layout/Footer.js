import React from 'react'
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub"; 
import {
Box,
Typography,
} from '@mui/material'

const Footer = () => {
    return(
        <>
        <Box sx={{textAlign: "center", bgcolor: "#AED6F1", padding: 1, color: "black" }}>
        <Box
          sx={{
            my: 2,
            "& svg": {
              fontSize: "30px",
              cursor: "pointer",
              mr: 1,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          <TwitterIcon />
          <GitHubIcon />
        </Box>
            <Typography variant="h6" fontFamily="Lora"
             sx={{
            "@media (max-width:300px)": {
              fontSize: "1rem",
            },
            }}>
            &copy; 2023 Foodies Kingdom 
            </Typography>
         </Box>
        </>
    )
}
export default Footer;