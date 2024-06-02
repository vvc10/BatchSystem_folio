import { React, useState } from 'react'
import Frame42 from '../assets/images/Group 35887.png';
import Frame52 from '../assets/images/Group 35896.png';
import Image from 'next/image';
import Avatar1 from '../assets/images/Ellipse 43.png'
import Avatar2 from '../assets/images/Ellipse 42.png'
import Avatar3 from '../assets/images/Ellipse 41.png'
import Avatar4 from '../assets/images/Ellipse 44.png'
import Avatar5 from '../assets/images/Ellipse 45.png'
import starB from '../assets/images/Star 8.png'
import starBT from '../assets/images/Star 8.png'
 
 


const Testinomials = ({ data }) => {
  const avatars = [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5];
  const [currentTestimonial, setCurrentTestimonial] = useState(data[0]);
  return (
    <div className='testinomials_sec text-black h-[1200px] md:h-[900px] bg-white font-display mb-[100px] md:mb-[20px]'>
      <div className='ts_head w-[100%] items-center flex flex-col justify-center relative'>
      <Image src={starBT} className='absolute w-[48px] h-[48px] rotate-[-12deg] top-[-50px] right-[0px] z-[30]' />

        <label className='text-[18px] font-[500] leading-[28px] mb-1 text-[#FF5555]'>TESTIMONIALS</label>
        <h2 className='font-[700] text-[48px] w-[400px] mx-auto text-center'>What our users say about us?</h2></div>

      <div className='ts_main flex flex-col md:flex-row h-[100%]'>
        <div className='tsmain_left w-[50%] m-auto h-[50%] md:h-[100%] relative text-white '>
          <Image src={Frame42} className='absolute w-[619.49px] h-[719.49px] rotate-[-12deg] top-[0px] left-[-90px] z-[30]' />
          <Image src={starB} className='absolute w-[48px] h-[48px] rotate-[-12deg] top-[550px] left-[-90px] z-[30]' />

          <Image src={Frame52} className='rotate-0 absolute h-[585.14px] w-[693px] left-[-90px] top-[50px] z-20' />
          <Image src={avatars[0]} className='rotate-0 absolute h-[250.65px] w-[250.65px] left-[-80px] top-[120px] z-50' />
          <Image src={avatars[1]} className='rotate-0 absolute h-[300.65px] w-[300.65px] left-[270px] top-[120px] z-50' />

          <Image src={avatars[2]} className='rotate-0 absolute h-[313.5px] w-[313.5px] left-[90px] top-[220px] z-50' />

          <i class="fa fa-quote-left absolute left-[260px] text-white text-[20.78px] z-50 bg-[#FF5555] p-4 rounded-[50px] top-[320px] "></i>

          <Image src={avatars[3]} className='rotate-0 absolute h-[250.65px] w-[250.65px] left-[320px] top-[430px] z-50' />
          <Image src={avatars[4]} className='rotate-0 absolute h-[300.65px] w-[300.65px] left-[0px] top-[420px] z-50' />

        </div>
 
        {/* <div className='tsmain_right w-[50%] h-[100%] flex flex-col bg-red justify-center items-start relative'>
          <p className='font-[600] text-[28px] leading-[28px] flex flex-row gap-[20px] mb-[20px]'>
            The Best Financial Accounting App Ever!
          </p>
          <p className='text-[18px] leading-[28px] opacity-[50%]'>
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”
          </p>
          <div className='flex flex-row gap-[10px] py-4 mb-[10px]'>
            <Image className='w-[40px] h-[40px]' src={Avatar1} alt='Avatar 1' />
            <Image className='w-[40px] h-[40px] opacity-[50%]' src={Avatar2} alt='Avatar 2' />
            <Image className='w-[40px] h-[40px] opacity-[50%]' src={Avatar3} alt='Avatar 3' />
            <Image className='w-[40px] h-[40px] opacity-[50%]' src={Avatar4} alt='Avatar 4' />
            <Image className='w-[40px] h-[40px] opacity-[50%]' src={Avatar5} alt='Avatar 5' />
          </div>
          <span className='text-[18px] font-[600]'>Nick Jonas</span>
        </div> */}
       
        <div className='tsmain_right w-[50%] h-[50%] m-auto md:h-[100%] flex flex-col justify-center items-center md:items-start relative'>
          <p className='font-[600] text-center md:text-left text-[28px] leading-[28px] flex flex-row gap-[20px] mb-[20px]'>
            {currentTestimonial.feedback}
          </p>
          <p className='text-[18px] leading-[28px] opacity-[50%]'>
            “{currentTestimonial.feedback}”
          </p>
          <div className='flex flex-row gap-[10px] py-4 mb-[10px]'>
            {data.map((testimonial, index) => (
              <Image
                key={index}
                className={`w-[40px] h-[40px] cursor-pointer ${currentTestimonial.name === testimonial.name ? '' : 'opacity-[50%]'}`}
                src={testimonial.avatar}
                alt={testimonial.name}
                width={40}
                height={40}
                onClick={() => setCurrentTestimonial(testimonial)}
              />
            ))}
          </div>
          <span className='text-[18px] font-[600]'>{currentTestimonial.name}</span>
        </div></div></div>
        )
}

        export default Testinomials
