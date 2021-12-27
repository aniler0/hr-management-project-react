import { Layout } from "components";
import Home from "pages/Home";
import { Route, Routes } from "react-router-dom";

import "./App.scss";
import About from "./pages/About";
import Candidates from "./pages/Candidates";

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
