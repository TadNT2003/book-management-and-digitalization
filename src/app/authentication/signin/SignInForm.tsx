"use client"
import { useRouter } from 'next/router'
import React from 'react'

type SignInFormInput = {
    signInFormAction: string | ((formData: FormData) => void | Promise<void>) | undefined
}
export default function SignInForm({signInFormAction}: SignInFormInput) {
    // const route = useRouter()
  return (
    <form action={signInFormAction}>
      <label>
        User name
        <input name="username" type="text" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      {/* <input type="hidden" name="redirectTo" value="false" /> */}
      <button>Sign In</button>
    </form>
  )
}
