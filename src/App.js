import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { TitleSlider } from "./components/TitleSlider";

function App() {
    return (
        <div className="App">
            <Navbar />
            <TitleSlider />
        </div>
    );
}

export default App;
