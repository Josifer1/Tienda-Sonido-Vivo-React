import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { Login } from '../pages/login'

function renderizar() {
  return render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  )
}

describe('formulario de Login', () => {
  it('muestra el error del correo al salir del campo con un dominio no permitido', async () => {
    renderizar()
    await userEvent.type(screen.getByLabelText('Email:'), 'ana@hotmail.com')
    await userEvent.tab()
    expect(screen.getByText(/Solo se aceptan correos/)).toBeInTheDocument()
  })

  it('al enviar vacío avisa que los datos son inválidos', async () => {
    renderizar()
    await userEvent.click(screen.getByRole('button', { name: 'Iniciar' }))
    expect(screen.getByText(/Correo o contraseña inválidos/)).toBeInTheDocument()
  })

  it('con datos válidos muestra el inicio de sesión exitoso', async () => {
    renderizar()
    await userEvent.type(screen.getByLabelText('Email:'), 'ana@duoc.cl')
    await userEvent.type(screen.getByLabelText('Contraseña:'), '1234')
    await userEvent.click(screen.getByRole('button', { name: 'Iniciar' }))
    expect(screen.getByText('¡Inicio de sesión exitoso!')).toBeInTheDocument()
  })
})