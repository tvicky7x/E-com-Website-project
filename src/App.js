import React, { useContext } from "react";
import Context from "./Context";
import NavbarCom from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/Cart/Cart";
import Products from "./Products";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Hero from "./Components/Hero/Hero";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/products", element: <Products /> },
  { path: "/about", element: <About /> },
]);

function App() {
  const ctx = useContext(Context);
  return (
    <>
      {ctx.Cart && <Cart />}
      <div className={`${ctx.Cart ? "vh-100 overflow-hidden" : ""}`}>
        <NavbarCom />
        <Hero />
        <RouterProvider router={router} />
        <Footer />
      </div>
    </>
  );
}

export default App;
