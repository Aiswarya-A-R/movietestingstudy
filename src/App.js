import React, { useContext } from "react";
import Navbar from "./Component/Navbar";

import Footer from "./Component/Footer";
import Body from "./Component/Body";
import { CardProvider } from "./Component/Context/Cardcontext";



function App() {


 
  return (
    <CardProvider >
      <div style={{ fontFamily: "Roboto", margin: 0 }}>
        <Navbar />
        <br />
        <br />
        <br />

        <Body />

        <Footer />
      </div>
    </CardProvider>
  );
}

export default App;
