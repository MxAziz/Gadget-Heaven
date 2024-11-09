import React from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, useParams } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const GadgetDetails = () => {
  const data = useLoaderData();
  const { gadgetId } = useParams();
  const singleData = data.find((d) => d.product_id === gadgetId);
      console.log(singleData);

    const {
      product_image,
      product_title,
      price,
      description,
      specification,
      availability,
      rating,
    } = singleData;

  return (
    <>
      <div className="">
        <Helmet>
          <title>Gadget Details || Gadget Heaven</title>
        </Helmet>
      </div>
      <div className="bg-gray-100  pb-[440px]">
        {/* color page */}
        <div className="h-[300px] text-center space-y-4 bg-[#9538E2] text-white py-8">
          <h1 className="text-4xl font-bold">Product Details</h1>
          <p>
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to
            <br /> the coolest accessories, we have it all!
          </p>
        </div>
        {/* dynamic card container */}
        <div className="absolute top-[260px] left-[180px] flex gap-4 p-8 bg-white rounded-3xl  border-2">
          <img className="rounded-2xl w-[400px]" src={product_image} />
          <div className=" space-y-3">
            <h1 className="text-lg font-bold">{product_title}</h1>
            <p className="font-medium">Price: $ {price}</p>
            <button className="border-2 border-[#2f9c08d0] text-[#2f9c08b9] px-3 py-1 rounded-full bg-[#309C081A]">
              {availability ? "In Stock" : "Stock Out"}
            </button>
            <p className="text-[#09080F99]">{description}</p>
            <h3 className="text-lg font-bold">Specification:</h3>
            <div className="text-[#09080fa7]">
              <p>1. {specification[0]}</p>
              <p>2. {specification[1]}</p>
              <p>3. {specification[2]}</p>
              <p>4. {specification[3]}</p>
              <p>5. {specification[4]}</p>
            </div>

            <h3 className="text-lg font-bold">Rating: {rating}</h3>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-400"
              />
            </div>
            <div className="flex gap-4">
              <button className="flex gap-1 items-center px-4 py-2 font-bold bg-purple-500 rounded-full text-white">
                Add to Cart <IoCartOutline />
              </button>
              <button className="border-2 rounded-full px-3">
                <FaRegHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GadgetDetails;
