import ItemListContainer from "./components/ItemsListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, Navigate, HashRouter } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./components/Context/CartContext";
import Cart from "./components/Cart/Cart";





function App() {

  return (

      <CartProvider>

        <BrowserRouter>
        
          <Navbar/>
    
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/productos/:categoryId" element={<ItemListContainer/>} />
            <Route path="/detail/:itemId" element={<ItemDetailContainer/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="*" element={<Navigate to="/"/>} />
          </Routes>
        
        </BrowserRouter>

      </CartProvider>
    
    
  )
}

export default App;

