import SignInForm from './SignInForm'
import signInFormAction from './signInFormAction'
 
export default function SignIn() {
  return (
    <SignInForm signInFormAction={signInFormAction}></SignInForm>
  )
}