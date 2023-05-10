import ItemListContainer from "../components/ItemsListContainer/ItemListContainer";
import { Navbar } from "../components/Navbar/Navbar";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import Cart from "../components/Cart/Cart";
import Checkout from "../components/Checkout/Checkout";
import { Routes, Route, Navigate } from "react-router-dom";




const PrivateRoutes= ()=> {

    return (
        <>
            <Navbar/>
                
                <Routes>
                    <Route path="/" element={<ItemListContainer/>}/>
                    <Route path="/productos/:categoryId" element={<ItemListContainer/>} />
                    <Route path="/detail/:itemId" element={<ItemDetailContainer/>} />
                    <Route path="/cart" element={<Cart/>} />
                    <Route path="/checkout" element={<Checkout/>} />
                    <Route path="*" element={<Navigate to="/"/>} />
                </Routes>
        </>
    )
}

export default PrivateRoutes