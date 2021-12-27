import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Candidates from "./pages/Candidates";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="candidates" element={<Candidates />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
