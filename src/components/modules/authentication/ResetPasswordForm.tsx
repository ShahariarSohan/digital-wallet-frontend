import Logo from "@/assets/icons/Logo";
import { Button } from "@/components/ui/button";

import { Link, useNavigate, useSearchParams } from "react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Password from "@/components/Password";

import { toast } from "sonner";
import { useResetPasswordMutation } from "@/redux/features/auth/auth.api";

interface Login2Props {
  heading?: string;
  logo?: {
    url: string;
    src: string;
    alt: string;
    title?: string;
  };
  buttonText?: string;
}
const resetPasswordSchema = z
  .object({
    newPassword: z
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
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    error: "Password don't match",
    path: ["confirmPassword"],
  });
export const ResetPasswordForm = ({
  heading = "Reset Password",
  buttonText = "Reset Password",
}: Login2Props) => {
  const navigate = useNavigate();
  const [urlParams] = useSearchParams();
  const [resetPassword] = useResetPasswordMutation();
  const form = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof resetPasswordSchema>) => {
    const resetPasswordInfo = {
      id: urlParams.get("id"),
      newPassword: data.newPassword,
    };
    console.log(resetPasswordInfo);
    try {
      const res = await resetPassword(resetPasswordInfo).unwrap();
      console.log(res);
      toast.success("Reset password successfully");
      form.reset();
      navigate("/login");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <section className="bg-muted min-h-screen py-10">
      <div className="flex h-full items-center justify-center">
        <div className="flex flex-col items-center gap-6 lg:justify-start">
          <div className="flex items-center gap-1 text-primary">
            {" "}
            <Logo></Logo> <h1 className=" text-xl font-bold italic">Pay</h1>
          </div>
          <div className="min-w-sm border-muted bg-background flex w-full max-w-sm flex-col items-center gap-y-4 rounded-md border px-6 py-8 shadow-md">
            {heading && <h1 className="text-xl font-semibold">{heading}</h1>}
            <div className="flex w-full flex-col gap-2">
              <Form {...form}>
                <form
                  id="reset_password_form"
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-5"
                >
                  <FormField
                    control={form.control}
                    name="newPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>New Password</FormLabel>
                        <FormControl>
                          <Password {...field}></Password>
                        </FormControl>
                        <FormDescription className="sr-only">
                          This is your public display name.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <Password {...field}></Password>
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
              form="reset_password_form"
              type="submit"
              className="w-full bg-primary text-foreground mt-2"
            >
              {buttonText}
            </Button>
          </div>
          <div className="mt-6">
            <Button asChild size="lg">
              <Link to="/">Go Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
