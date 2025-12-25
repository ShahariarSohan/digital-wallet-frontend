/* eslint-disable @typescript-eslint/no-explicit-any */
import Logo from "@/assets/icons/Logo";
import Password from "@/components/Password";
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
import { DEMO_CREDENTIALS } from "@/utils/demoCredentials";
import { getRedirectPath } from "@/utils/getRedirectPath";
import { useLoginMutation } from "@/redux/features/auth/auth.api";
import { Loader2 } from "lucide-react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import  { loginSchema } from "@/zod/authSchema";

/* -------------------- ZOD SCHEMA -------------------- */


type LoginFormValues = z.infer<typeof loginSchema>;

interface Login2Props {
  heading?: string;
  buttonText?: string;
  signupText?: string;
  forgetPasswordText?: string;
}

export const LoginForm = ({
  heading = "Login",
  buttonText = "Login",
  signupText = "Need an account?",
  forgetPasswordText = "Forget your password?",
}: Login2Props) => {
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const res = await login(data).unwrap();

      if (res.success) {
        toast.success("Logged In Successfully");
        form.reset();

        const userRole = res.data?.role || res.role;
        const redirectTo = getRedirectPath(userRole);

        navigate(redirectTo || "/");
      }
    } catch (err: any) {
      console.error(err);
      if (
        err?.data?.message === "Wrong Password" ||
        err?.data?.message === "Account doesn't exist"
      ) {
        toast.error("Wrong credentials");
      } else {
        toast.error("Login failed");
      }
    }
  };

  /* Demo Credentials */
  const fillDemoCredentials = (role: "admin" | "agent" | "user") => {
    const credentials = DEMO_CREDENTIALS[role];
    form.setValue("email", credentials.email);
    form.setValue("password", credentials.password);
    toast.success(
      `${role.charAt(0).toUpperCase() + role.slice(1)} credentials loaded`
    );
  };

  return (
    <section className="bg-muted min-h-screen py-10">
      <div className="flex h-full items-center justify-center">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-1 text-primary">
            <Logo />
            <h1 className="text-xl font-bold italic">Pay</h1>
          </div>

          <div className="min-w-sm bg-background flex w-full max-w-sm flex-col items-center gap-y-4 rounded-md border px-6 py-8 shadow-md">
            {heading && <h1 className="text-xl font-semibold">{heading}</h1>}

            <div className="w-full">
              <Form {...form}>
                <form
                  id="login_form"
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
                          <Input type="email" {...field} />
                        </FormControl>
                        <FormDescription className="sr-only">
                          Email address
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Password {...field} />
                        </FormControl>
                        <FormDescription className="sr-only">
                          Password
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
            </div>

            <Button
              form="login_form"
              type="submit"
              className="w-full bg-primary mt-2 text-foreground"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Logging in...
                </>
              ) : (
                buttonText
              )}
            </Button>

            {/* Demo Credentials */}
            <div className="w-full border-t pt-4 mt-2">
              <p className="text-xs text-muted-foreground text-center mb-3">
                Quick Demo Login
              </p>
              <div className="grid grid-cols-3 gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => fillDemoCredentials("admin")}
                  disabled={isLoading}
                >
                  Admin
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => fillDemoCredentials("agent")}
                  disabled={isLoading}
                >
                  Agent
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => fillDemoCredentials("user")}
                  disabled={isLoading}
                >
                  User
                </Button>
              </div>
            </div>
          </div>

          <div className="text-muted-foreground text-sm">
            <Link
              to="/forget-password"
              className="text-primary hover:underline"
            >
              {forgetPasswordText}
            </Link>
          </div>

          <div className="text-muted-foreground text-sm">
            {signupText}{" "}
            <Link to="/register" className="text-primary hover:underline">
              Register
            </Link>
          </div>
          <div className="text-muted-foreground flex justify-center gap-1 text-sm">
            {" "}
            <Link to="/" className="text-primary font-medium hover:underline">
              {" "}
              ← Go back to Home{" "}
            </Link>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};
