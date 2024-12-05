import NextAuth, { DefaultSession, User } from "next-auth"
import { ZodError } from "zod"
import Credentials from "next-auth/providers/credentials"
import { signInSchema } from "./lib/zod"
// Your own logic for dealing with plaintext password strings; be careful!
import { saltAndHashPassword, getUserFromDb } from "@/constants/mockUsers"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        // email: {},
        username: { label: "Username", type: "text"},
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        try {
          let user = null
 
          const { username, password } = await signInSchema.parseAsync(credentials)
 
          // logic to salt and hash password
          const pwHash = saltAndHashPassword(password)
 
          // logic to verify if the user exists
          user = await getUserFromDb(username, pwHash)
          console.log("User in auth.ts: ", user)
 
          if (!user) {
            throw new Error("Invalid credentials.")
          }
 
          // return JSON object with the user data
          const loginUser:User = {
            username: user.username,
            password: user.password,
          }
          console.log(loginUser)
          return loginUser as any

        } catch (error) {
          if (error instanceof ZodError) {
            // Return `null` to indicate that the credentials are invalid
            return null
          }
        }
      },
    }),
  ],
})
