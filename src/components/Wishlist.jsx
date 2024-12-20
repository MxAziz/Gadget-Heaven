import React from "react";
import { FaTimes } from "react-icons/fa";
import { useCart } from "./CartContext";

const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart } = useCart();

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Wishlist</h2>
      {wishlist.map((item) => (
        <div
          key={item.product_id}
          className="flex items-center justify-between border p-4 mb-4 rounded"
        >
          <img
            src={item.product_image}
            alt={item.product_title}
            className="w-32 h-32 rounded-xl"
          />
          <div className=" space-y-2">
            <h3 className="font-bold">{item.product_title}</h3>
            <p>Description: { item.description}</p>
            <p>Price: ${item.price }</p>
            <button
              onClick={() => addToCart(item)}
              className="px-4 py-2 bg-purple-600 text-white rounded-full"
            >
              Add to Cart
            </button>
          </div>
          <button onClick={() => removeFromWishlist(item.product_id)}>
            <FaTimes className=" size-6 mr-4" color="red" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;