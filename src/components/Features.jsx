import React from 'react'
import Image from 'next/image';
import Frame1 from '../assets/images/iPhone-13-Pro-Front (5).png'
import Frame4 from '../assets/images/Group 35887.png'
import Frame5 from '../assets/images/Group 35896.png'
import Frame6 from '../assets/images/Group 35897.png'
import starB from '../assets/images/Star 8.png'
const Features = ({ data }) => {
    return (
        <div className='features_sec bg-white-900 h-[1200px] md:h-[660px] w-[100%] font-display flex flex-col md:flex-row relative'>
            <Image src={starB} className='absolute w-[48px] h-[48px] rotate-[-12deg] top-[90px] left-[-60px] z-[30]' />
            <div className='fs_left left-[240px] md:left-[0px] relative h-[50%] md:h-[100%] w-[60%] md:w-[50%] justify-center items-center'>
                
                <Image className='rotate-[15deg] absolute z-[50]' src={Frame1} />
                <Image src={Frame4} className='absolute w-[619.49px] h-[719.49px] top-[-30px] left-[-90px] md:left-[-60px] z-[30]' />
                <Image src={Frame5} className='rotate-180 absolute h-[585.14px] w-[693px] left-[-120px] top-[-40px] z-20' />

            </div>
            <div className='fs_right w-[100%] md:w-[50%] h-[50%] md:h-[100%] flex flex-col justify-center items-center md:items-start text-black px-[20px]'>
                <Image src={Frame6} className='rotate-0 absolute h-[500px] w-[293px] right-[-170px] top-[43.7px] z-20' />

                <span className='text-[18px]  leading-[28px] text-[#FF5555] mb-5px['>FEATURES</span>
                <h2 className='text-[48px] font-[700] leading-[48px] mb-[25px]'>Uifry Premium</h2>
                <ul className='w-full text-center md:text-left'>
                    {data.map((feature, index) => (
                        <li key={index} className='mb-[20px]'>
                            <span className='font-[600] text-[18px] leading-[28px]'>{feature.title}</span>
                            <p className='text-[18px] leading-[28px] opacity-[50%]'>{feature.description}</p>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default Features
