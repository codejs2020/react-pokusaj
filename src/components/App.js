import React from 'react';
import '../App.css';
import Hero from "./Hero";
import MainMenu from "./MainMenu";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
        <Header/><Hero/><MainMenu/><Footer/>
    </div>
  );
}

export default App;
