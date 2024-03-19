import { useState } from "react";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import Contact from "./pages/Contact";
import Explore from "./pages/Explore";
import Footer from "./pages/Footer";
import Work from "./pages/Work";
import FooterBar from "./pages/FooterBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <HomePage />
      <Work />
      <Explore />
      <Contact />
      {/* <FooterBar /> */}
    </>
  );
}

export default App;
