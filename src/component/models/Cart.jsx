import React from "react";

import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handleDelete = (id) => {
    const filterItem = carts.filter((item) => item.id !== id);
    setCarts(filterItem);
    toast.error("Item Deleted");
  };

  const handlePayment = () => {
    setCarts([]);
    toast.success("Payment Successfully");
  };

  return (
    <div className="p-10 text-center container mx-auto max-w-5xl my-3">
      <h2 className="text-4xl font-bold mb-5">Your Cart</h2>

      {carts.length === 0 ? (
        <p className="text-red-500">Your cart is empty</p>
      ) : (
        <>
          {carts.map((item) => {
            return (
              <div key={item.id} className="my-3">
                <div className="flex justify-between items-center bg-base-300 p-5 rounded-lg ">
                  <div className="flex gap-5">
                    <img
                      src={item.icon}
                      className="h-20 w-20 object-contain"
                      alt=""
                    />
                    <div className="space-y-2">
                      <h2 className="text-xl font-bold">{item.name}</h2>
                      <p className=" text-md">
                        <span className="font-bold">${item.price}</span>/Month
                      </p>
                    </div>
                  </div>
                  <div>
                    <a
                      className="btn btn-error"
                      onClick={() => handleDelete(item.id)}
                    >
                      Remove
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="flex items-center bg-base-300 justify-between rounded-lg p-6 my-5">
            <h2 className=" font-bold  text-xl">Total</h2>
            <p className="font-bold text-2xl">${totalPrice}</p>
          </div>

          <button
            onClick={handlePayment}
            className="btn btn-secondary w-full font-bold text-lg  text-white"
          >
            Proceed To Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
