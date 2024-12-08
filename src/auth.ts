import NextAuth, { DefaultSession, User } from "next-auth"
import { ZodError } from "zod"
import Credentials from "next-auth/providers/credentials"
import { loginUser } from '@/server/action'
// Your own logic for dealing with plaintext password strings; be careful!
// import { saltAndHashPassword, getUserFromDb } from "@/constants/mockUsers"

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
 
          const username = String(credentials.username)
          const password = String(credentials.password)
          // logic to salt and hash password
          // const pwHash = saltAndHashPassword(password)
 
          // logic to verify if the user exists
          user = await loginUser(username, password)
          // console.log("user: ", user)
 
          if (!user) {
            throw new Error("Invalid credentials.")
          }
 
          // return JSON object with the user data
          return user

        } catch (error) {
          return {error: "Wrong credentials"}
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) { // User is available during sign-in
        token.id = user.id
        token.userName = user.userName
        if (user.email) token.email = user.email
        token.dob = user.dob
        token.readingHistory = user.readingHistory
      }
      return token
    },
    async session({ session, token }) {
      if (token.id) {
        session.user.id = String(token.id)
      }
      session.user.userName = token.userName
      session.user.email = token.email
      session.user.dob = token.dob
      session.user.readingHistory = token.readingHistory
      return session
    },
    async signIn({ user, account, profile, email, credentials }) {
      if (user?.error === "Wrong credentials") {
        return false
      }
      return true
    },
  },
})
