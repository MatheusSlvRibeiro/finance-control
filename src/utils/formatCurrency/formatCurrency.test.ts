import { it, expect, describe } from 'vitest'
import { formatCurrency } from '@utils/formatCurrency/formatCurrency'

describe('formarCurrency', () => {
	it('Deve formatar valores decimais corretamente', () => {
		const resultado = formatCurrency(10.5).replace(/\s/g, ' ')

		expect(resultado).toBe('R$ 10,50')
	})
})
