import React from 'react';
import Image from 'next/image';
import logo from '../assets/images/Group.jpg';

const Navbar = () => {
    return (
        <div className='navbar_i bg-white w-[100%] p-4 flex items-center justify-between'>

            <div className='navbar_left w-[50%] flex items-center gap-[1rem]'>
                <Image className='h-[34.4px]' src={logo} />
                <ul className='md:flex md:flex-row font-display gap-[1rem] hidden md:block text-black font-[20px] font-[500]'>
                    <li className='font-display font-[700] text-[#FF5555]'><a href=''>Home</a></li>
                    <li><a href=''>About Us</a></li>
                    <li><a href=''>Pricing</a></li>
                    <li><a href=''>Features</a></li>
                </ul>
            </div>

            <div className='navbar_right flex w-[50%] justify-end items-center font-display'>
                <button className='bg-gray-950 rounded-[4px] font-[18px] w-[180px] h-[60px] transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110'>Download</button>
            </div>

        </div>
    );
};

export default Navbar;
