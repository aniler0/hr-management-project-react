import { Route, Routes } from "react-router-dom";

import { Layout } from "components";

import Home from "pages/Home";
import About from "./pages/About";
import Candidates from "./pages/Candidates";
import UserDetail from "./pages/UserDetail";

import "./App.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="candidates" element={<Candidates />} />
          <Route path="/candidates/:id" element={<UserDetail />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
