"use server"

import { signIn } from "@/auth"
import { signInSchema } from "@/lib/zod"
import { isRedirectError } from "next/dist/client/components/redirect"
import { redirect } from "next/navigation"
import { ZodError } from "zod"

export default async (formData: FormData) => {
    const credentials = {
      username: formData.get("username"),
      password: formData.get("password"),  
    }
    try {
      const { username, password } = await signInSchema.parseAsync(credentials)
      const res = await signIn("credentials", {
        username: username,
        password: password,
        redirect: false,
      })
      console.log(res)
    } catch (error) {
      if (error instanceof ZodError) {
        console.log(error.issues[0].message)
        throw new Error(error.issues[0].message)
      }
      else if (error instanceof Error) {
        console.log(error.message);
        throw new Error("Invalid credentials")
      }
      throw error
      // return "There is some error"
    }
    redirect("/")
  }