import { AppBar, Typography, Box, Toolbar, IconButton, Drawer, Divider} from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import "../../styles/HeaderStyles.css";
import MenuIcon from '@mui/icons-material/Menu';  
<link href="https://fonts.googleapis.com/css2?family=Lora:ital@1&display=swap" rel="stylesheet"></link>


const Header = () => {


    const [mobileOpen, setMobileOpen] = useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }
    
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}} >
              <Typography color="#145A32" fontSize={20} fontFamily="Lora" padding={2}> Foodies Kingdom</Typography> 
              <Divider/>
                     <ul className='mobile-navigation'>
                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/login'}>Login</Link>
                        </li>
                        <li>
                            <Link to={'/src/Pages/Register.js'}>Register</Link>
                        </li>
                     </ul>
                    </Box>
     
    )

    return (
        <div>
           <Box>
            <AppBar component={"nav"} sx={{bgcolor: "#6495ED"}}>
                <Toolbar>
                    <IconButton
                    color="inherit" 
                    aria-label='open drawer'
                    edge="start"
                    sx={{
                        mr: 2,
                        display: {sm: 'none'},
                    }}
                    onClick={handleDrawerToggle}
                    xl={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                          boxSizing: "border-box",
                          width: "240px",
                        },
                      }}
                    >
                     <MenuIcon/>
                    </IconButton>
                <Typography color="#FDFEFE" fontFamily='Lora' variant='h5' component="div" sx={{ flexGrow: 1}}>
                    <FastfoodIcon/>
                     Foodies Kingdom
                </Typography>
                <Box sx={{display: {xs: 'none',sm: 'block'}}}>
                 <ul className='navigation-menu'>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/login'}>Login</Link>
                    </li>
                    <li>
                        <Link to={'/src/Pages/Register.js'}>Register</Link>
                    </li>
                 </ul>
                </Box>
                </Toolbar>
            </AppBar>
            <Box component='nav'>
             <Drawer variant='temporary' open={mobileOpen} onClose={handleDrawerToggle}
             sx={{display:{xs: 'block', sm:"none"} }}>
              {drawer}
             </Drawer>
            </Box>
            <Box>
            <Toolbar/>
            </Box>
           </Box>
        </div>
    );
}
export default Header;