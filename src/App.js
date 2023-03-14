import ItemListContainer from "./components/ItemsListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokeApi from "./ejemplos/PokeApi/PokeApi";
import Nosotros from "./components/Nosotros/Nosotros";
import Contacto from "./components/Contacto/Contacto";






function App() {


  return (

    <BrowserRouter>
    
      <Navbar />

      <Routes>
        <Route path="/" element={ <ItemListContainer /> }/>
        <Route path="productos/:categoryId" element={ <ItemListContainer /> }/>
        {/* <Route path="/detail/:itemId" element={ <ItemDetailContainer/> }/> */}
        <Route path="/nosotros" element={<Nosotros/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path="/pokemon" element={<PokeApi/>}/>
      </Routes>

      
      

      
      
      
    
    </BrowserRouter>
  );
}

export default App;
