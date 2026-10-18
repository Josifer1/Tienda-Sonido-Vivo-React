import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { Index } from './pages/index.jsx'
import { Contacto } from './pages/contacto.jsx'
import { Blogs } from './pages/blogs.jsx'
import { Detalle_Blog_1 } from './pages/detalle-blog-1.jsx'
import { Detalle_Blog_2 } from './pages/detalle-blog-2.jsx'
import { Login } from './pages/login.jsx'
import { Nosotros } from './pages/nosotros.jsx'
import { Productos } from './pages/productos.jsx'
import { Registro } from './pages/registro.jsx'
import { Detalle_Producto } from './pages/detalle-producto.jsx'
import { CarritoProvider } from './context/CarritoProvider.jsx'
import { Carrito } from './pages/carrito.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CarritoProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/detalle-producto/:id" element={<Detalle_Producto />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/detalle-blog-1" element={<Detalle_Blog_1 />} />
          <Route path="/detalle-blog-2" element={<Detalle_Blog_2 />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
        <Footer />
      </CarritoProvider>
    </BrowserRouter>
  </StrictMode>,
)