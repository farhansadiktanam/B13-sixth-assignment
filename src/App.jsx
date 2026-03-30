import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import Banner from "./component/banner/Banner";
import Stats from "./component/banner/Stats";

function App() {
  return (
    <>
      <header>
        <Navbar />

        <Banner />

        <Stats />
      </header>

      <main>
        <section></section>

        <section></section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
