import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { ProductsProvider } from "./Context/ProductContext";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div>
      <ProductsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<HomePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ProductsProvider>
    </div>
  );
}

export default App;
