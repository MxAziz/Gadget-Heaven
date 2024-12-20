import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import { GrTechnology } from "react-icons/gr";

const Cart = () => {
  const { cart, totalCost, removeFromCart, clearCart, sortByPrice } = useCart();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handlePurchase = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    clearCart();
    navigate('/')
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold">Cart</h2>
        <div className="flex gap-3">
          <p className="text-lg font-bold mt-2">Total cost: ${totalCost}</p>
          <button
            onClick={sortByPrice}
            className=" flex items-center gap-2 px-4 py-2 border-2 border-purple-600 font-bold text-purple-600 rounded-full mb-4"
          >
            Sort by Price
            <GrTechnology />
          </button>
          <button
            onClick={handlePurchase}
            disabled={cart.length === 0 || totalCost === 0}
            className={`px-4 py-2 italic font-bold rounded-full mb-4 ml-2 ${
              cart.length === 0 || totalCost === 0
                ? "bg-gray-400 text-gray-800 cursor-not-allowed"
                : "bg-purple-600 text-white"
            }`}
          >
            Purchase
          </button>
        </div>
      </div>

      {/* All Cart Items */}
      <div>
        {cart.map((item) => (
          <div
            key={item.product_id}
            className="flex items-center justify-between border p-8 mb-4 rounded-xl bg-white"
          >
            <img
              src={item.product_image}
              alt={item.product_title}
              className="w-32 h-28 rounded-xl"
            />
            <div className=" space-y-2">
              <h3 className="font-bold text-xl">{item.product_title}</h3>
              <h3 className="">{item.description}</h3>
              <p>Price: ${item.price}</p>
            </div>
            <button onClick={() => removeFromCart(item.product_id)}>
              <FaTimes className=" size-6 mr-4" color="red" />
            </button>
          </div>
        ))}
      </div>

      {/* Payment Successful Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-12 rounded-2xl shadow-lg text-center">
            <img
              className="mx-auto mb-4"
              src="./Group.png"
              alt="Payment Success"
            />
            <h2 className="text-2xl font-bold mb-4">Payment Successfully</h2>
            <div className="divider"></div>
            <div className="space-y-2 mb-3">
              <p>Thank you for your purchase!</p>
              <p>Total: ${totalCost}</p>
            </div>
            <button
              onClick={closeModal}
              className="btn btn-wide px-4 py-2  font-bold text-lg hover:text-black rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
