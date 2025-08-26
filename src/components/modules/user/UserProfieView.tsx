"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Loader2, CheckCircle, XCircle, Lock } from "lucide-react";

import { toast } from "sonner";
import { profileSchema } from "@/schemas/updateSchema";
import PasswordDialog from "@/components/PasswordDialog";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { useUpdateUserProfileMutation } from "@/redux/features/user/user.api";

// ---- Custom Zod Schema ----

// ---- Types ----
type ProfileFormType = z.infer<typeof profileSchema>;

export default function UserProfileView() {
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [passwordOpen, setPasswordOpen] = useState(false);
  const { data: userInfo } = useUserInfoQuery(undefined,{refetchOnMountOrArgChange:true});
  const [updateProfile] = useUpdateUserProfileMutation();
  console.log(userInfo);
  const user = userInfo?.data;
  

  // ---- Profile Form ----
  const profileForm = useForm<ProfileFormType>({
    resolver: zodResolver(profileSchema),
    defaultValues: { name: "", phone: "" },
  });

  const onProfileSubmit = async (values: ProfileFormType) => {
    setLoadingProfile(true)
    
    const userData = {
      id: user._id,
      name: values.name,
      phone: values.phone,
    };
   
    try {
      const res = await updateProfile(userData).unwrap();
      console.log(res);
      
      toast.success("Profile Update Successfully");
    } catch (err: any) {
      console.log(err);
      toast.error("Something went wrong");
      
    }
    finally {
      setLoadingProfile(false);
    }
  };

  // ---- Password Form ----

  return (
    <div className="flex  flex-col lg:flex-row gap-6 p-4 sm:p-6">
      {/* Profile Card */}
      <Card className="flex-1 max-w-md mx-auto md:mx-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
              {user?.name.charAt(0).toUpperCase()}
            </div>

            {user?.name}
          </CardTitle>
          <CardDescription>User Information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex justify-between">
            <span>Email:</span>
            <span>{user?.email}</span>
          </div>
          <div className="flex justify-between">
            <span>Phone:</span>
            <span>{user?.phone ? user.phone : "Not added"}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Verified:</span>
            {user?.verified ? (
              <CheckCircle className="text-green-500" />
            ) : (
              <XCircle className="text-red-500" />
            )}
          </div>
          <div className="flex justify-between items-center mt-2">
            <span>Password:</span>

            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1"
              onClick={() => setPasswordOpen(true)}
            >
              ****** <Lock className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Profile Update Form */}
      <div className="flex-1 max-w-md mx-auto md:mx-0">
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
      <PasswordDialog open={passwordOpen} setOpen={setPasswordOpen} />
    </div>
  );
}
