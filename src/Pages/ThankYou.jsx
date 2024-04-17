import React from "react";
import picha from "../Assets/images/icon-thank-you.svg";
import { Link } from "react-router-dom";

function ThankYou() {
  return (
    <div className="flex flex-col py-36 justify-center items-center h-auto">
      <div className="flex flex-col items-center justify-center gap-y-10">
        <img src={picha} alt="logo" className="animate-bounce" />
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold text-blue-950">Thank You!</h1>
          <p className="text-xl text-center text-gray-400 max-w-xl">
            Thanks for confirming your subscription! We hope you have Fun using
            our platform. If you ever need support, please feel Free to email us
            at support@loremgaming.com.
          </p>
        </div>
        <div>
          <Link to={"/"} className="text-xl md:hidden">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ThankYou;
