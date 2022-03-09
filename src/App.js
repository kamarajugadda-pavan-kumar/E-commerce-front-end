import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="productlist" element={<ProductList />} />
      <Route path="product" element={<Product />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="cart" element={<Cart />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
