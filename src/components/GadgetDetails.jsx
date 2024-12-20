import React from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, useParams } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { useCart } from "../components/CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GadgetDetails = () => {
  const data = useLoaderData();
  const { gadgetId } = useParams();
  const singleData = data.find((d) => d.product_id === gadgetId);
  const { addToCart, addToWishlist, wishlist } = useCart();

  const {
    product_image,
    product_title,
    price,
    description,
    specification,
    availability,
    rating,
  } = singleData;

  const isWishlisted = wishlist.find((item) => item.product_id === gadgetId);

  // Handle Add to Cart with Toast
  const handleAddToCart = () => {
    addToCart(singleData);
    toast.success("Product added to cart!", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  // Handle Add to Wishlist with Toast
  const handleAddToWishlist = () => {
    if (!isWishlisted) {
      addToWishlist(singleData);
      toast.success("Product added to wishlist!", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Gadget Details || Gadget Heaven</title>
      </Helmet>
      <div className="bg-gray-100 pb-[440px]">
        <div className="h-[350px] text-center bg-[#9538E2] text-white py-8">
          <h1 className="text-4xl font-bold py-4">Product Details</h1>
          <p>
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br /> the coolest accessories, we
            have it all!
          </p>
        </div>
        <div className="absolute top-[280px] left-[180px] flex gap-4 p-8 bg-white rounded-3xl border-2">
          <img
            className="rounded-2xl w-[400px]"
            src={product_image}
            alt={product_title}
          />
          <div className="space-y-3">
            <h1 className="text-lg font-bold">{product_title}</h1>
            <p className="font-medium">Price: $ {price}</p>
            <button className="border-2 border-[#2f9c08d0] text-[#2f9c08b9] px-3 py-1 rounded-full bg-[#309C081A]">
              {availability ? "In Stock" : "Stock Out"}
            </button>
            <p className="text-[#09080F99]">{description}</p>
            <h3 className="text-lg font-bold">Specification:</h3>
            <div>
              {specification.map((spec, index) => (
                <p key={index}>
                  {index + 1}. {spec}
                </p>
              ))}
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
              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="flex items-center gap-1 px-4 py-2 font-bold bg-purple-500 rounded-full text-white"
              >
                Add to Cart <IoCartOutline />
              </button>

              {/* Add to Wishlist Button */}
              <button
                disabled={isWishlisted}
                onClick={handleAddToWishlist}
                className="border-2 rounded-full px-3"
              >
                <FaRegHeart color={isWishlisted ? "gray" : "black"} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GadgetDetails;
