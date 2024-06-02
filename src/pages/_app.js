// pages/_app.js

import '../styles/globals.css';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import CursorPng from '../assets/images/Group 35896.png'
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        const handleMouseMove = (e) => {
          const customCursor = document.getElementById('custom-cursor');
          if (customCursor) {
            customCursor.style.left = e.clientX + 'px';
            customCursor.style.top = e.clientY + 'px';
          }
        };
    
        document.addEventListener('mousemove', handleMouseMove);
    
        return () => {

          document.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);
    

    return (
      <>
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Clash+Display&display=swap" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        </Head>
        <div id="custom-cursor" className="custom-cursor z-10000">
        <Image src={CursorPng} alt="Custom Cursor"  className='relative h-[128px] w-[128px] top-[-70px] left-[-70px]'/>
      </div>
              <Component {...pageProps} />
      </>
    );
  }
  
  export default MyApp;
  