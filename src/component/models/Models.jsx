import { use } from "react";

import ModelsCard from "./ModelsCard";

const Models = ({ dataPromise }) => {
  const data = use(dataPromise);
  console.log(data);

  return (
    <div className="container mx-auto max-w-281 p-15">
      <div className="text-center space-y-3 my-10">
        <h2 className="text-5xl font-bold">Premium Digital Tools</h2>
        <p className="text-gray-500">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>

        <div className="flex gap-2 justify-center ">
          <button
            className="px-6 py-2 text-white text-lg font-semibold rounded-full 
              bg-linear-to-r from-[#4F39F6]  to-[#9514FA] shadow-lg cursor-pointer transform transition duration-300 hover:scale-105"
          >
            Products
          </button>
          <button
            className="px-6 py-2 rounded-full text-purple-600 font-semibold 
                      border-2 border-purple-600 cursor-pointer transform transition duration-300 hover:scale-105"
          >
            Cart (0)
          </button>
        </div>
      </div>

      <div className="card  grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {data.map((data) => {
          return <ModelsCard data={data} key={data.id} />;
        })}
      </div>
    </div>
  );
};

export default Models;
