import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { Carrito } from '../pages/carrito'
import { CarritoProvider } from '../context/CarritoProvider'
import { guardarCarrito } from '../utils/almacenamientoCarrito'
import { formatearPrecio } from '../utils/formatearPrecio'

function renderizar() {
  return render(
    <MemoryRouter>
      <CarritoProvider>
        <Carrito />
      </CarritoProvider>
    </MemoryRouter>
  )
}

const guitarra = { id: 'GA001', nombre: 'Guitarra Acústica', precio: 100000, stock: 3, imagen: '/a.jpg', cantidad: 2 }

describe('página Carrito', () => {
  it('muestra un mensaje cuando el carrito está vacío', () => {
    renderizar()
    expect(screen.getByText('Tu carrito está vacío.')).toBeInTheDocument()
  })

  it('carga el carrito guardado y muestra el total', () => {
    guardarCarrito([guitarra])
    renderizar()
    expect(screen.getByText(formatearPrecio(200000), { selector: 'strong' })).toBeInTheDocument()
  })

  it('desactiva el botón + cuando la cantidad alcanza el stock', () => {
    guardarCarrito([{ ...guitarra, cantidad: 3 }])
    renderizar()
    expect(screen.getByRole('button', { name: /Agregar una unidad/ })).toBeDisabled()
  })

  it('al quitar el único producto vuelve al estado vacío', async () => {
    guardarCarrito([guitarra])
    renderizar()
    await userEvent.click(screen.getByRole('button', { name: 'Quitar' }))
    expect(screen.getByText('Tu carrito está vacío.')).toBeInTheDocument()
  })
})