"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import Swal from "sweetalert2";

import { useUpdateAdminSettingsMutation } from "@/redux/features/admin/admin.api";
import { useAdminInfoQuery } from "@/redux/features/auth/auth.api";
import SkeletonCard from "@/components/SkeletonCard";
import { adminSettingsSchema } from "@/schemas/updateSchema";

import { useTranslation } from "react-i18next";
import i18n from "@/i18n";

type FormValues = z.infer<typeof adminSettingsSchema>;

export default function AdminProfileSettings() {
  const { t } = useTranslation();

  const { data: admin, isLoading } = useAdminInfoQuery(undefined);
  const [updateAdmin] = useUpdateAdminSettingsMutation();
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(adminSettingsSchema),
    defaultValues: {
      name: "",
      phone: "",
      password: "",
      alertMode: "toast",
      language: "en",
    },
  });

  if (isLoading || !admin?.data) {
    return <SkeletonCard />;
  }

  const onSubmit = async (values: FormValues) => {
    setLoading(true);
    try {
      const res = await updateAdmin({
        id: admin.data._id,
        data: values,
      }).unwrap();

      // Change language immediately
      i18n.changeLanguage(values.language);

      if (values.alertMode === "toast") {
        toast.success(t("success"));
      } else {
        Swal.fire(t("success"), "", "success");
      }
    } catch (err) {
      if (values.alertMode === "toast") {
        toast.error(t("error"));
      } else {
        Swal.fire(t("error"), "", "error");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="max-w-3xl mx-auto mt-10 space-y-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Profile Info */}
      <Card>
        <CardHeader>
          <CardTitle>{t("profileInfo")}</CardTitle>
          <CardDescription>{t("updateAccount")}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <div>
                <Label htmlFor="name">{t("name")}</Label>
                <Input {...field} id="name" className="mt-2" />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
            )}
          />
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <div>
                <Label htmlFor="phone">{t("phone")}</Label>
                <Input {...field} id="phone" type="text" className="mt-2" />
                {errors.phone && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <div>
                <Label htmlFor="password">{t("newPassword")}</Label>
                <Input
                  {...field}
                  id="password"
                  type="password"
                  placeholder={t("newPassword")}
                  className="mt-2"
                />
                {errors.password && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
            )}
          />
        </CardContent>
      </Card>

      {/* Alert Mode */}
      <Card>
        <CardHeader>
          <CardTitle>{t("alertMode")}</CardTitle>
          <CardDescription>{t("alertMode")}</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <Label>{t("toast")}</Label>
          <Controller
            name="alertMode"
            control={control}
            render={({ field }) => (
              <Switch
                checked={field.value === "toast"}
                onCheckedChange={(val) =>
                  field.onChange(val ? "toast" : "sweetalert")
                }
              />
            )}
          />
          <Label>{t("sweetalert")}</Label>
        </CardContent>
      </Card>

      {/* Preferences */}
      <Card>
        <CardHeader>
          <CardTitle>{t("preferences")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Controller
            name="language"
            control={control}
            render={({ field }) => (
              <div>
                <Label>{t("language")}</Label>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full mt-2">
                    <SelectValue placeholder={t("language")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="bn">বাংলা</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          />
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex items-center gap-3">
        <Button type="submit" disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="animate-spin mr-2 h-4 w-4" /> {t("saving")}
            </>
          ) : (
            t("saveSettings")
          )}
        </Button>
      </div>
    </form>
  );
}
