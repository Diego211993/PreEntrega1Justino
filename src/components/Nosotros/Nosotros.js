import { useEffect } from "react"

const Nosotros = () =>{

    useEffect(() =>{
        const clickear = () => {
            console.log(clickear)
        }

        window.addEventListener("click", clickear)

        return () =>{
            window.removeEventListener("click", clickear)
        }
    }, [])


    return(
        <div className="container my-5">
            <h2>Nosotros</h2>
            <hr/>
        </div>
    )
}
export default Nosotros