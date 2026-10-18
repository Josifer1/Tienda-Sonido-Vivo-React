import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { Productos } from '../pages/productos'
import { Header } from '../components/Header'
import { CarritoProvider } from '../context/CarritoProvider'
import { obtenerProductos } from '../services/productosService'

// Mock del servicio: la prueba controla qué devuelve la Promise
vi.mock('../services/productosService')

const listaFalsa = [
  { id: 'GA001', nombre: 'Guitarra Acústica Folk', marca: 'Yamaha', modelo: 'F310', precio: 129990, stock: 8, imagen: '/a.jpg' },
  { id: 'PE001', nombre: 'Pedal Distorsión', marca: 'Boss', modelo: 'DS-1', precio: 79990, stock: 7, imagen: '/b.jpg' },
]

function renderizar() {
  return render(
    <MemoryRouter>
      <CarritoProvider>
        <Header />
        <Productos />
      </CarritoProvider>
    </MemoryRouter>
  )
}

describe('página Productos (con servicio simulado)', () => {
  it('muestra "Cargando" y luego los productos cuando la Promise se cumple', async () => {
    obtenerProductos.mockResolvedValue(listaFalsa)
    renderizar()

    expect(screen.getByText('Cargando productos...')).toBeInTheDocument()
    expect(await screen.findByText('Guitarra Acústica Folk')).toBeInTheDocument()
    expect(screen.getByText('Pedal Distorsión')).toBeInTheDocument()
    expect(screen.queryByText('Cargando productos...')).not.toBeInTheDocument()
  })

  it('muestra un mensaje de error cuando la Promise es rechazada', async () => {
    obtenerProductos.mockRejectedValue(new Error('fallo de red'))
    renderizar()

    expect(await screen.findByText('No se pudieron cargar los productos.')).toBeInTheDocument()
  })

  it('al añadir un producto sube el contador del carrito en el Header', async () => {
    obtenerProductos.mockResolvedValue(listaFalsa)
    renderizar()

    expect(screen.getByRole('link', { name: 'Carrito (0)' })).toBeInTheDocument()
    const botones = await screen.findAllByRole('button', { name: 'Añadir' })
    await userEvent.click(botones[0])

    expect(screen.getByRole('link', { name: 'Carrito (1)' })).toBeInTheDocument()
  })
})