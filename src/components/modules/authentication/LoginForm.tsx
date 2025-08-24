/* eslint-disable @typescript-eslint/no-explicit-any */
import Logo from "@/assets/icons/Logo";
import Password from "@/components/Password";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useLoginMutation } from "@/redux/features/auth/auth.api";


import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";


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
  signupText?: string;
  signupUrl?: string;
}

export const LoginForm = ({
  heading = "Login",
  buttonText = "Login",
  signupText = "Need an account?",
}: Login2Props) => {
  const navigate=useNavigate()
  const[login]=useLoginMutation()
   const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    console.log(userInfo)
    try {
      const result = await login(userInfo).unwrap();
      console.log(result);
      toast.success(" Logged In Successfully");
      navigate("/")
      
    } catch (err: any) {
      console.error(err);
      if (
        err.data.message === "Wrong Password" ||
        err.data.message === "Account doesn't exist"
      ) {
        toast.error("Wrong credentials");
      }
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
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
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
              form="login_form"
              type="submit"
              className="w-full bg-primary mt-2"
            >
              {buttonText}
            </Button>
          </div>
          <div className="text-muted-foreground flex justify-center gap-1 text-sm">
            <p>{signupText}</p>
            <Link
              to="/register"
              className="text-primary font-medium hover:underline"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
