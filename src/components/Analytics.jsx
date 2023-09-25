import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img src={Laptop} alt='Laptop' />
        <div>
          <p>DATA ANALYTICS DASHBOARD</p>
          <h1>Manage Data Analytics Centrally</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            voluptate ratione, doloremque porro ad nihil laudantium cupiditate
            fugiat minima error illum beatae, magnam obcaecati ea? Molestias
            nisi vel quod ducimus?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
