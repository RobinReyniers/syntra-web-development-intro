import "./App.css";
import { useState } from "react";
import Home from "./components/Home";
import Details from "./components/Details";
import Navigationbar from "./components/Navbar";
import { ThemeProvider } from "./state/Themecontext";
import { ProductProvider } from "./state/Productcontext";
import { Routes, Route } from "react-router-dom";

function App() {
  const [inputName, setInputName] = useState();
  const [inputPrice, setInputPrice] = useState();
  const [inputDescription, setInputDescription] = useState();
  return (
    <div>
      <ThemeProvider>
        <ProductProvider
          inputName={inputName}
          setInputName={setInputName}
          inputPrice={inputPrice}
          setInputPrice={setInputPrice}
          inputDescription={inputDescription}
          setInputDescription={setInputDescription}
        >
          <Navigationbar />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  inputName={inputName}
                  setInputName={setInputName}
                  inputPrice={inputPrice}
                  setInputPrice={setInputPrice}
                  inputDescription={inputDescription}
                  setInputDescription={setInputDescription}
                />
              }
            />
            <Route path="Details/:id" element={<Details />} />
          </Routes>
        </ProductProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
