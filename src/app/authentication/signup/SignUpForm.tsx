"use client";
import { ChevronLeft, User } from "lucide-react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import React from "react";
import { ZodError } from "zod";

type SignUpFormInput = {
  signUpFormAction:
    | string
    | ((formData: FormData) => void | Promise<void>)
    | undefined;
};
export default function SignUpForm({ signUpFormAction }: SignUpFormInput) {
  const route = useRouter();
  return (
    <div className={styles.wholeScreen}>
      <header className={styles.signUpHeader}>
        <ChevronLeft
          size={40}
          onClick={() => {
            route.back();
          }}
        ></ChevronLeft>
      </header>
      <div className={styles.formWrapper}>
        <div className={styles.formBox}>
          <h2>Sign up</h2>
          <form className={styles.formSignup} action={signUpFormAction}>
            <div className={styles.inputBox}>
              <User className={styles.icon}></User>
              <input name="username" type="text" />
              <label>User name</label>
            </div>
            <div className={styles.inputBox}>
              <User className={styles.icon}></User>
              <input name="password" type="password" />
              <label>Password</label>
            </div>
            <div className={styles.inputBox}>
              <User className={styles.icon}></User>
              <input name="email" type="text" />
              <label>Email</label>
            </div>
            <div className={styles.inputBox}>
              <User className={styles.icon}></User>
              <input name="dob" type="text" />
              <label>Date of birth</label>
            </div>
            <input type="hidden" name="redirectTo" value="/" />
            <button className={styles.button}>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}
