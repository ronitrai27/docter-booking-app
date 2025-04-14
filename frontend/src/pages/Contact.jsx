import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 mb-10">
        <p className="">Contact us</p>
      </div>

      <div className="flex items-center gap-4">
        <img src={assets.contact_image} alt="" className="w-1/3" />

        <div className="self-start">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            esse consequuntur temporibus unde ipsum laboriosam ut fugit at iste
            qui?
          </p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure!</p>
          <button className="border border-black px-8 py-4 text-lg">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
