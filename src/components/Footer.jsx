import { NavLink } from "react-router";

export function Footer(){
    return(
        <footer className="site-footer">
        <p>2024 Sonido Vivo. Todos los derechos reservados.</p>
        <nav class="footer-nav">
            <NavLink to="/nosotros">Nosotros</NavLink>
            <NavLink to="/blogs">Blogs</NavLink>
            <NavLink to="/contacto">Contacto</NavLink>
        </nav>
    </footer>
    );
}