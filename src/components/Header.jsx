import { Link, NavLink } from "react-router";

export function Header(){
    return(
        <header className="header-index">
            <Link to="/">SONIDO VIVO</Link>
            <nav className="nav-menu">
                <ul>
                    <li><NavLink to="/" end>Inicio</NavLink></li>
                    <li><NavLink to="/productos">Productos</NavLink></li>
                    <li><NavLink to="/nosotros">Nosotros</NavLink></li>
                    <li><NavLink to="/blogs">Blogs</NavLink></li>
                    <li><NavLink to="/contacto">Contacto</NavLink></li>
                </ul>
            </nav>
            <div className="header-acciones">
                <NavLink to="/login">Iniciar Sesión</NavLink>
                <NavLink to="/registro">Registrarse</NavLink>
                <span className="carrito-link">Carrito (0)</span>
            </div>
        </header>
    );
}