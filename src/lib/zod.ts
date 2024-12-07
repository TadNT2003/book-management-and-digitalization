import { array, number, object, string } from "zod"


const readingHistorySchema = object({
  bookId: string(),
  lastRead: string(),
  lastPage: number()
}) 
export const signInSchema = object({
  username: string({ required_error: "Username is required" })
    .min(1, "Username is required"),
    // .email("Invalid email"),
  password: string({ required_error: "Password is required" })
    .min(1, "Password is required")
    // .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
})

export const signUpSchema = object({
  username: string({ required_error: "Username is required" })
    .min(1, "Username is required"),
    // .email("Invalid email"),
  password: string({ required_error: "Password is required" })
    .min(1, "Password is required")
    // .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
  email: string(),
  dob: string(),
  // readingHistory: array(readingHistorySchema)
})