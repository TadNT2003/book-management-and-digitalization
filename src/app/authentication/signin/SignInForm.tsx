"use client";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import React from "react";
import { ChevronLeft, KeyRoundIcon, Mail, User } from "lucide-react";


type SignInFormInput = {
  signInFormAction:
    | string
    | ((formData: FormData) => void | Promise<void>)
    | undefined;
};
export default function SignInForm({ signInFormAction }: SignInFormInput) {
  const route = useRouter()
  return (
    <div className={styles.wholeScreen}>
      <header className={styles.signInHeader}>
        <ChevronLeft size={40} onClick={() => {
          route.back()
        }}></ChevronLeft>
      </header>
      <div className={styles.formWrapper}>
        <div className={styles.formBox}>
          <h2>Sign in</h2>
          <form className={styles.formSignin} action={signInFormAction}>
            <div className={styles.inputBox}>
              <User className={styles.icon}></User>
              <input name="username" type="text" />
              <label>User name</label>
            </div>
            <div className={styles.inputBox}>
              <KeyRoundIcon className={styles.icon}></KeyRoundIcon>
              <input name="password" type="password" />
              <label>Password</label>
            </div>
            {/* <div  className={styles.rememberMeCheckbox}>
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="">Forgot Password</a>
            </div> */}
            {/* <input type="hidden" name="redirectTo" value="false" /> */}
            <button className={styles.button}>Sign In</button>
            <div className={styles.register}>
              <p>Don't have an account? <a href="/authentication/signup">Sign up</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
