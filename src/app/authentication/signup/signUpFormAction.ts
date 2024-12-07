"use server"

import { signIn } from "@/auth"
import { signInSchema, signUpSchema } from "@/lib/zod"
import { registerUser } from "@/server/action"
import { isRedirectError } from "next/dist/client/components/redirect"
import { redirect } from "next/navigation"
import { ZodError } from "zod"

export default async (formData: FormData) => {
    const credentials = {
        username : formData.get("username"),
        password : formData.get("password"),
        email : formData.get("email"),
        dob : formData.get("dob"),
        readingHistory: [],
    }
    try {
      const {username, password, email, dob} = await signUpSchema.parseAsync(credentials)
      const resgiter = await registerUser(username, password, email, dob)
      console.log("response from register:", resgiter)
      const res = await signIn("credentials", {
        username: resgiter.userName,
        password: resgiter.password,
        redirect: false,
      }).then(() => {
        redirect("/")
      }
      )  
    } catch (error) {
      if (error instanceof ZodError) {
        console.log(error.issues[0].message)
      }
      else if (isRedirectError(error)) {
        throw error  
      }
      else if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }