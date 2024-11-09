import React from "react";
import { Helmet } from "react-helmet";
import { NavLink, Outlet, useLoaderData, useLocation } from "react-router-dom";
import Categories from "./Categories";

const Home = () => {
  const location = useLocation();
  const data = useLoaderData();

  return (
    <>
      <Helmet>
        <title>Gadget Heaven</title>
      </Helmet>

      {/* container */}
      <div className="relative bg-gray-100">
        <div className="w-11/12 mx-auto bg-purple-600 text-white p-10 text-center h-[450px] rounded-b-2xl">
          <div className=" w-3/4  mx-auto">
            <h2 className="text-5xl font-bold">
              Upgrade Your Tech Accessories with Gadget Heaven
            </h2>
            <p className="mt-4">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button className="text-[#9538E2] font-bold bg-white rounded-full mt-4 px-5 py-3">
              Shop Now
            </button>
          </div>
        </div>

        {/* banner img card */}
        <div className="absolute top-[300px] left-36 w-3/4 h-[463px]  ">
          <img
            className="w-11/12 h-[463px]  outline outline-offset-8 outline-white rounded-3xl mx-auto"
            src="/banner.jpg"
          />
        </div>

        <div className="mt-[380px] w-11/12 mx-auto">
          <h1 className="text-center text-4xl font-bold mb-10">
            Explore Cutting-Edge Gadgets
          </h1>
          {/* sidebar and cards container */}
          <div className="flex gap-10 pb-14">
            {/* sidebar */}
            <div className="w-1/6 h-[410px] flex flex-col px-3 py-8 text-center rounded-xl bg-white">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `p-2 bg-gray-100 rounded-full font-semibold ${
                    isActive
                      ? "bg-purple-500 text-white font-semibold"
                      : "hover:text-purple-700"
                  }`
                }
              >
                All Product
              </NavLink>
              <Categories categories={data}></Categories>
              <NavLink
                to={"/chargers"}
                className={({ isActive }) =>
                  `p-2 bg-gray-100 rounded-full font-semibold ${
                    isActive
                      ? "bg-purple-500 text-white "
                      : " hover:text-purple-700"
                  }`
                }
              >
                Chargers
              </NavLink>
            </div>
            {/* all cards outlet*/}
            <div className="w-full">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
