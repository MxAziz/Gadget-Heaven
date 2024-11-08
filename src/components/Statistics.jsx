import React from 'react';
import { Helmet } from 'react-helmet';

const Statistics = () => {
    return (
      <div>
        <Helmet>
          <title>Statistics || Gadget Heaven</title>
        </Helmet>

        <div className="text-center space-y-4 bg-[#9538E2] text-white py-8">
          <h1 className="text-4xl font-bold">Statistics</h1>
          <p>
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br /> the coolest accessories, we
            have it all!
          </p>
        </div>
      </div>
    );
};

export default Statistics;