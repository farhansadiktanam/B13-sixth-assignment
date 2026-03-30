import React from "react";

const Stats = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6]  to-[#9514FA] p-15">
      <div className=" text-white container mx-auto w-5xl">
        <ul className="flex justify-between sm:flex-wrap">
          <li>
            <h3 className="text-4xl font-bold mb-2">50K+</h3>
            <p>Active Users</p>
          </li>
          <li>
            <h3 className="text-4xl font-bold mb-2">200+</h3>
            <p>Premium Tools</p>
          </li>
          <li>
            <h3 className="text-4xl font-bold mb-2">4.9</h3>
            <p>Rating</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Stats;
