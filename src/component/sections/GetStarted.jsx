import { FaRegUser } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
import { BsRocketTakeoffFill } from "react-icons/bs";

const GetStarted = () => {
  return (
    <div className="container max-w-281 mx-auto">
      <div className="text-center space-y-3 p-15">
        <h2 className="text-5xl font-bold">Get Started in 3 Steps</h2>
        <p className="text-gray-500">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="flex justify-between gap-4">
        <div className="flex justify-between items-center p-4 rounded-md bg-base-300 shadow-lg">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] inline-block p-3 rounded-full">
              <FaRegUser className="text-white text-3xl" />
            </div>

            <h2 className="text-2xl font-semibold">Create Account</h2>

            <p className="text-gray-500">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center  p-4 rounded-md bg-base-300 shadow-lg">
          <div className="flex flex-col items-center text-center  space-y-2">
            <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] inline-block p-3 rounded-full">
              <FiBox className="text-white text-3xl" />
            </div>

            <h2 className="text-2xl font-semibold">Choose Products</h2>

            <p className="text-gray-500">
              Browse our catalog and select the toolsthat fit your needs.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center  p-4 rounded-md bg-base-300 shadow-lg">
          <div className="flex flex-col items-center text-center  space-y-2">
            <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] inline-block p-3 rounded-full">
              <BsRocketTakeoffFill className="text-white text-3xl" />
            </div>

            <h2 className="text-2xl font-semibold">Start Creating</h2>

            <p className="text-gray-500">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
