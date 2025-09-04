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
import { useForgetPasswordMutation } from "@/redux/features/auth/auth.api";


import { useForm, type SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
interface Login2Props {
  heading?: string;
  logo?: {
    url: string;
    src: string;
    alt: string;
    title?: string;
  };
  buttonText?: string;
  googleText?: string;
  loginText?: string;
  
}
const emailSchema = z.object({
  email: z.email(),
});
type EmailFormType = z.infer<typeof emailSchema>;
export const ForgetPasswordForm = ({
    heading = "Forget Password",
    buttonText = "Get reset password link",
    loginText = "Return to",
  
}: Login2Props) => {
    const navigate = useNavigate()
    const [forgetPassword] = useForgetPasswordMutation();
  
        const form = useForm<EmailFormType>({
            resolver: zodResolver(emailSchema),
            defaultValues: {
                email: "",
            },
        });

        const onSubmit: SubmitHandler<EmailFormType> = async (data) => {
            const userEmail = {
                email: data.email,
            };
            try {
                const result = await forgetPassword(userEmail).unwrap();
                console.log(result);
                toast.success("Email sent successfully")
                form.reset()
                navigate("/get-reset-link")
      
            } catch (err: any) {
                console.error(err);
                toast.error("There is an error");
            }
        };

        return (
          <section className="bg-muted min-h-screen py-10">
            <div className="flex h-full items-center justify-center">
              <div className="flex flex-col items-center gap-6 lg:justify-start">
                <div className="flex items-center gap-1 text-primary">
                  {" "}
                  <Logo></Logo>{" "}
                  <h1 className=" text-xl font-bold italic">Pay</h1>
                </div>
                <div className="min-w-sm border-muted bg-background flex w-full max-w-sm flex-col items-center gap-y-4 rounded-md border px-6 py-8 shadow-md">
                  {heading && (
                    <h1 className="text-xl font-semibold">{heading}</h1>
                  )}
                  <div className="w-full">
                    <Form {...form}>
                      <form
                        id="forget_password_form"
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-5"
                      >
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="JonDoe@company.com"
                                  type="email"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription className="sr-only">
                                This is your public display name.
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </form>
                    </Form>
                  </div>

                  <Button
                    form="forget_password_form"
                    type="submit"
                    className="w-full bg-primary mt-2"
                  >
                    {buttonText}
                  </Button>
                </div>
                <div className="text-muted-foreground flex justify-center gap-1 text-sm">
                  <p>{loginText}</p>
                  <Link
                    to="/login"
                    className="text-primary font-medium hover:underline"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
    }
