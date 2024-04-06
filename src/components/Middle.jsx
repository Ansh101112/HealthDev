import React from 'react';
import { IoIosRocket } from 'react-icons/io';
import { FiBookOpen } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import Slider from './Slider';
import { Navigate, useNavigate } from 'react-router-dom';

const Middle = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='mb-0 rounded-2xl flex items-center nowrap'>
        <h1 className='p-8 px-12 font-semibold text-m whitespace-nowrap'>Say <span className='text-blue-500'>HealthDEV </span> every step of the way</h1>
        <hr className="my-0 mx-4 w-3/4 border-t border-blue-200" />
      </div>

      {/* main content starts here.... */}
      
      <section className="text-gray-600 body-font p-0.5 pt-2 justify-center flex">
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-wrap -m-2 cursor-pointer">
            <div className="lg:w-1/4 md:w-1/2 p-2">
              <div className="relative h-40 rounded-md overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-800 to-transparent rounded-md flex items-center justify-center text-white">
                  <IoIosRocket className="text-5xl" />
                </div>
                <div className="absolute inset-x-0 bottom-0 px-4 py-2  bg-opacity-75 text-center">
                  <h5 className="text-gray-300 title-font text-base font-medium">Fast and quick Process</h5>
                  <p className="text-gray-300 mt-2">A quick process to meet doctor.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-2">
              <div className="relative h-40 rounded-md overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-red-800 to-transparent rounded-md flex items-center justify-center text-white cursor-pointer">
                  <FiBookOpen className="text-5xl" />
                </div>
                <div className="absolute inset-x-0 bottom-0 px-4 py-2  bg-opacity-75 text-center">
                  <h5 className="text-gray-300 title-font text-base font-medium">Highly Classified</h5>
                  <p className="text-gray-300 mt-2">Meet the professionalists</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-2">
              <div className="relative h-40 rounded-md overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-800 to-transparent rounded-md flex items-center justify-center text-white cursor-pointer">
                  <FaGraduationCap className="text-5xl" />
                </div>
                <div className="absolute inset-x-0 bottom-0 px-4 py-2  bg-opacity-75 text-center">
                  <h5 className="text-gray-300 title-font text-base font-medium">Learn</h5>
                  <p className="text-gray-300 mt-2">Learn and get knowledge</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-2">
              <div className="relative h-40 rounded-md overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-500 to-transparent rounded-md flex items-center justify-center text-white cursor-pointer">
                  <FaNetworkWired className="text-5xl" />
                </div>
                <div className="absolute inset-x-0 bottom-0 px-4 py-2  bg-opacity-75 text-center">
                  <h5 className="text-gray-300 title-font text-base font-medium">Network</h5>
                  <p className="text-gray-300 mt-2">Vast network of our peers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Slider/>

{/* Popular categories start herer...... */}

<section className='mb-0'>
  <p className='font-bold px-9 py-7'>Our Testimonials</p>
</section>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://images.unsplash.com/photo-1609902726285-00668009f004?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDQzfHxoYXBweXxlbnwwfHx8fDE2MTU4OTMxMDU&ixlib=rb-1.2.1&q=80&w=2000" />
          <p class="leading-relaxed">HealthDev has exceeded my expectations in every way possible. From the moment I signed up, I've been impressed by the seamless experience and high-quality care provided. The doctors are knowledgeable and compassionate, and the support team is always there to assist with any questions or concerns. I highly recommend HealthDev to anyone looking for a reliable healthcare solution.</p>
          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
          <p class="text-gray-500">Senior Product Designer</p>
        </div>
      </div>
      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://photoheads.co.uk/wp-content/uploads/2020/05/headshot-with-client-testimonial.jpg" />
          <p class="leading-relaxed">I can't say enough good things about HealthDev! From the intuitive interface to the prompt customer support, every aspect of the platform is top-notch. Whether it's scheduling appointments, requesting prescription refills, or accessing educational resources, HealthDev makes managing my health a breeze. I'm grateful to have such a reliable and comprehensive healthcare system at my disposal.</p>
          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
          <p class="text-gray-500">Teacherr</p>
        </div>
      </div>
      <div class="lg:w-1/3 lg:mb-0 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://th.bing.com/th/id/OIP.f0bSA8u1ezCwqUUecYuiHgHaKL?rs=1&pid=ImgDetMain" />
          <p class="leading-relaxed">I've been using HealthDev for my chronic condition management, and it has made a world of difference in my life. The platform allows me to track my symptoms, medications, and appointments all in one place, helping me stay organized and proactive about my health. Thanks to HealthDev, I feel more empowered and in control of my healthcare journey.</p>
          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
          <p class="text-gray-500">CTO</p>
        </div>
      </div>
    </div>
  </div>
</section>


<button onClick={()=>{navigate('/login')}} type="button" class="block mx-auto text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">Get Started Today</button>



    </>
  );
};

export default Middle;
