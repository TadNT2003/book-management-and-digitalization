declare module "next-auth" {
    interface Session {
        user: {
            username: string,
            password: string,
        } 
        // & DefaultSession["user"]
    }
    interface User {
        // id: string|undefined,
        username: string|null,
        password: string|null,
    }
}

// The `JWT` interface can be found in the `next-auth/jwt` submodule
import { JWT } from "next-auth/jwt"
 
declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    idToken?: string
  }
}