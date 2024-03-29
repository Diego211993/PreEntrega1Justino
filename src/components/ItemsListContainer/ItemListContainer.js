
import { useEffect, useState } from "react";
import "./ItemListContainer.scss"
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";



const ItemListContainer = () =>{

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    const {categoryId} = useParams()

    useEffect(()=>{
            setLoading(true)

            const productosRef = collection(db, "peliculas")
            const q = categoryId
                    ? query(productosRef, where("category", "==", categoryId))
                    : productosRef

            getDocs(q)
                .then((res) =>{
                    const docs = res.docs.map((doc) =>{
                        return {...doc.data(), id: doc.id}
                    })
                    console.log(docs)
                    setProductos(docs)
                })
                
                .finally(() =>{
                    setLoading(false)
                })

        },[categoryId])

    return(

        <div className="contenedor">
            {
                loading
                ? <h2>Cargando...</h2>
                
                :<ItemList items={productos} />
            }
        </div>
    )
}

export default ItemListContainer