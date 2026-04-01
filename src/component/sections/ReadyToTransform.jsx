import React from "react";

const ReadyToTransform = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6]  to-[#9514FA] p-35">
      <div className="text-white max-w-4xl mx-auto text-center space-y-5">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Ready to Transform Your Workflow?
        </h2>

        <p className="text-gray-200 text-sm sm:text-base md:text-lg">
          Join thousands of professionals who are already using Digitools to
          work smarter. <br className="hidden sm:block" />
          Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-4">
          <button className="btn btn-soft rounded-full w-full sm:w-auto">
            Explore Products
          </button>
          <button className="btn btn-outline rounded-full w-full sm:w-auto">
            View Pricing
          </button>
        </div>

        <p className="text-gray-300 text-xs sm:text-sm mt-3">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default ReadyToTransform;
