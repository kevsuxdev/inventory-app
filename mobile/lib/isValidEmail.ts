import { emailRegex } from '@/constant/regex'

export const isEmail = (email: string) => {
  return emailRegex.test(email)
}
