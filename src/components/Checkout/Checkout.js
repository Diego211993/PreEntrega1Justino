import { useContext } from "react"
import { useState } from "react"
import { CartContext } from "../Context/CartContext"
import { Link, Navigate } from "react-router-dom"
import {db} from "../../firebase/config"
import {collection, addDoc, doc, updateDoc, getDoc} from "firebase/firestore"



const Checkout= ()=> {

    const {cart, totalCompra, vaciarCarrito} = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)
    const [values, setValues] = useState({
        nombre: "",
        direccion: "",
        email:""
    })

    const handleInputChange = (e) =>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit =(e) =>{
        e.preventDefault()
        
        if (values.nombre.length < 3) {
            alert("Nombre invalido")
            return
        }
        if (values.direccion.length < 3) {
            alert("Direccion invalida")
            return
        }
        if (values.email.length < 3) {
            alert("Email invalido")
            return
        }

        const orden = {
            cliente: values,
            items:cart.map((prod)=>({id: prod.id, price: prod.price, cantidad: prod.cantidad})),
            total: totalCompra(),
            fecha: new Date()
        }

        console.log("Submit", orden)

        const productosRef = collection(db, "peliculas")

        cart.forEach((item) => {

            const docRef = doc(productosRef, item.id)

            getDoc(docRef)
                .then((doc) =>{
                    if (doc.data().stock >= item.cantidad) {
                        updateDoc(docRef, {
                            stock: doc.data().stock - item.cantidad
                        
                    })

                    } else{
                        alert("No hay estock de " + item.name)
                    }

                })

            });

        const ordersRef = collection(db, "orders")

        addDoc(ordersRef, orden)
            .then((doc) =>{
                setOrderId(doc.id)
                vaciarCarrito()
            })
    }

    if (orderId) {
        return(
            <div className="container my-5">
                <h2>Tu orden se registró con éxito</h2>
                <hr/>
                <p>Guarda tu número de orden: {orderId} </p>
                <Link className="btn btn-primary" to="/">Volver al Inicio</Link>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }

    return (
        <div className="container my-5">
            <h2>Checkout</h2>
            <hr/>

            <form onSubmit={handleSubmit}>
                <input 
                    onChange={handleInputChange}
                    value={values.nombre}
                    type={"text"}
                    placeholder="Tu nombre"
                    className="form-control my-2"
                    name="nombre"
                />
                <input 
                    onChange={handleInputChange}
                    value={values.direccion}
                    type={"text"}
                    placeholder="Direccion"
                    className="form-control my-2"
                    name="direccion"
                />
                <input 
                    onChange={handleInputChange}
                    value={values.email}
                    type={"email"}
                    placeholder="Tu email"
                    className="form-control my-2"
                    name="email"
                />

                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Checkout