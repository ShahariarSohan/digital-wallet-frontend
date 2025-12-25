import z from "zod";

export const loginSchema = z.object({
  email: z.email({
    message: "Invalid email address",
  }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/.*[A-Z].*/, {
      message: "Password must contain at least 1 uppercase letter",
    })
    .regex(/.*\d.*/, {
      message: "Password must contain at least 1 number",
    })
    .regex(/[!@#$%^&*?]/, {
      message: "Password must contain at least 1 special character",
    }),
});

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, { error: "Name must be at least 3 characters" })
      .max(50),
    email: z.email(),
    password: z
      .string()
      .min(8, { error: "Password must be at least 8 characters" })
      .regex(/.*[A-Z].*/, {
        message: `Password must be at least 1 uppercase letter`,
      })
      .regex(/.*\d.*/, { message: `Password must be at least 1 number` })
      .regex(/[!@#$%^&*?]/, {
        message: `Password must be at least 1 special character`,
      }),
    confirmPassword: z
      .string()
      .min(8, { error: "Confirm Password must be at least 8 characters" }),
    role: z.string().refine((val) => val === "user" || val === "agent", {
      message: "Role must be either 'user' or 'agent'",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "Password don't match",
    path: ["confirmPassword"],
  });