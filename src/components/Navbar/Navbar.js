
import "./Navbar.scss"

export const Navbar = () =>{

    return(
        <header className="header">
            <div className="header_container">
                <img src="./imgs/MovieShop.png" alt="logo" className="header_logo"/>

                <nav className="navbar">
                    <a href="#" className="navbar_link">Inicio</a>
                    <a href="#" className="navbar_link">Estrenos</a>
                    <a href="#" className="navbar_link">Peliculas 2023</a>
                </nav>
            </div>
        </header>

    )
}