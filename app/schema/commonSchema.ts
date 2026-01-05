import { z } from 'zod'

export const commonSchemas = (t: (key: string) => string) => {
  const emailSchema = z.string().email(t('validation.invalidEmail'))

  const saudiPhoneSchema = z
    .string()
    .regex(/^5[0-9]{8}$/, t('validation.invalidPhone'))

  const passwordSchema = z
    .string()
    .min(8, t('validation.passwordMinLength'))
    .regex(/[A-Z]/, t('validation.passwordCapitalLetter'))
    .regex(/[!@#$%^&*(),.?":{}|<>]/, t('validation.passwordSpecialChar'))
    .regex(/\d/, t('validation.passwordNumber'))

  return { emailSchema, saudiPhoneSchema, passwordSchema }
}
