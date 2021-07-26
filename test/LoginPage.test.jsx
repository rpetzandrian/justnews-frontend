import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Login from '../pages/login'

describe('email in login form', () => {
  test('it should be have type email', () => {
    render(
      <Login />
    );
    const emailInput = screen.getByTestId("email-input-login");
    expect(emailInput).toHaveAttribute("type", "email");
  })

  test('it should be required', () => {
    render(
      <Login />
    );
    const emailInput = screen.getByTestId("email-input-login");
    expect(emailInput).toBeRequired()
  })
})