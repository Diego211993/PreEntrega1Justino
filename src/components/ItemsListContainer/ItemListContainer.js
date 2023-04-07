
import { useEffect, useState } from "react";
import "./ItemListContainer.scss"
import { pedirDatos } from "../../helpers/pedirDatos";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";



const ItemListContainer = () =>{

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    const {categoryId} = useParams()

    useEffect(()=>{

            pedirDatos()
                .then((response) =>{
                    if (!categoryId) {
                        setProductos (response)
                        
                    }else{
                        setProductos(response.filter((prod)=> prod.category === categoryId))
                    }
                })
                .catch((error) =>{
                    console.log(error)
                    
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