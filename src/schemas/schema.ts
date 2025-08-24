import { z } from "zod";

// Helper to preprocess and handle invalid numbers
const preprocessAmount = z.preprocess(
  (val) => {
    const num = Number(val);
    return num; // always return a number, even if NaN
  },

  z
    .number({
      error: "Please enter a valid amount",
    })
    .refine((val) => !isNaN(val), { message: "Please enter a valid amount" }) // handle NaN
    .min(100, { message: "Amount must be at least 100" })
);

// Amount-only schema
export const amountSchema = z.object({
  amount: preprocessAmount,
});

export type AmountSchemaType = z.infer<typeof amountSchema>;

// Email + Amount schema
export const emailAmountSchema = z.object({
  email: z.email(),
  amount: preprocessAmount,
});

export type EmailAmountSchemaType = z.infer<typeof emailAmountSchema>;
