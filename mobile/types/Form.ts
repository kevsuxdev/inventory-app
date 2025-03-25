export type Role = 'USER' | 'ADMIN'

export interface User {
  id: string
  role: Role
  email: string
  firstName: string
  lastName: string
  password: string
  imageUrl?: string
  createdAt: string
  updatedAt: string
}

export interface LoginUser {
  email: string
  password: string
}
