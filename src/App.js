import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import DetailProject from "./pages/DetailProject";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project/*" element={<Project />}>
              <Route path="detail/:id/"  element={<DetailProject />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
