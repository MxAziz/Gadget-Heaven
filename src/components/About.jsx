import React from 'react';
import { Helmet } from 'react-helmet';

const About = () => {
    return (
      <div className="bg-gray-100 pb-6">
        <Helmet>
          <title>About || Gadget Heaven</title>
        </Helmet>

        {/* container */}
        <div className="text-center space-y-4 bg-[#9538E2] text-white py-8">
          <h1 className="text-4xl font-bold">About</h1>
          <p className="font-bold">Muhammad Aziz | Nov 7, 2024 | 1 min read</p>
          <p>
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br /> the coolest accessories, we
            have it all!
          </p>
        </div>

        <div className=" w-11/12 mx-auto my-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p>
            Feel free to communicate with us at any time. Whether you are
            unraveling a mystery or simply extending greetings, <br /> we are
            attentive. While we cannot guarantee quantum speed, we endeavor to
            respond to you promptly.
          </p>

          <p className="mt-4 font-bold">
            Email:{" "}
            <small className="text-lg hover:text-purple-500">
              contact@gadgetheaven.com
            </small>
          </p>
        </div>

        <div className="w-11/12 mx-auto text-center">
          <h1 className="text-4xl font-bold mb-5">Meet The Founder</h1>
          <img
            className="h-[450px] w-2/4 rounded-xl mx-auto"
            src="/founder.jpg"
            alt=""
          />

          <div className=" space-y-4 mt-4">
            <div className="">
              <h3 className="font-semibold">Hello,</h3>
              <p>
                I’m <small className="font-bold text-lg">Muhammad Aziz</small>,
                a 20-year-old on a mission to bring his ideas to life.
                <br /> I am also an open source advocate, follow me on github
                <a
                  className="font-bold hover:text-purple-500"
                  href="https://github.com/MxAziz"
                >
                  {" "}
                  https://github.com/MxAziz
                </a>
              </p>
            </div>

            <p className="font-bold">
              Email:{" "}
              <a
                className=" hover:text-purple-500"
                href="mailto:hereabdulaziz@gail.com"
              >
                hereabdulaziz@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    );
};

export default About;