import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import Banner from "./component/banner/Banner";
import Stats from "./component/banner/Stats";
import Models from "./component/models/Models";
import { Suspense, useState } from "react";
import GetStarted from "./component/sections/GetStarted";
import Pricing from "./component/sections/Pricing";
import ReadyToTransform from "./component/sections/ReadyToTransform";
import Cart from "./component/models/Cart";

const getData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
const dataPromise = getData();

function App() {
  const [activetab, setActiveTab] = useState("product");
  const [carts, setCarts] = useState([]);
  return (
    <>
      <header>
        <Navbar />

        <Banner />

        <Stats />
      </header>

      <main>
        <section>
          <div className="text-center space-y-3 my-10">
            <h2 className="text-5xl font-bold">Premium Digital Tools</h2>
            <p className="text-gray-500">
              Choose from our curated collection of premium digital products
              designed <br /> to boost your productivity and creativity.
            </p>
          </div>
          <div className="flex gap-2 justify-center my-6">
            <button
              onClick={() => setActiveTab("product")}
              className="px-6 py-2 text-white text-lg font-semibold rounded-full 
              bg-linear-to-r from-[#4F39F6]  to-[#9514FA] shadow-lg cursor-pointer transform transition duration-300 hover:scale-105"
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab("cart")}
              className="px-6 py-2 rounded-full text-purple-600 font-semibold 
                      border-2 border-purple-600 cursor-pointer transform transition duration-300 hover:scale-105"
            >
              Cart ({carts.length})
            </button>
          </div>
          <Suspense
            fallback={
              <span className="loading loading-spinner loading-xl"></span>
            }
          >
            {activetab === "product" && (
              <Models
                dataPromise={dataPromise}
                carts={carts}
                setCarts={setCarts}
              />
            )}
          </Suspense>

          {activetab === "cart" && <Cart carts={carts} setCarts={setCarts} />}
        </section>

        <section>
          <GetStarted />
        </section>

        <section>
          <Pricing />
        </section>

        <section className="mt-15">
          <ReadyToTransform />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
