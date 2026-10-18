import { describe, it, expect } from 'vitest'
import {
  agregarItem,
  quitarItem,
  actualizarCantidad,
  contarItems,
  calcularTotal,
} from '../utils/carrito'

const guitarra = { id: 'GA001', nombre: 'Guitarra Acústica', precio: 100000, stock: 2, imagen: '/img/ga001.jpg' }
const pedal = { id: 'PE001', nombre: 'Pedal Distorsión', precio: 50000, stock: 5, imagen: '/img/pe001.jpg' }

describe('carritoUtils', () => {
  it('agrega un producto nuevo con cantidad 1', () => {
    const resultado = agregarItem([], guitarra)
    expect(resultado).toHaveLength(1)
    expect(resultado[0]).toMatchObject({ id: 'GA001', cantidad: 1 })
  })

  it('suma la cantidad si el producto ya está en el carrito', () => {
    const resultado = agregarItem(agregarItem([], guitarra), guitarra)
    expect(resultado).toHaveLength(1)
    expect(resultado[0].cantidad).toBe(2)
  })

  it('no permite superar el stock', () => {
    let items = []
    items = agregarItem(items, guitarra)
    items = agregarItem(items, guitarra)
    items = agregarItem(items, guitarra)
    expect(items[0].cantidad).toBe(2)
  })

  it('no agrega un producto sin stock', () => {
    expect(agregarItem([], { ...guitarra, stock: 0 })).toEqual([])
  })

  it('no modifica el arreglo original (inmutabilidad)', () => {
    const original = agregarItem([], guitarra)
    agregarItem(original, guitarra)
    expect(original[0].cantidad).toBe(1)
  })

  it('elimina la línea si la cantidad baja a 0', () => {
    const items = agregarItem([], guitarra)
    expect(actualizarCantidad(items, 'GA001', 0)).toEqual([])
  })

  it('limita la cantidad al stock al actualizar', () => {
    const items = agregarItem([], guitarra)
    expect(actualizarCantidad(items, 'GA001', 99)[0].cantidad).toBe(2)
  })

  it('quita un producto por id', () => {
    const items = agregarItem(agregarItem([], guitarra), pedal)
    expect(quitarItem(items, 'GA001').map((i) => i.id)).toEqual(['PE001'])
  })

  it('calcula el total y la cantidad de unidades', () => {
    let items = agregarItem([], guitarra)
    items = agregarItem(items, guitarra)
    items = agregarItem(items, pedal)
    expect(contarItems(items)).toBe(3)
    expect(calcularTotal(items)).toBe(250000)
  })
})