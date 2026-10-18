import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { ProductCard } from '../components/ProductCard'
import { formatearPrecio } from '../utils/formatearPrecio'

const producto = {
  id: 'GA001',
  nombre: 'Guitarra Acústica Folk',
  marca: 'Yamaha',
  modelo: 'F310',
  precio: 129990,
  imagen: '/img/productos/ga001.jpg',
}

function renderizar(onAgregar) {
  return render(
    <MemoryRouter>
      <ProductCard producto={producto} onAgregar={onAgregar} />
    </MemoryRouter>
  )
}

describe('ProductCard', () => {
  it('muestra nombre, marca, modelo y precio recibidos por props', () => {
    renderizar(vi.fn())
    expect(screen.getByRole('heading', { name: 'Guitarra Acústica Folk' })).toBeInTheDocument()
    expect(screen.getByText('Yamaha F310')).toBeInTheDocument()
    expect(screen.getByText(formatearPrecio(129990))).toBeInTheDocument()
  })

  it('al hacer clic en Añadir llama a onAgregar con el producto', async () => {
    const onAgregar = vi.fn()
    renderizar(onAgregar)

    await userEvent.click(screen.getByRole('button', { name: 'Añadir' }))

    expect(onAgregar).toHaveBeenCalledTimes(1)
    expect(onAgregar).toHaveBeenCalledWith(producto)
  })

  it('enlaza al detalle del producto usando su id', () => {
    renderizar(vi.fn())
    expect(screen.getByRole('link', { name: 'Ver detalle' })).toHaveAttribute('href', '/detalle-producto/GA001')
  })
})