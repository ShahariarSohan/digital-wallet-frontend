import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  useForm,
  
  type FieldValues,
  
  type SubmitHandler,
} from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

export const ContactBlock = ({
  title = "Contact Us",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  phone = "(123) 34567890",
  email = "ePay@gmail.com",
}: Contact2Props) => {
  const form = useForm({
    defaultValues: {
      email: "",
      subject: "",
      message: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (data.email === "" || data.subject === "" || data.message === "") {
      return toast.error("Fill up the form properly");
    }
    toast.success("Your message sended successfully");
    form.reset();
    return;
  };
  return (
    <section className="py-10 md:py-32">
      <div className="">
        <div className="mx-auto flex max-w-5xl flex-col justify-between gap-10 lg:flex-row lg:gap-10">
          <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
            <div className="text-center lg:text-left">
              <h1 className="mb-2 text-5xl font-semibold lg:mb-1 md:text-6xl">
                {title}
              </h1>
              <p className="text-muted-foreground">{description}</p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">
                Contact Details
              </h3>
              <ul className="ml-4 list-disc">
                <li>
                  <span className="font-bold">Phone: </span>
                  {phone}
                </li>
                <li>
                  <span className="font-bold">Email: </span>
                  <a href={`mailto:${email}`} className="underline">
                    {email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="md:min-w-sm border-muted bg-background flex w-full max-w-sm flex-col items-center gap-y-4 rounded-md border px-6 py-8 shadow-md justify-center">
              <div className="w-full">
                <Form {...form}>
                  <form
                    id="message_form"
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
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Write subject"
                              type="text"
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
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Write your message"
                              className="resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription className="sr-only">
                            You can <span>@mention</span> other users and
                            organizations.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </form>
                </Form>
              </div>

              <Button
                form="message_form"
                type="submit"
                className="w-full bg-primary mt-2"
              >
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
