import React from "react";
import moment from "moment";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <div className="my-8">
      <div className="text-center">
        <h1 className="text-5xl font-bold italic underline">The Daily News</h1>
        <p className="text-gray-600 mt-5 mb-3">
          Journalism Without Fear or Favour
        </p>
        <p className="text-2xl">{moment().format("dddd, MMMM D YYYY")}</p>
      </div>
      <div className="flex bg-gray-400 my-8">
      <button className="btn btn-error">Breaking News</button>
      <Marquee speed={50} gradientWidth={50} pauseOnHover={true}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error placeat assumenda veritatis nemo facilis nostrum blanditiis optio similique laboriosam eveniet. Exercitationem soluta aspernatur fuga amet in optio impedit expedita? Perferendis.
      </Marquee>

      </div>
    </div>
  );
};

export default Header;
