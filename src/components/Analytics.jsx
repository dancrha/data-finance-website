import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img src={Laptop} alt='Laptop' className='w-[500px] mx-auto my-4' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold text-2xl drop-shadow-sm'>
            DATA ANALYTICS DASHBOARD
          </p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            voluptate ratione, doloremque porro ad nihil laudantium cupiditate
            fugiat minima error illum beatae, magnam obcaecati ea? Molestias
            nisi vel quod ducimus?
          </p>
          <button className='text-[#00df9a] w-[200px] rounded-md font-medium mx-auto md:mx-0 my-6 py-3 bg-black'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
