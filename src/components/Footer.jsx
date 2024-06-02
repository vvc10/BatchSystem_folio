import React from 'react'
import Image from 'next/image'
import Frame1 from '../assets/images/Group 35896.png'
import groupedPhone from '../assets/images/iPhone 13 Pro.png'
import starW from '../assets/images/Star 7.png'
import circleW from '../assets/images/Group 1000004718.png'
import circleWT from '../assets/images/Group 1000004718.png'
import starB from '../assets/images/Star 8.png'
 import fadedCircle from '../assets/images/Group 35899.png'
 import starBT from '../assets/images/Star 8.png'

const Footer = () => {
    return (
        <div className='footer_sec h-[600px] relative py-[30px]'>
        <Image src={Frame1} className='absolute top-[-120px] left-[-250px]  z-0 ' />
        <Image src={starB} className='h-[48px] w-[48px] absolute top-[190px] left-[-150px]  z-0 ' />
        
        <div className='footer_banner absolute w-[1090px] h-[508px] rounded-[8px] text-white bg-black font-display z-50 flex flex-row relative'>
            <div className='fb_left ml-[40px] flex flex-col justify-center h-full px-[20px]'>
                <h2 className='text-[48px] leading-[48px] w-[100%] font-[700] mb-[10px]'>Ready To Get Started?</h2>
                <p className='text-[18px] font-[400] mb-[10px] w-[535px]'>Risus habitant leo egestas mauris diam eget morbi tempus vulputate.</p>
                <button className='bg-white text-black w-[208px] h-[60px] rounded-[8px] text-[18px]'> Download <i className="fa fa-apple"></i></button>
            </div>
            <Image src={circleWT} className='absolute left-[0] rotate-[180deg] top-[200px] z-50' />

            <Image src={starW} className='absolute right-[450px] top-[60px]'/>
            <Image src={starW} className='absolute h-[48px] w-[48px] right-[600px] top-[350px]'/>

            <div className='fb_right'>
        <Image src={circleW} className='absolute right-[0] z-50' />
        <Image src={fadedCircle} className='absolute top-[-250px] rotate-[20deg]'/>
    <Image src={groupedPhone} className='absolute h-[459.91px] right-[0px] h-[100%] z-50'/>
        
    <Image src={starBT} className='h-[64px] w-[64px] absolute top-[-50px] right-[-100px]  z-0 ' />

            </div>
        </div>
    </div>
    
    )
}

export default Footer
