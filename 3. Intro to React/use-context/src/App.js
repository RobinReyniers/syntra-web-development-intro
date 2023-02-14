import "./App.css";
import Home from "./components/Home";
import Details from "./components/Details";
import Navigationbar from "./components/Navbar";
import { ThemeProvider } from "./state/Themecontext";
import { NavProvider } from "./state/Navcontext";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <ThemeProvider>
        <NavProvider>
          <Navigationbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Details" element={<Details />} />
          </Routes>
        </NavProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
