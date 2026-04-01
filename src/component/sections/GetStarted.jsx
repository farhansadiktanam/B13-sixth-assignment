import { FaRegUser } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
import { BsRocketTakeoffFill } from "react-icons/bs";

const GetStarted = () => {
  return (
    <div className="container max-w-281 mx-auto">
      <div className="text-center space-y-3 px-4 py-12 md:py-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Get Started in 3 Steps
        </h2>
        <p className="text-gray-500 text-sm sm:text-base">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="p-6 rounded-xl bg-base-300 shadow-lg hover:shadow-xl transition">
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] p-3 rounded-full">
              <FaRegUser className="text-white text-3xl" />
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold">
              Create Account
            </h2>

            <p className="text-gray-500 text-sm">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="p-6 rounded-xl bg-base-300 shadow-lg hover:shadow-xl transition">
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] p-3 rounded-full">
              <FiBox className="text-white text-3xl" />
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold">
              Choose Products
            </h2>

            <p className="text-gray-500 text-sm">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="p-6 rounded-xl bg-base-300 shadow-lg hover:shadow-xl transition">
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] p-3 rounded-full">
              <BsRocketTakeoffFill className="text-white text-3xl" />
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold">
              Start Creating
            </h2>

            <p className="text-gray-500 text-sm">
              Start building and using tools instantly with no hassle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
