import z from "zod";

export const profileSchema = z.object({
  name: z
    .string({ error: "Name must be string" })
    .min(5, { message: "Name must be at least 5 characters" })
    .max(50, { message: "Name must be maximum of 50 characters" }),
  phone: z
    .string({ error: "Phone required and it must be string and unique" })
    .regex(/^(?:\+88|88)?01[3-9]\d{8}$/, {
      message:
        "Phone must be valid for Bangladesh. Format: +8801XXXXXXX or 01XXXXXXXX",
    })
    .optional(),
});

export const passwordSchema = z
  .object({
    currentPassword: z
      .string()
      .min(8, "Current password must be at least 8 characters"),
    password: z
      .string({ error: "Password must be string" })
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(/.*[A-Z].*/, {
        message: `Password must have at least 1 uppercase letter`,
      })
      .regex(/.*\d.*/, { message: `Password must have at least 1 number` })
      .regex(/[!@#$%^&*?]/, {
        message: `Password must have at least 1 special character`,
      }),
    confirmPassword: z.string().min(8, "Confirm password required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const adminSettingsSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  phone: z
    .string({ error: "Phone required and it must be string and unique" })
    .regex(/^(?:\+88|88)?01[3-9]\d{8}$/, {
      message:
        "Phone must be valid for Bangladesh. Format: +8801XXXXXXX or 01XXXXXXXX",
    })
    .optional(),
  password: z
    .string({ error: " Password must be string" })
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/.*[A-Z].*/, {
      message: `Password must be at least 1 uppercase letter`,
    })
    .regex(/.*\d.*/, { message: `Password must be at least 1 number` })
    .regex(/[!@#$%^&*?]/, {
      message: `Password must be at least 1 special character`,
    })
    .optional(),
  alertMode: z.enum(["toast", "sweetalert"]).optional(),
  theme: z.enum(["light", "dark", "system"]).optional(),
  language: z.enum(["en", "bn", "es"]).optional(),
});
