import { describe, expect, it } from 'vitest'
import { formatDate } from './formatDate'

describe('formatDate', () => {
	it('Deve formatar data corretamente de YYYY-MM-DD para o formato DD de MMM.', () => {
		const resultado = formatDate('2010-02-25')

		expect(resultado).toBe('25 de fev.')
	})
})
