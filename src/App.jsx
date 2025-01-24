import Navbar from "./components/Navbar";
import About from "./components/About";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <About />
      </BrowserRouter>
    </>
  );
}

export default App;
