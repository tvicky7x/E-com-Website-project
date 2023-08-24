import React from "react";
import NavbarCom from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Footer from "../Components/Footer/Footer";

function Error() {
  return (
    <>
      <NavbarCom />
      <Hero />
      <div className="text-center p-2">
        <h1>
          <i class="bi bi-emoji-frown"></i> A error occurred!
        </h1>
        <p>Could not find the page!</p>
      </div>
      <Footer />
    </>
  );
}

export default Error;
