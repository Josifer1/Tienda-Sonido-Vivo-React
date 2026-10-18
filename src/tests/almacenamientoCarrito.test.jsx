import { describe, it, expect, vi } from 'vitest'
import { cargarCarrito, guardarCarrito } from '../utils/almacenamientoCarrito'

const items = [{ id: 'GA001', nombre: 'Guitarra', precio: 100000, stock: 2, cantidad: 1 }]

describe('almacenamientoCarrito (con localStorage simulado)', () => {
  it('guarda el carrito como JSON y luego lo recupera igual', () => {
    guardarCarrito(items)
    expect(cargarCarrito()).toEqual(items)
  })

  it('llama a localStorage.setItem una vez con el carrito serializado', () => {
    const espia = vi.spyOn(Storage.prototype, 'setItem')
    guardarCarrito(items)
    expect(espia).toHaveBeenCalledTimes(1)
    expect(JSON.parse(espia.mock.calls[0][1])).toEqual(items)
  })

  it('devuelve un carrito vacío si no hay nada guardado', () => {
    expect(cargarCarrito()).toEqual([])
  })

  it('devuelve un carrito vacío si el contenido guardado está corrupto', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue('{esto no es json')
    expect(cargarCarrito()).toEqual([])
  })

  it('no rompe la aplicación si el navegador bloquea el almacenamiento', () => {
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('almacenamiento bloqueado')
    })
    expect(() => guardarCarrito(items)).not.toThrow()
  })
})