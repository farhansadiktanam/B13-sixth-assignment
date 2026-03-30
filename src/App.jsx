import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import Banner from "./component/banner/Banner";
import Stats from "./component/banner/Stats";
import Models from "./component/models/Models";
import { Suspense } from "react";

const getData = async () => {
  const res = await fetch("/public/data.json");
  return res.json();
};

function App() {
  const dataPromise = getData();
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

        <section></section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
