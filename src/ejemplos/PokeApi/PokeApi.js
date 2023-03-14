import { useEffect, useState } from "react"





const PokeApi = () =>{

    const [pokemon, setPokemon] = useState(null)
    const [id, setId] = useState(1)

//``````````



    useEffect(() =>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((respo) => respo.json())
            .then((data) => {
                setPokemon(data)
            })
    },[id])

    const siguiente = () =>{
        setId (id + 1)
    }

    const anterior = () =>{
        id > 1 && setId(id - 1)
    }


    return(

        <div className="container my-5">
            <h2>PokeApi</h2>
            <hr/>

            {
                pokemon &&
                    <div>
                        <h4>{pokemon.name}</h4>
                        <p>Pokemon {pokemon.id} </p>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                    </div>                    
            }
                    <button onClick={anterior} className="btn btn-danger">Anterior</button>
                    <button onClick={siguiente} className="btn btn-primary">Siguiente</button>

        </div>
    )
}

export default PokeApi