
import { Link } from "react-router-dom"
import "./Navbar.scss"

export const Navbar = () =>{

    return(
        <header className="header">
            <div className="header_container">
                <img src="./imgs/MovieShop.png" alt="logo" className="header_logo"/>

                <nav className="navbar">
                    <Link to="/" className="navbar_link">Inicio</Link>
                    <Link to="/productos/terror" className="navbar_link">Terror</Link>
                    <Link to="/productos/drama" className="navbar_link">Drama</Link>
                    <Link to="/productos/accion" className="navbar_link">Accion</Link>
                    <Link to="/nosotros" className="navbar_link">Nosotros</Link>
                    <Link to="/contacto" className="navbar_link">Contacto</Link>
                </nav>
            </div>
        </header>

    )
}