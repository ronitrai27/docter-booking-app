import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="">
        <p className="">
          About <span>us</span>
        </p>
      </div>

      <div className="flex items-center gap-3">
        <img src={assets.about_image} alt="" className="w-1/2" />
        <div className="self-start leading-loose">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            praesentium sit optio ut perferendis distinctio deserunt, unde
            accusantium quo reprehenderit!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            beatae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
            sit iure tenetur asperiores. Dignissimos, culpa asperiores?
            Corporis, odio laudantium sit velit molestias eveniet aperiam
            suscipit laborum quo ea necessitatibus illo ad earum debitis
            similique labore perspiciatis inventore blanditiis cumque sapiente
            atque! Quas illo magnam et fuga provident, accusamus quod dolore?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, odit?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
