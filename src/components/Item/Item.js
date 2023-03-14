


const Item= (item)=> {

    return (
        <div key={item.id} className="col-3 m-1">
                <img src={item.img} alt={item.name}/>
                <h4>{item.name}</h4>
                <p>{item.description} </p>
                <p> <strong>Precio: ${item.price}</strong></p>
                <button className="btn btn-primary">Ver mas</button>
        </div>
    )
}

export default Item