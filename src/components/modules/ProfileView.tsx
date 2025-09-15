/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";


import { Loader2, CheckCircle, XCircle, Lock } from "lucide-react";

import { toast } from "sonner";

import PasswordDialog from "@/components/PasswordDialog";


import SkeletonCard from "@/components/SkeletonCard";
import AvatarUpload from "@/components/AvatarUpload";
import type { FileMetadata } from "@/hooks/use-file-upload";
import { useImageUploadMutation } from "@/redux/features/imageUpload/imageUpload.api";
import ProfileUpdateForm from "./ProfileUpdateForm";
import { useMyInfoQuery } from "@/redux/features/auth/auth.api";

export default function ProfileView() {
  const [image, setImage] = useState<(File | FileMetadata) | null>(null);
  
  const [loadingImage, setLoadingImage] = useState(false);
  const [passwordOpen, setPasswordOpen] = useState(false);
  const { data, isLoading } = useMyInfoQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
 
  const [imageUpload] = useImageUploadMutation();
 

  // ---- Profile Form ----
 
  if (isLoading) {
    return <SkeletonCard />;
  }

  const user = data?.data 
  
  const handleImageUpload = async () => {
    setLoadingImage(true);
    const formData = new FormData();
    formData.append("file", image as File);
    const imageUploadData = {
      id: user._id,
      formData,
    };

    try {
      await imageUpload(imageUploadData).unwrap();
      setImage(null);
    } catch (err: any) {
      console.log(err);
      toast.error("Something went wrong");
    } finally {
      setLoadingImage(false);
    }
  };
  // ---- Password Form ----

  return (
    <div className="flex  flex-col lg:flex-row gap-6 p-4 sm:p-6 items-center">
      {/* Profile Card */}
      <Card className="w-4/5 lg:flex-1 lg:max-w-md mx-auto md:mx-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AvatarUpload
              onUpload={setImage}
              userName={user?.name}
              picture={user?.picture}
              imageFile={image}
            ></AvatarUpload>
            {user?.name}
          </CardTitle>
          <div>
            <Button
              onClick={handleImageUpload}
              type="button"
              className=" flex justify-center items-center gap-2 mb-5"
              disabled={loadingImage || !image}
            >
              {loadingImage && <Loader2 className="animate-spin h-4 w-4" />}
              Save image
            </Button>
          </div>
          <CardDescription>Information</CardDescription>
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
            {user?.isVerified ? (
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
      <ProfileUpdateForm></ProfileUpdateForm>
      <PasswordDialog open={passwordOpen} setOpen={setPasswordOpen} />
    </div>
  );
}
