import React, { useContext } from "react";
import Context from "./Context";
import NavbarCom from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Store from "./Components/Store/Store";
import { Button } from "react-bootstrap";
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/Cart/Cart";

function App() {
  const ctx = useContext(Context);
  return (
    <>
      {ctx.Cart && <Cart />}
      <div className={`${ctx.Cart ? "vh-100 overflow-hidden" : ""}`}>
        <NavbarCom />
        <Hero />
        <Store />
        <div className="bg-dark-subtle py-3 text-center">
          <Button variant="dark" size="lg" onClick={ctx.openCart}>
            View Cart
          </Button>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
