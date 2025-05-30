import "./App.css";
import { Brand, Cta, Navbar } from "./components";
import {
  Blog,
  Features,
  Header,
  Footer,
  Possibility,
  WhatGPT3,
} from "./containers";

function App() {
  return (
    <>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
      </div>

      <div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
      </div>
    </>
  );
}

export default App;
