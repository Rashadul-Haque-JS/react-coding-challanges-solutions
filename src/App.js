import { BrowserRouter, Routes, Route } from "react-router-dom";
import style from "./module/index.module.css";
import MultiViews from "./views/MultiViiews";
import Navigation from "./components/Navigation"

// import Card from "./components/ProductKort"
import Products from "./views/ProductList";

function App() {
  return (
    <div className={style.App}>
      <BrowserRouter>
        <header className="navbar navbar-dark bg-dark">
          <Navigation />
        </header>
        <Routes>
          <Route path="/" element={<MultiViews />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
