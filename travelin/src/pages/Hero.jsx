import React from "react";
import assetheader from "../asset/header.png";
import logo from "../asset/logo4.png";
function Hero() {
  return (
    <div className="hero min-h-screen  " style={{ backgroundImage: `url(${assetheader})` }}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* <img
          src={assetheader}
          className="max-w-full max-h-full mb-max -mr-7 mt-max shadow-8xl  "
          
        /> */}
    <div className="text-center lg:text-left -mt-36" style={{ color: 'rgb(0, 0, 055)', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
      <h1 className="text-7xl font-bold">Travel Keraton</h1>
      <p className="py-6 font-bold text-2xl text-white">
        Travel Keraton hadir untuk mewujudkan liburan impian Anda. Kami menawarkan berbagai paket wisata lengkap ke berbagai destinasi menarik di Indonesia dan mancanegara.
      </p>
           {/* <img
          src={logo}
          className="max-w-full max-h-full mb-max -mr-7 mt-20 shadow-8xl  "
          
        /> */}
    </div>
      </div>
    </div>
    
  );
}

export default Hero;
