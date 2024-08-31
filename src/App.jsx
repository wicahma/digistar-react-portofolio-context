import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import DetailProject from "./pages/DetailProject";
import Navbar from "./components/Navbar";
import { useContext, useEffect } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const root = document.getElementById("root");
    root.classList.add("transition-all", "duration-300");
    if (theme === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }, [theme]);

  return (
    <Router>
      <div className="transition-all duration-300">
        <Navbar />
        <div className="bg-orange-50 dark:bg-gray-950 min-h-screen transition-all duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project/*" element={<Project />}>
              <Route path="detail/:id/" element={<DetailProject />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
