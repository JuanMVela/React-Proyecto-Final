import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//viws
import Home from "./views/Home/Home";
import Contact from "./views/Contact/Contact";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Category from "./views/Category/Category";
import Cart from "./views/Cart/Cart";
import CartProvider from "./CartContex";
import Shop from "./views/Shop/Shop";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <CartProvider>
        <div>
          <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/detail/:id" element={<ItemDetailContainer />} />
              <Route path="/category/:category" element={<Category />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/Shop" element={<Shop />} />
            </Routes>
          </div>
          <div>
            <Footer />
          </div>
      </CartProvider>
    </Router>
  );
}

export default App;
