import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { obtenerProductos, obtenerProductoPorId } from '../services/productosService'
import { productos } from '../data/productos'

describe('productosService (con temporizadores simulados)', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('obtenerProductos entrega la lista cuando pasa la espera simulada', async () => {
    const promesa = obtenerProductos()
    await vi.advanceTimersByTimeAsync(300)
    await expect(promesa).resolves.toEqual(productos)
  })

  it('obtenerProductoPorId encuentra un producto existente', async () => {
    const promesa = obtenerProductoPorId(productos[0].id)
    await vi.advanceTimersByTimeAsync(300)
    await expect(promesa).resolves.toEqual(productos[0])
  })

  it('obtenerProductoPorId rechaza la Promise si el id no existe', async () => {
    const promesa = obtenerProductoPorId('NO-EXISTE')
    const verificacion = expect(promesa).rejects.toThrow('Producto no encontrado')
    await vi.advanceTimersByTimeAsync(300)
    await verificacion
  })
})