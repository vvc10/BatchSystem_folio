import React from 'react'
import Image from 'next/image'
import logo from '../assets/images/Group.jpg'

const BottomFooter = () => {
  return (
    <div className='flex flex-col font-display'>
      <div className='BottomFooter_sec h-[800px] md:h-[500px] text-black flex flex-col md:flex-row'>
        <div className='bs_left b m-auto w-[50%] md:w-[20%] h-[20%] md:h-[40%] items-center md:items-start flex flex-col font-display gap-[20px]'>
          <Image src={logo} />
          <span className='bs_left_email text-[16px]'>
            <p className='flex flex-row gap-[10px]'> <i class="fa fa-envelope text-[18px] text-[#FF5555]"></i>Help@Frybix.com</p>
          </span>
          <span className='bs_left_phone'>
            <p className='flex flex-row gap-[10px]'><i class="fa fa-phone text-[#FF5555] text-[18px]"></i> +1234567890</p>
          </span>
        </div>

        <div className='bs_right w-[100%] m-auto md:w-[80%] h-[80%] md:h-[100%] justify-center flex flex-col md:flex-row gap-[40px] font-display'>
          <div className='h-fit m-auto justify-center flex flex-row md:flex-row bg-red gap-[80px] md:gap-[40px]'>
            <ul className='text-[16px] h-[100%]  flex flex-col gap-[15px]'>
              <li className='text-[32px] font-[500]'>Links</li>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>About Us</a></li>
              <li><a href='#'>Bookings</a></li>
              <li><a href='#'>Blog</a></li>
            </ul>

            <ul className='text-[16px] h-[100%] justify-center flex flex-col gap-[15px]'>
              <li className='text-[32px] font-[500]'>Legal</li>
              <li><a href='#'>Tearms Of Use</a></li>
              <li><a href='#'>Privacy Policy</a></li>
              <li><a href='#'>Cookie Policy</a></li>
            </ul>

            <ul className='text-[16px] h-[100%] justify-center flex flex-col gap-[15px]'>
              <li className='text-[32px] font-[500]'>Product</li>
              <li><a href='#'>Take Tour</a></li>
              <li><a href='#'>Live Chat</a></li>
              <li><a href='#'>Reveiws</a></li>

            </ul>

          </div>

          <div className='newsletter_div h-fit m-auto text-center md:text-left justify-center flex flex-col gap-[30px]'>
            <span className='text-[28px]'>Newsletter</span>
            <p className='text-[16px] font-[500]'>Stay up to date</p>
            <div className='nl_input'>
              <input type='text' className='h-[61px] px-2' placeholder='Your email' />
              <button className='bg-black text-white w-[160px] h-[61px] rounded-[8px] text-[18px]'>Subscribe</button>
            </div>

          </div>
        </div>

      </div>
      <div className='cw_wrtn h-[50px] border-t-[1px] border-black-500 text-[16px] text-black py-[50px] text-center'>
        Copyright 2022 uifry.com all rights reserved
      </div>
    </div>

  )
}

export default BottomFooter
