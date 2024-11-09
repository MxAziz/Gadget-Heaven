import React from "react";

const Footer = () => {
  return (
    <div className="w-5/6 mx-auto py-16">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Gadget Heaven</h1>
        <p className="text-[#09080F99] mt-3">
          Leading the way in cutting-edge technology and innovation.
        </p>

        <div className="divider"></div>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* service */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold">Services</h3>
            <a href="#">Product Support </a>
            <a href="#">Order Tracking </a>
            <a href="#">Shipping & Delivery </a>
            <a href="#">Returns</a>
          </div>
          {/* company */}
          <div className="flex flex-col gap-2 my-4 md:my-0">
            <h3 className="text-lg font-bold">Company </h3>
            <a href="#">About Us </a>
            <a href="#">Careers</a>
            <a href="#">Contact </a>
          </div>
          {/* legacies */}
          <div className=" flex flex-col gap-2 md:mt-4 lg:mt-0">
            <h3 className="text-lg font-bold">Legal </h3>
            <a href="#">Terms of services</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
