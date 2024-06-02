import React from 'react'
import Image from 'next/image';
import tape from '../assets/images/Group 35924.png'
import Frame1 from '../assets/images/iPhone-13-Pro-Front (5).png'
import Frame2 from '../assets/images/iPhone-13-Pro-Front (3).png'
import Frame3 from '../assets/images/iPhone-13-Pro-Front (4).png'
import Frame4 from '../assets/images/Group 35887.png'
import Frame5 from '../assets/images/Group 35899.png'
import starB from '../assets/images/Star 8.png'
import starBT from '../assets/images/Star 8.png'
import fadeU from '../assets/images/Group 35896.png'

const Hero = ({ data }) => {
  return (
    <div className='hero_sec text-black font-display flex flex-col p-4 items-center h-[1200px] md:h-[800px] py-[4rem] w-[100%] relative md:flex-row'>
      <Image className='h-[48px] w-[48px] absolute top-[40px] left-[-100px] z-50' src={starBT} />
      <Image className='h-[48px] w-[48px] absolute top-[-40px] right-[-100px] z-50' src={starBT} />

      <div className='hero_sec_left flex flex-row md:flex-col items-center w-[100%] md:w-[50%] h-[50%] md:h-[100%] relative'>
        <div className=''>
          <Image src={fadeU} className='absolute top-[-60px] left-[180px] h-[230px] w-[317px] z-0' />
          <h2 className='relative font-dispaly text-[64px] font-[700] leading-[64px] mb-[10px] z-50'>{data.headline}</h2>
          <p className='text-[18px] font-[500] leading-[28px] mb-[20px]'>
            {data.subheadline}
          </p>

          <div className='action_btn mb-[50px] gap-[20px] flex'>
            {data.ctaButtons.map((button, index) => (
              <a key={index} href={button.link}>
                <button
                  className={`inline-block px-8 py-4 ${index === 0 ? 'bg-gray-900' : 'bg-white'} ${index === 0 ? 'text-white' : 'text-black'} rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110`}
                >
                  {button.text}
                </button>
              </a>
            ))}
          </div>
        </div>
        <div className='bottom_tape relative'>
          <Image className='h-[380px] w-[500px] relative left-[-30px]' src={tape} />
          <Image className='h-[48px] w-[48px] absolute top-[300px] right-[-60px] z-50' src={starB} />
          <Image className='h-[48px] w-[48px] absolute top-[40px] left-[60px] z-50' src={starB} />

        </div>
      </div>
      <div className='hero_sec_right align-right items-center h-[100%] w-[50%] relative'>
        <Image className='h-[674.32px] w-[509.25px] top-[-100px] right-[130px] absolute z-50' src={Frame2} />
        <Image className='h-[674.32px] w-[509.25px] absolute top-[-20.6px] z-40 right-[5px]' src={Frame3} />
        <Image className='h-[674.32px] w-[509.25px] top-[47.51px] right-[-100px] absolute z-30' src={Frame2} />
        <Image className='h-[675.49px] w-[625.49px] absolute top-[-58px] right-[-30px] z-10' src={Frame4} />
        <Image className='h-[675.49px] w-[625.49px] absolute top-[0px] right-[10px] z-5' src={Frame5} />

      </div>
    </div>
  )
}

export default Hero
