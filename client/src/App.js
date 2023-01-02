import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import About from "./scenes/about/About";
import Checkout from "./scenes/checkout/Checkout";
import Confirmation from "./scenes/checkout/Confirmation";
import CartMenu from "./scenes/global/CartMenu";
import Footer from "./scenes/global/Footer";
import Navbar from "./scenes/global/Navbar";
import Home from "./scenes/home/Home";
import ItemDetails from "./scenes/itemDetails/ItemDetails";

const ScrollToTop = () => {
  const {pathName} = useLocation()

  useEffect(() => {
   window.scrollTo(0, 0)
  }, [pathName])

  return null;
}

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Navbar/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="item/:itemId" element={<ItemDetails/>}/>
        <Route path="checkout" element={<Checkout/>}/>
        <Route path="checkout/success" element={<Confirmation/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <CartMenu/>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
