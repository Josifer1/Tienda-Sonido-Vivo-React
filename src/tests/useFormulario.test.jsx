import { describe, it, expect, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useFormulario } from '../hooks/useFormulario'

const validar = (valores) => ({ correo: valores.correo === '' ? 'El correo es obligatorio.' : '' })
const VALORES_INICIALES = { correo: '' }

describe('useFormulario', () => {
  it('no muestra errores hasta que el usuario toca el campo', () => {
    const { result } = renderHook(() => useFormulario(VALORES_INICIALES, validar))
    expect(result.current.errores).toEqual({})

    act(() => result.current.manejarBlur({ target: { name: 'correo' } }))
    expect(result.current.errores).toEqual({ correo: 'El correo es obligatorio.' })
  })

  it('actualiza el valor y el error desaparece al corregirlo', () => {
    const { result } = renderHook(() => useFormulario(VALORES_INICIALES, validar))
    act(() => result.current.manejarBlur({ target: { name: 'correo' } }))
    act(() => result.current.manejarCambio({ target: { name: 'correo', value: 'ana@duoc.cl' } }))

    expect(result.current.valores.correo).toBe('ana@duoc.cl')
    expect(result.current.errores.correo).toBe('')
  })

  it('al enviar con errores llama a alError y no a alExito', () => {
    const alExito = vi.fn()
    const alError = vi.fn()
    const evento = { preventDefault: vi.fn() }
    const { result } = renderHook(() => useFormulario(VALORES_INICIALES, validar))

    act(() => result.current.enviar(alExito, alError)(evento))

    expect(evento.preventDefault).toHaveBeenCalled()
    expect(alError).toHaveBeenCalledTimes(1)
    expect(alExito).not.toHaveBeenCalled()
  })

  it('al enviar un formulario válido llama a alExito con los valores', () => {
    const alExito = vi.fn()
    const evento = { preventDefault: vi.fn() }
    const { result } = renderHook(() => useFormulario(VALORES_INICIALES, validar))

    act(() => result.current.manejarCambio({ target: { name: 'correo', value: 'ana@duoc.cl' } }))
    act(() => result.current.enviar(alExito)(evento))

    expect(alExito).toHaveBeenCalledWith({ correo: 'ana@duoc.cl' })
  })
})