const today = new Date()
const yesterday = new Date()
yesterday.setDate(today.getDate() - 1)

export function formatDate(date: string): string {
	const parsedDate = new Date(`${date}T00:00:00`)

	return new Intl.DateTimeFormat('pt-BR', {
		day: '2-digit',
		month: 'short',
	}).format(parsedDate)
}
