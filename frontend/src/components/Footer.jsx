import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* -----------Left---------- */}
        <div className="">
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            vitae quidem asperiores neque ipsam qui natus! Ipsam eligendi
            perferendis totam libero omnis veniam voluptates laudantium unde
            quos cum veritatis reprehenderit corporis.
          </p>
        </div>
        {/* ---------Center--------- */}
        <div className="">
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* ----------Right---------- */}
        <div className="">
          <p className="text-xl font-medium mb-5">Get in Touch</p>
          <ul>
            <li>+91-3778-0202</li>
            <li>rox@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="text-center py-5">Copyright 2025. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
