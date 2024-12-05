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
          // console.log("User in auth.ts: ", user)
 
          if (!user) {
            throw new Error("Invalid credentials.")
          }
 
          // return JSON object with the user data
          const loginUser:User = {
            username: user.username,
            password: user.password,
          }
          // console.log(loginUser)
          return loginUser as any

        } catch (error) {
          if (error instanceof ZodError) {
            // Return `null` to indicate that the credentials are invalid
            console.log("Error: ", ZodError)
            return null
          }
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) { // User is available during sign-in
        token.id = user.id
        token.username = user.username
        token.password = user.password
      }
      return token
    },
    async session({ session, user, token }) {
      // session.user.id = token.id
      session.user.password = token.password
      session.user.username = token.username
      // console.log("Session: ",session)
      // console.log("Token: ",token)
      return session
    },
  },
  // pages: {
  //   signIn: "/authentication/signin",
  // },
  // callbacks: {
  //   async redirect({ url, baseUrl }) {
  //     // Allows relative callback URLs
  //     if (url.startsWith("/")) return `${baseUrl}${url}`
  //     // Allows callback URLs on the same origin
  //     else if (new URL(url).origin === baseUrl) return url
  //     return baseUrl
  //   }
  // }
})
