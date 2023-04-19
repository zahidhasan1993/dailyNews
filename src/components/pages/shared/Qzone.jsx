import React from "react";
import pic1 from "../../../assets/qZone1.png";
import pic2 from "../../../assets/qZone2.png";
import pic3 from "../../../assets/qZone3.png";

const Qzone = () => {
  return (
    <div className="bg-gray-200">
      <div className="pl-4 pt-4">
        <h1 className="text-xl font-bold mb-4">Qzone</h1>
      </div>

      <img src={pic1} className="w-[100%]" alt="" />
      <img src={pic2} alt="" className="w-[100%]" />
      <img src={pic3} alt="" className="w-[100%]" />
    </div>
  );
};

export default Qzone;
