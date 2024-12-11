import { registerUser } from '@/server/action'
import React from 'react'
import { ZodError } from 'zod'

type SignUpFormInput = {
    signUpFormAction: string | ((formData: FormData) => void | Promise<void>) | undefined
}
export default function SignUpForm({signUpFormAction}: SignUpFormInput) {
  return (
    <form
      action={signUpFormAction}>
      <label>
        User name
        <input name="username" type="text" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <label>
        Email
        <input name="email" type="text" />
      </label>
      <label>
        Date of birth
        <input name="dob" type="text" />
      </label>
      <input type="hidden" name="redirectTo" value="/" />
      <button>Sign Up</button>
    </form>
  )
}
