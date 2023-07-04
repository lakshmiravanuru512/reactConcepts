import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import {Home} from "./Components/Home";
// import About from "./About";
const About = React.lazy(() => import("./Components/About"));

const App = () => {
  return (
    <div className="App">
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback={<div>Loading..</div>}>
              <About />
            </React.Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default App;