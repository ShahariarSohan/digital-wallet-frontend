/* eslint-disable @typescript-eslint/no-explicit-any */
import Logo from "@/assets/icons/Logo";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {  emailAmountSchema, type EmailAmountSchemaType } from "@/schemas/schema";
import { useSendMoneyMutation } from "@/redux/features/user/user.api";
import { failAlert, successAlert } from "@/alerts/sweetAlert";

export default function SendMoneyForm() {
  const [sendMoney] = useSendMoneyMutation()
  const form = useForm<EmailAmountSchemaType>({
    resolver: zodResolver(emailAmountSchema)as any,
    defaultValues: { email: "", amount: 100 },
    mode: "onBlur",
  });

  const onSubmit = async (data: EmailAmountSchemaType) => {
    console.log("Send Money:", data);
    try {
      const res = await sendMoney(data).unwrap()
      console.log(res);
      successAlert(res.message, res.data?.[0].amount, res.data?.[0].transactionFee)
    } catch (err: any) {
      console.log(err);
      if (err?.data?.message === "No Email exist") {
        return failAlert("Enter a valid email")
      }
      failAlert(err?.data?.message);
            
    };
  }

    return (
      <section className="bg-muted min-h-screen py-10">
        <div className="flex h-full items-center justify-center">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-1 text-primary">
              <Logo />
              <h1 className="text-xl font-bold italic">Pay</h1>
            </div>

            <div className="min-w-sm bg-background w-full max-w-sm rounded-md border px-6 py-8 shadow-md">
              <h1 className="text-xl font-semibold mb-4">Send Money</h1>

              <Form {...form}>
                <form
                  id="sendmoney_form"
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-5"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Recipient Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="recipient@example.com"
                            autoComplete="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Amount</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter amount"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-primary mt-2">
                    Send
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
    );
  
}