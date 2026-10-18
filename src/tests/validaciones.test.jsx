import { describe, it, expect } from 'vitest'
import {
  validarRun,
  validarCorreo,
  validarPassword,
  validarConfirmacion,
  validarTexto,
} from '../utils/validaciones'

describe('validarRun', () => {
  it('acepta un RUN con dígito verificador correcto', () => {
    expect(validarRun('123456785')).toBe('')
  })

  it('acepta el dígito verificador K, también en minúscula', () => {
    expect(validarRun('1234564K')).toBe('')
    expect(validarRun('1234564k')).toBe('')
  })

  it('rechaza un RUN con dígito verificador incorrecto', () => {
    expect(validarRun('123456789')).toBe('El RUN ingresado no es válido (dígito verificador incorrecto).')
  })

  it('rechaza un RUN escrito con puntos o guion', () => {
    expect(validarRun('12.345.678-5')).toMatch(/entre 7 y 9 caracteres/)
    expect(validarRun('1234567.5')).toMatch(/solo debe contener números/)
  })

  it('exige el RUN', () => {
    expect(validarRun('')).toBe('El RUN es obligatorio.')
  })
})

describe('validarCorreo', () => {
  it.each(['ana@duoc.cl', 'ana@profesor.duoc.cl', 'ana@gmail.com'])(
    'acepta el dominio permitido de %s',
    (correo) => {
      expect(validarCorreo(correo)).toBe('')
    }
  )

  it('rechaza un dominio no permitido', () => {
    expect(validarCorreo('ana@hotmail.com')).toMatch(/Solo se aceptan/)
  })

  it('rechaza un correo sin nombre de usuario', () => {
    expect(validarCorreo('@gmail.com')).toBe('El formato del correo no es válido.')
  })

  it('rechaza un correo de más de 100 caracteres', () => {
    expect(validarCorreo('a'.repeat(95) + '@duoc.cl')).toBe('El correo no puede superar los 100 caracteres.')
  })

  it('exige el correo, salvo que sea opcional', () => {
    expect(validarCorreo('')).toBe('El correo es obligatorio.')
    expect(validarCorreo('', { obligatorio: false })).toBe('')
  })
})

describe('validarPassword y validarConfirmacion', () => {
  it('exige entre 4 y 10 caracteres', () => {
    expect(validarPassword('abc')).toMatch(/entre 4 y 10/)
    expect(validarPassword('abcdefghijk')).toMatch(/entre 4 y 10/)
    expect(validarPassword('abcd')).toBe('')
  })

  it('exige que la confirmación coincida', () => {
    expect(validarConfirmacion('abcd', 'abcx')).toBe('Las contraseñas no coinciden.')
    expect(validarConfirmacion('abcd', 'abcd')).toBe('')
  })
})

describe('validarTexto', () => {
  it('respeta el largo máximo', () => {
    expect(validarTexto('a'.repeat(51), { maximo: 50 })).toBe('Máximo 50 caracteres.')
    expect(validarTexto('a'.repeat(50), { maximo: 50 })).toBe('')
  })

  it('trata un texto de solo espacios como vacío', () => {
    expect(validarTexto('   ', { mensajeObligatorio: 'El nombre es obligatorio.' })).toBe('El nombre es obligatorio.')
  })
})