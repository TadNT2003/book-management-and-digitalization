declare module "next-auth" {
    interface Session {
        user: {
            id: string,
            userName: string,
            email: string,
            dob: string,
            readingHistory: Array
            // password: string,
        } 
        // & DefaultSession["user"]
    }
    interface User {
        error?: string,
        id: string,
        userName: string,
        email: string,
        dob: string,
        readingHistory: Array
        // password: string,
    }
}

// The `JWT` interface can be found in the `next-auth/jwt` submodule
import { JWT } from "next-auth/jwt"
 
declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    idToken?: string,
    // id: string,
    userName: string,
    email: string,
    dob: string,
    readingHistory: Array
    // password: string
  }
}