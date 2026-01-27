import type { ReactNode } from 'react'

export interface User {
	id: string
	name: string
	email: string
	password: number
	avatar: ReactNode
}
