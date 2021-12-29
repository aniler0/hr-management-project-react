import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { Navbar } from "components";

const Home = lazy(() => import("pages/Home"));
const About = lazy(() => import("./pages/About"));
const Candidates = lazy(() => import("./pages/Candidates"));
const UserDetail = lazy(() => import("./pages/UserDetail"));

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="candidates" element={<Candidates />} />
          <Route path="/candidates/:id" element={<UserDetail />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
