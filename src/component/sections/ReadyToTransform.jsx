import React from "react";

const ReadyToTransform = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6]  to-[#9514FA] p-35">
      <div className=" text-white container mx-auto w-5xl text-center space-y-5">
        <h2 className="text-5xl font-bold">
          Ready to Transform Your Workflow?
        </h2>
        <p className="text-gray-300">
          Join thousands of professionals who are already using Digitools to
          work smarter.Start <br /> your free trial today.
        </p>

        <div className="my-3">
          <button className="btn btn-soft rounded-full mr-3 ">
            Explore Products
          </button>
          <button className="btn btn-outline rounded-full ">
            View Pricing
          </button>
        </div>
        <p className="text-gray-300">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default ReadyToTransform;
