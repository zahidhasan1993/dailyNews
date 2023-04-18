import React from "react";
import moment from "moment";

const Header = () => {
  return (
    <div className="mt-8">
      <div className="text-center">
        <h1 className="text-5xl font-bold italic underline">The Daily News</h1>
        <p className="text-gray-600 mt-5 mb-3">
          Journalism Without Fear or Favour
        </p>
        <p className="text-2xl">{moment().format("dddd, MMMM D YYYY")}</p>
      </div>
    </div>
  );
};

export default Header;
