import { use } from "react";
import { IoMdCheckmark } from "react-icons/io";
const models = ({ dataPromise }) => {
  const data = use(dataPromise);
  console.log(data);

  return (
    <div className="container mx-auto max-w-281 p-15">
      <div className="text-center space-y-3">
        <h2 className="text-5xl font-bold">Premium Digital Tools</h2>
        <p className="text-gray-500">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>

        <div className="flex gap-2 justify-center ">
          <button
            className="px-6 py-2 text-white text-lg font-semibold rounded-full 
              bg-linear-to-r from-[#4F39F6]  to-[#9514FA] shadow-lg cursor-pointer"
          >
            Products
          </button>
          <button
            className="px-6 py-2 rounded-full text-purple-600 font-semibold 
                      border-2 border-purple-600 cursor-pointer"
          >
            Cart (0)
          </button>
        </div>
      </div>

      <div className="card  grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {data.map((data) => {
          return (
            <>
              <div className="card-body bg-base-200 shadow-lg" key={data.id}>
                <span className="badge badge-xs badge-warning">
                  Most Popular
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
                        <IoMdCheckmark className="text-green-500 text-lg" />{" "}
                        {feature}
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
            </>
          );
        })}
      </div>
    </div>
  );
};

export default models;
