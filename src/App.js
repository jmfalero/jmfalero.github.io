import NavBar from "./components/NavBar";
import React from "react";
import Landing from "./components/Landing";
import Footer from "./components/Footer.jsx";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div >
      <NavBar />
      <ItemListContainer greeting={"Pagina en construccion, sin productos!"} />
      <Landing />
      <Footer />
    </div>
       
  );
}

export default App;
