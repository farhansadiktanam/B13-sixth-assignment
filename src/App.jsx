import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import Banner from "./component/banner/Banner";
import Stats from "./component/banner/Stats";
import Models from "./component/models/Models";
import { Suspense } from "react";
import GetStarted from "./component/sections/GetStarted";

const getData = async () => {
  const res = await fetch("/public/data.json");
  return res.json();
};
const dataPromise = getData();

function App() {
  return (
    <>
      <header>
        <Navbar />

        <Banner />

        <Stats />
      </header>

      <main>
        <section>
          <Suspense
            fallback={
              <span className="loading loading-spinner loading-xl"></span>
            }
          >
            <Models dataPromise={dataPromise} />
          </Suspense>
        </section>

        <section>
          <GetStarted />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
