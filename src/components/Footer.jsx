import { NavLink } from "react-router";

export function Footer(){
    return(
        <footer className="site-footer">
        <p>2024 Sonido Vivo. Todos los derechos reservados.</p>
        <nav class="footer-nav">
            <a><NavLink to="/nosotros">Nosotros</NavLink></a>
            <a><NavLink to="/blogs">Blogs</NavLink></a>
            <a><NavLink to="/contacto">Contacto</NavLink></a>
        </nav>
    </footer>
    )
}