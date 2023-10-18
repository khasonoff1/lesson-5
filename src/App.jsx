import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import LoginPage from "./pages/loginPage/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="products" element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
