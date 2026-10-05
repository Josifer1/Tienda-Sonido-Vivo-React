import { NavLink } from "react-router";

export function Header(){
    return(
        <header className="header-index">
            <a>SONIDO VIVO</a>
            <nav className="nav-menu">
                <ul>
                    <li><NavLink to="/index">Inicio</NavLink></li>
                    <li><NavLink to="/productos">Productos</NavLink></li>
                    <li><NavLink to="/nosotros">Nosotros</NavLink></li>
                    <li><NavLink to="/blogs">Blogs</NavLink></li>
                    <li><NavLink to="/contacto">Contacto</NavLink></li>
                </ul>
            </nav>
            <div className="header-acciones">
                <li><NavLink to="/login">Iniciar Sesión</NavLink></li>
                <li><NavLink to="/registro">Registrarse</NavLink></li>
                <li><NavLink to="/">Carrito</NavLink></li>
            </div>
        </header>
    )
}