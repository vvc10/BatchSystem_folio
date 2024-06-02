import React from 'react';
import Image from 'next/image';
import Frame1 from '../assets/images/iPhone-13-Pro-Front (4).png';
import Frame8 from '../assets/images/iPhone-13-Pro-Front (6).png';
import Frame4 from '../assets/images/Group 35887.png';
import Frame5 from '../assets/images/Group 35896.png';
import Frame42 from '../assets/images/Group 35887.png';
import Frame52 from '../assets/images/Group 35896.png';
import Frame6 from '../assets/images/Group 35897.png';
import onHold from '../assets/images/On Hold.png'
import Bl_Card from '../assets/images/Group (2).png'
import starB from '../assets/images/Star 8.png'

const Advantages = () => {
    return (
        <div className='advantages_sec_paired relative'>
            <div className='advantages_sec bg-white h-[1200px] md:h-[660px] font-display flex flex-col md:flex-row text-black relative'>

                <div className='fs_left w-[100%] md:w-[50%] bg-white flex flex-col justify-center px-8 text-center md:items-start md:text-left'>
                    {/* <Image src={Frame6} alt="Advantage Image" className='absolute h-[500px] w-[293px] right-0 top-[843.7px] z-20' /> */}
                    <span className='text-[18px] leading-[28px] text-[#FF5555] mb-2'>ADVANTAGES</span>
                    <h2 className='text-[48px] font-[700] leading-[48px] mb-[25px]'>why choose Uifry?</h2>
                    <p className='font-[600] text-[28px] leading-[28px] justify-center md:justify-left flex flex-row gap-[20px] mb-[20px]'>
                        <i class="fa fa-bell text-[14px] bg-[#FF5555] p-3 rounded-[50px] text-white"></i>clever notifications</p>
                    <p className='text-[18px] leading-[28px] opacity-[50%]'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam..</p>
                </div>
                <div className='fs_right w-[50%] m-auto md:w-[50%] h-[50%] md:h-[100%] flex flex-col justify-center items-start relative'>
                    <Image src={Frame1} alt="Frame 1" className='rotate-[15deg] absolute z-50' />
                    <Image src={Frame4} alt="Frame 4" className='rotate-[-10deg] absolute w-[619.49px] h-[719.49px] top-[-80px] right-[50px] z-30' />
                    <Image src={Frame5} alt="Frame 5" className='rotate-0 absolute h-[585.14px] w-[693px] right-[90px] top-[43.7px] z-20' />
                    <Image src={onHold} alt="Frame 6" className='rotate-[0] absolute z-50 right-[90px] top-[220px] ' />

                </div>
            </div>

            <Image src={starB} className='absolute w-[48px] h-[48px] rotate-[-12deg] top-[-50px] right-[0px] z-[30]' />

            <div className='advantages_sec h-[1200px] md:h-[660px] font-display flex flex-col md:flex-row text-black relative'>
                <div className='fs_left top-[100px] md:top-[0] w-[50%] md:w-[50%] bg-white flex flex-col justify-center px-8 justify-center items-start relative h-[50%] m-auto md:h-[100%] '>
                    <Image src={Frame8} alt="Frame 1" className='rotate-[0] absolute z-50' />

                    <Image src={Frame42} className='absolute w-[619.49px] h-[719.49px] rotate-[-12deg] top-[-90px] left-[-90px] z-[30]' />

                    <Image src={Frame52} className='rotate-180 absolute h-[585.14px] w-[693px] left-[-10px] top-[50px] z-20' />
                    <Image src={Bl_Card} alt="Frame 6" className='rotate-[0] absolute z-50 left-[110px] top-[20px] md:top-[130px] ' />
                </div>

                <Image src={starB} className='absolute w-[48px] h-[48px] rotate-[-12deg] top-[0px] right-[550px] z-[30]' />


                <div className='fs_right w-[50%] h-[100%] flex flex-col m-auto justify-center items-center md:items-start relative'>

                    <p className='font-[600] text-[28px] leading-[28px] flex flex-row gap-[20px] md:text-left mb-[20px]'>
                        <i class="fa fa-bell text-[14px] bg-[#FF5555] p-3 rounded-[50px] text-white"></i>fully customizable
                    </p>
                    <p className='text-center md:text-left text-[18px] leading-[28px] opacity-[50%]'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam..</p>
                </div>
            </div>

        </div>

    );
};

export default Advantages;
