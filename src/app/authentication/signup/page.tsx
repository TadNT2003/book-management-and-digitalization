import SignUpForm from "./SignUpForm"
import signUpFormAction from "./signUpFormAction"
 
export default function SignUp() {
  return (
    <SignUpForm signUpFormAction={signUpFormAction}></SignUpForm>
  )
}