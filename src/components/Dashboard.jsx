import React from "react";
import { Helmet } from "react-helmet";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Helmet>
        <title>Dashboard || Gadget Heaven</title>
      </Helmet>

      <div className="text-center space-y-5 bg-[#9538E2] text-white py-8">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p>
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <div className="space-x-4 pt-3">
          <NavLink
            className={({
              isActive,
            }) => ` border-2 rounded-full px-6 py-2  font-bold
            ${isActive ? "bg-white text-purple-600" : ""}
            `}
            to={"/dashboard/cart"}
          >
            Cart
          </NavLink>
          <NavLink
            className={({ isActive }) => ` border-2 rounded-full px-6 py-2 font-bold
            ${isActive ? "bg-white text-purple-600 " : ""}
            `}
            to={"/dashboard/wishlist"}
          >
            Wishlist
          </NavLink>
        </div>
      </div>
      <div className="">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
