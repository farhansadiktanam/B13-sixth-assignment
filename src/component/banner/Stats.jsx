import React from "react";

const Stats = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6]  to-[#9514FA] p-15">
      <div className="text-white max-w-5xl mx-auto px-4">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <li>
            <h3 className="text-3xl sm:text-4xl font-bold mb-2">50K+</h3>
            <p className="text-sm sm:text-base text-gray-200">Active Users</p>
          </li>

          <li>
            <h3 className="text-3xl sm:text-4xl font-bold mb-2">200+</h3>
            <p className="text-sm sm:text-base text-gray-200">Premium Tools</p>
          </li>

          <li>
            <h3 className="text-3xl sm:text-4xl font-bold mb-2">4.9</h3>
            <p className="text-sm sm:text-base text-gray-200">Rating</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Stats;
