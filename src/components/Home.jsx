import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const Home = () => {

    const location = useLocation();

    if (location.pathname !== "/") {
        return null;
    }


      return (
        <>
          <Helmet>
            <title>Gadget Heaven</title>
          </Helmet>

          {/* container */}
          <div className="relative mb-[400px]">
            <div className="w-11/12 mx-auto bg-purple-600 text-white p-10 text-center h-[450px] rounded-b-2xl">
              <div className=" w-3/4  mx-auto">
                <h2 className="text-5xl font-bold">
                  Upgrade Your Tech Accessories with Gadget Heaven
                </h2>
                <p className="mt-4">
                  Explore the latest gadgets that will take your experience to
                  the next level. From smart devices to the coolest accessories,
                  we have it all!
                </p>
                <button className="text-[#9538E2] font-bold bg-white rounded-full mt-4 px-5 py-3">
                  Shop Now
                </button>
              </div>
            </div>

            {/* banner img card */}
            <div className="absolute top-[300px] left-36 w-3/4 h-[263px]  ">
              <img
                className="w-11/12 h-[463px] outline outline-offset-8 outline-white rounded-3xl mx-auto"
                src="/banner.jpg"
              />
            </div>
          </div>
        </>
      );
};

export default Home;