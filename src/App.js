import React from "react"
import './App.scss';
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainContent">Body</div>
      <Footer />
    </div>
  );
}

export default App;
