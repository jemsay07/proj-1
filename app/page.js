'use client';
import { Box } from "@mui/material";
import Exclusive from "./components/Exclusive/Exclusive";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import styles from "./page.module.css";
import HotGames from "./components/AreaHG/HotGames";
import Sb from "./components/AreaHG/Sb";
import NewG from "./components/AreaHG/NewG";
import Promotions from "./components/Promotions/Promotions";

import Pattern2 from "../assets/images/bg/pattern2.svg";
import Yt from "./components/YT/YT";
import Footer from "./components/Footer/Footer";

export default function Home() {
  const HGStyle = {
    backgroundColor: '#181623',
    backgroundImage: `url(${Pattern2.src})`,
    backgroundSize: {xs: '65%', md: '50%', xl: '40%'},
    backgroundPosition: {xs:'right -5%', md:'right -15%', lg: 'right -20%', xl: 'right -28%'},
    backgroundRepeat: 'no-repeat',            
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    paddingY: {xs: '40px', md: '64px'},
    position: 'relative',
  }
  return (
    <div className={styles.page}>
      <main>
        <Navbar />
        <Hero />
        <Exclusive />
        <Box 
          component={'section'}
          id='area-hg'
          className='area-hg'
          sx={HGStyle}
        >
          <HotGames />
          <Sb />
          <NewG />
        </Box>
        <Box sx={{backgroundColor: '#271d2f'}}>
          <Promotions />
          <Yt />
        </Box>
      </main>
      <Footer />
    </div>
  );
}
