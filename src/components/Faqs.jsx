import React from 'react'
import starB from '../assets/images/Star 8.png'
import Image from 'next/image'

const faqs = () => {
    return (
        <div className='faqs_sec text-black h-[1600px] md:h-[960px] bg-white font-display py-5 relative'>
            <div className='fs_head w-[100%] items-center md:items-start flex flex-col py-2'>
                <label className='text-[18px] font-[500] leading-[28px] mb-1 text-[#FF5555]'>FAQS</label>
                <h2 className='font-[700] text-center md:text-left text-[48px] w-[400px]'>Frequently asked questions</h2>
                </div>
                <Image src={starB} className='h-[64px] w-[64px] absolute top-[100px] right-[100px] md:right-[500px]  z-50 ' />

            <div className='fs_main flex flex-col w-[80%] m-auto h-[100%]'>
                <div className='flex flex-col md:flex-row py-[20px] gap-[10px]'>
                    <div className='bg-[#FF5555] w-[100%] md:w-[535px] h-[181px] p-[20px] rounded-[8px] text-white items-center justify-center'>
                        <h2 className='font-[600] text-[28px]'>The best financial accounting app ever!</h2>
                        <span className='text-[18px]'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</span>
                    </div>
                    <div className='bg-white w-[100%] md:w-[535px] h-[181px] p-[20px] rounded-[8px] text-black items-center justify-center'>
                        <h2 className='font-[600] text-[28px]'>The best financial accounting app ever!</h2>
                        <span className='text-[18px]'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</span>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row py-[20px] gap-[10px]'>
                    
                    <div className='bg-[#FF5555] md:bg-white  w-[100%] md:w-[535px] h-[181px] p-[20px] rounded-[8px] text-white md:text-black items-center justify-center'>
                        <h2 className='font-[600] text-[28px]'>The best financial accounting app ever!</h2>
                        <span className='text-[18px]'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</span>
                    </div>
                    <div className='bg-white md:bg-[#FF5555]  w-[100%] md:w-[535px] h-[181px] p-[20px] rounded-[8px] text-black md:text-white items-center justify-center'>
                        <h2 className='font-[600] text-[28px]'>The best financial accounting app ever!</h2>
                        <span className='text-[18px]'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</span>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row py-[20px] gap-[10px]'>
                    <div className='bg-[#FF5555]  w-[100%] md:w-[535px] h-[181px] p-[20px] rounded-[8px] text-white items-center justify-center'>
                        <h2 className='font-[600] text-[28px]'>The best financial accounting app ever!</h2>
                        <span className='text-[18px]'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</span>
                    </div>
                    <div className='bg-white w-[100%] md:w-[535px] h-[181px] p-[20px] rounded-[8px] text-black items-center justify-center'>
                        <h2 className='font-[600] text-[28px]'>The best financial accounting app ever!</h2>
                        <span className='text-[18px]'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default faqs
