import React from "react";
import Header from "./components/Header.js";
import Scroll from "./components/Scroll.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import "./style/App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Scroll>
        <Main />
      </Scroll>
      <Footer />
    </div>
  );
};

export default App;
