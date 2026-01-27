import { describe, it, beforeEach, expect } from 'vitest'
import { mockUser } from '@mocks/user.mock'
import { login, logout } from './authService'

describe('authService', () => {
	beforeEach(() => {
		localStorage.clear()
	})

	it('deve retornar sucesso e armazenar token quando credenciais corretas', async () => {
		const result = await login('joaosilva@gmail.com', '123456')

		expect(result.success).toBe(true)
		expect(result.accessToken).toBe('mock-jwt-token')
		expect(result.user).toBe(mockUser)
		expect(localStorage.getItem('mock-access-token')).toBe('mock-jwt-token')
	})

	it('deve remover o token ao deslogar', async () => {
		localStorage.setItem('mock-access-token', 'mock-jwt-token')

		await logout()

		expect(localStorage.getItem('mock-access-token')).toBe(null)
	})
})
