import { IoMdCheckmark } from "react-icons/io";

const ModelsCard = ({ data }) => {
  return (
    <div className="card-body bg-base-300 shadow-lg" key={data.id}>
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
          className="px-6 py-2 text-white text-lg font-semibold rounded-full 
              bg-linear-to-r from-[#4F39F6]  to-[#9514FA] shadow-lg cursor-pointer w-full"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ModelsCard;
