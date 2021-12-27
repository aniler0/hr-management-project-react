import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Candidates from "./pages/Candidates";
import About from "./pages/About";
import { Layout } from "components";
import Home from "pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="candidates" element={<Candidates />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
