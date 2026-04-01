import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { toast } from "react-toastify";
import { FaCheck } from "react-icons/fa6";

const ModelsCard = ({ data, carts, setCarts }) => {
  const [buyNow, setBuyNow] = useState(false);

  const handleBuyNow = () => {
    setBuyNow(true);
    const isFound = carts.find((item) => item.id === data.id);
    if (isFound) {
      toast.error("Item already in cart");
      return;
    }

    setCarts([...carts, data]);
    toast.success("Item add to cart");
  };
  return (
    <div
      className="card-body bg-base-300 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
      key={data.id}
    >
      <span
        className={`badge badge-xs ${data.tagType === "Popular" ? "badge-warning" : "badge-success"} `}
      >
        {data.tagType}
      </span>
      <div className="w-10 h-10 my-3">
        <img src={data.icon} alt="" />
      </div>
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold">{data.name}</h2>
      </div>
      <p className="text-xl">
        <span className="font-bold">${data.price}</span>/{data.period}
      </p>
      <ul className="mt-6 flex flex-col gap-2 text-xs ">
        {data.features.map((feature, index) => {
          return (
            <li key={index} className="flex gap-2">
              <IoMdCheckmark className="text-green-500 text-lg" /> {feature}
            </li>
          );
        })}
      </ul>
      <div className="mt-6">
        <button
          onClick={handleBuyNow}
          className={`px-6 py-2 text-white text-lg font-semibold rounded-full 
             ${buyNow ? "bg-green-400" : "bg-linear-to-r from-[#4F39F6]  to-[#9514FA]"} shadow-lg cursor-pointer w-full`}
        >
          {buyNow ? (
            <p className="flex items-center gap-2  justify-center">
              <FaCheck /> Add to cart
            </p>
          ) : (
            "Buy Now"
          )}
        </button>
      </div>
    </div>
  );
};

export default ModelsCard;
