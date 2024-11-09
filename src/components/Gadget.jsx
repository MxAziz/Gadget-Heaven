import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Gadget = ({ gadget }) => {

    const { product_id, product_image, product_title, price } = gadget || {};

    // const navigate = useNavigate();
    // const goToDetails = (product_id) => {
    //   navigate(`/gadgetDetails/${product_id}`);
    // };


    return (
      <div>
        {/* container */}
        <div className="border-2 p-6 rounded-xl min-h-[360px] bg-white">
          <img className='w-full h-44 rounded-xl mb-4 object-cover' src={product_image} alt="" />
          <h3 className="text-xl font-bold">{product_title}</h3>
          <p className='text-gray-600 mb-4'>Price: $ {price}</p>
          <NavLink to={`/gadget/${product_id}`} className="px-3 py-2 font-bold rounded-full border-2 text-purple-500 border-purple-500">
            View Details
          </NavLink>
        </div>
      </div>
    );
};

export default Gadget;