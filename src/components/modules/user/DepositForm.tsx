/* eslint-disable @typescript-eslint/no-explicit-any */
import Logo from "@/assets/icons/Logo";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface DepositFormProps {
  heading?: string;
  buttonText?: string;
}

// Zod schema with preprocessing
const amountSchema = z.object({
  amount: z.preprocess((val) => {
    const num = Number(val);
    return isNaN(num) ? val : num; // leave invalid string to fail validation
  }, z.number({ error: "Amount must be a number" }).min(100, { message: "Amount must be at least 100" })),
});

// Type inferred from Zod
type AmountFormValues = z.infer<typeof amountSchema>;

export const DepositForm = ({
  heading = "Deposit",
  buttonText = "Deposit",
}: DepositFormProps) => {
  const form = useForm<AmountFormValues>({
    resolver: zodResolver(amountSchema),
    defaultValues: { amount: 100 },
    mode: "onBlur", // validate as user leaves the input
  });

  const onSubmit = (data: AmountFormValues) => {
    console.log("Deposit Amount:", data.amount);
    // handle deposit logic here
  };

  return (
    <section className="bg-muted min-h-screen py-10">
      <div className="flex h-full items-center justify-center">
        <div className="flex flex-col items-center gap-6 lg:justify-start">
          <div className="flex items-center gap-1 text-primary">
            <Logo />
            <h1 className="text-xl font-bold italic">Pay</h1>
          </div>

          <div className="min-w-sm border-muted bg-background flex w-full max-w-sm flex-col items-center gap-y-4 rounded-md border px-6 py-8 shadow-md">
            {heading && <h1 className="text-xl font-semibold">{heading}</h1>}

            <div className="w-full">
              <Form {...form}>
                <form
                  id="deposit_form"
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-5"
                >
                  <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Amount</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your amount"
                            type="text"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="sr-only">
                          Enter an amount greater than or equal to 100
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
            </div>

            <Button
              form="deposit_form"
              type="submit"
              className="w-full bg-primary mt-2"
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
