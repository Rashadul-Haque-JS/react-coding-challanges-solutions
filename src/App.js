import { BrowserRouter, Routes, Route } from "react-router-dom";
import style from "./module/index.module.css";
import Event from "./views/EventState";
import Conditional from "./views/Conditional";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import Card from "./components/ProductKort"
import Products from "./views/ProductList";
import CompProps from "./views/PropsAndComps";

function App() {
  return (
    <div className={style.App}>
      <BrowserRouter>
        <header className="navbar navbar-dark bg-dark">
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Event />} />
            <Route path="/conditional" element={<Conditional />} />
            <Route path="/propS" element={<CompProps />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
        <ToastContainer
          theme="colored"
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
