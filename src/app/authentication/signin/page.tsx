import { signIn } from "@/auth"
import { redirect } from "next/navigation"
 
export default function SignIn() {
  return (
    <form
      action={async (formData) => {
        "use server"
        await signIn("credentials", formData)
        // redirect("/")
      }}
    >
      <label>
        User name
        <input name="username" type="text" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <input type="hidden" name="redirectTo" value="/" />
      <button>Sign In</button>
    </form>
  )
}