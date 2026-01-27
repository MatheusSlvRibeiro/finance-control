import { describe, it, expect } from 'vitest'
import { transactionService } from './transactionService'
import { transactionsMock } from '@mocks/transactions.mock'

describe('transactionService', () => {
	it('getAll deve retornar todas as transações normalizadas', async () => {
		const transactions = await transactionService.getAll()
		expect(transactions).toHaveLength(transactionsMock.length)
		transactions.forEach((t) => {
			expect(['income', 'expense']).toContain(t.type)
		})
	})

	it('getByType deve filtrar por tipo', async () => {
		const incomes = await transactionService.getByType('income')
		expect(incomes.every((t) => t.type === 'income')).toBe(true)

		const expenses = await transactionService.getByType('expense')
		expect(expenses.every((t) => t.type === 'expense')).toBe(true)
	})

	it('getTotalByType deve somar corretamente os valores por tipo', async () => {
		const expectedIncome = transactionsMock
			.filter((t) => t.type === 'income')
			.reduce((acc, t) => acc + t.value, 0)
		const expectedExpense = transactionsMock
			.filter((t) => t.type === 'expense')
			.reduce((acc, t) => acc + t.value, 0)

		const totalIncome = await transactionService.getTotalByType('income')
		const totalExpense = await transactionService.getTotalByType('expense')

		expect(totalIncome).toBe(expectedIncome)
		expect(totalExpense).toBe(expectedExpense)
	})
})
