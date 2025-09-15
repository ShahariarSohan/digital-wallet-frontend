/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUpdateAgentProfileMutation } from "@/redux/features/agent/agent.api";

import { useUpdateUserProfileMutation } from "@/redux/features/user/user.api";
import { profileSchema } from "@/schemas/updateSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type z from "zod";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { useMyInfoQuery } from "@/redux/features/auth/auth.api";
import { role } from "@/constants/role";

type ProfileFormType = z.infer<typeof profileSchema>;

export default function ProfileUpdateForm() {
  const [loadingProfile, setLoadingProfile] = useState(false);
  const { data } = useMyInfoQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
 
  const [userUpdateProfile] = useUpdateUserProfileMutation();
  const [agentUpdateProfile] = useUpdateAgentProfileMutation();
  const user = data?.data 
  const profileForm = useForm<ProfileFormType>({
    resolver: zodResolver(profileSchema),
    defaultValues: { name: "", phone: "" },
  });
  const onProfileSubmit = async (values: ProfileFormType) => {
    setLoadingProfile(true);

    const userData = {
      id: user._id,
      name: values.name,
      phone: values.phone,
    };

    try {
      if (data?.data.role===role.agent) {
        const res = await agentUpdateProfile(userData).unwrap();
        console.log(res);
      } else {
        const res = await userUpdateProfile(userData).unwrap();
        console.log(res);
      }
      toast.success("Profile Update Successfully");
    } catch (err: any) {
      console.log(err);
      toast.error("Something went wrong");
    } finally {
      setLoadingProfile(false);
    }
  };
  return (
    <div className="w-4/5 lg:flex-1 lg:max-w-md  mx-auto md:mx-0">
      <h2 className="text-2xl font-semibold mb-4 text-center lg:text-left">
        Update Profile
      </h2>
      <Form {...profileForm}>
        <form
          onSubmit={profileForm.handleSubmit(onProfileSubmit)}
          className="space-y-4"
        >
          <FormField
            control={profileForm.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={profileForm.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="Phone" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full flex justify-center items-center gap-2"
            disabled={loadingProfile}
          >
            {loadingProfile && <Loader2 className="animate-spin h-4 w-4" />}
            Update Profile
          </Button>
        </form>
      </Form>
    </div>
  );
}
