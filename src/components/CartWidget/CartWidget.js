import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";






const CartWidget= ()=> {

    const {totalCantidad} = useContext(CartContext)

    return (
        <Link to="/cart" style={{
            fontSize: "26px",
            color: "white"
        }}>
            <FaShoppingCart/>
            <span>{totalCantidad()} </span>
        </Link>
    )
}

export default CartWidget