import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Helmet>
        <title>Dashboard || Gadget Heaven</title>
      </Helmet>

      <div className="text-center space-y-4 bg-[#9538E2] text-white py-8">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p>
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <div className="space-x-4">
          <NavLink to={"/cart"}>Cart</NavLink>
          <NavLink to={"/wishlist"}>Wishlist</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
