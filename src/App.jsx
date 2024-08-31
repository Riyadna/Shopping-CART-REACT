import "./App.css";
import { Header } from "./Component/Header";
import { Home } from "./Component/Home";
import { Viewcart } from "./Component/Viewcart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { cartContext } from "./Component/cartContext";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <cartContext.Provider value={{cart, setCart}}>
        <BrowserRouter>
          <Header cart={cart} />
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/Cart"
                element={<Viewcart />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </cartContext.Provider>
    </>
  );
}

export default App;
