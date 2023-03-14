import Item from "../item/Item"



const ItemList= ({items})=> {

    return (
        <div>
            <h2>Peliculas</h2>
            <hr/>

            <div className="row my-5">
            {items.map((producto) => <Item item={producto} />)}
            </div>
        </div>
    )
}

export default ItemList