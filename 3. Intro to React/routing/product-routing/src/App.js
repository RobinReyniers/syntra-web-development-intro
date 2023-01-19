import Home from "./Home";
import Details from "./Details";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Details/:id" element={<Details />} />
    </Routes>
  );
}

export default App;
