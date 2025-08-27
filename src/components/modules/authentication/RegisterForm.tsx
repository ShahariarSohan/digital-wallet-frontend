import Logo from "@/assets/icons/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { toast } from "sonner";
import { useRegisterMutation } from "@/redux/features/auth/auth.api";
import SkeletonCard from "@/components/SkeletonCard";
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
interface IRole {
  role: "user" | "agent";
}
const registerSchema = z
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
    role: z
      .string()
      .refine((val) => val === "user" || val === "agent", {
        message: "Role must be either 'user' or 'agent'",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "Password don't match",
    path: ["confirmPassword"],
  });
export const RegisterForm = ({
  heading = "Register",
  buttonText = "Register",
  signupText = "Already have an account?",
}: Login2Props) => {
  const roles: IRole[] = [{ role: "user" }, { role: "agent" }];
  const navigate = useNavigate();
  const [register] = useRegisterMutation();
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "user",
    },
  });
  

  const onSubmit = async (data: z.infer<typeof registerSchema>) => {
    console.log(data);
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
      role: data.role,
    };
    console.log(userInfo);
    try {
      const res = await register(userInfo).unwrap();
      console.log(res);
      toast.success("Successfully registered");
      navigate("/login");
    } catch (error) {
      console.error(error);
      toast.error("Registration failed");
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
                  id="register_form"
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-5"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="name" {...field} />
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
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="jhon@gmail.com"
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
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Role</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select a role" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {roles.map((value: IRole, index: number) => (
                              <SelectItem key={index} value={value.role}>
                                {value.role}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
            </div>
            <Button
              form="register_form"
              type="submit"
              className="w-full bg-primary mt-2"
            >
              {buttonText}
            </Button>
          </div>
          <div className="text-muted-foreground flex justify-center gap-1 text-sm">
            <p>{signupText}</p>
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
};
