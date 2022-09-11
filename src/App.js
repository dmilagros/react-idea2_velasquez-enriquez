import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemCategoryContainer from './components/ItemCategoryContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:categoryId" element={<ItemCategoryContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

