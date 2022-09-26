import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import { CartProvider } from './context/CartContext';

import NavBar from "./components/NavBar";

import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemCategoryContainer from './components/ItemCategoryContainer';
import CartContainer from './components/CartContainer';
import Products from './components/Products';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:categoryId" element={<ItemCategoryContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;

