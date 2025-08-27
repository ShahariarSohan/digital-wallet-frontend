// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      profileInfo: "Profile Information",
      updateAccount: "Update your account details",
      name: "Name",
      email: "Email",
      phone: "Phone",
      newPassword: "New Password",
      alertMode: "Alert Mode",
      toast: "Toast",
      sweetalert: "SweetAlert",
      preferences: "Preferences",
      theme: "Theme",
      language: "Language",
      saveSettings: "Save Settings",
      saving: "Saving...",
      success: "Settings updated successfully!",
      error: "Something went wrong!",
    },
  },
  bn: {
    translation: {
      profileInfo: "প্রোফাইল তথ্য",
      updateAccount: "আপনার একাউন্ট আপডেট করুন",
      name: "নাম",
      email: "ইমেইল",
      phone: "ফোন",
      newPassword: "নতুন পাসওয়ার্ড",
      alertMode: "অ্যালার্ট মোড",
      toast: "টোস্ট",
      sweetalert: "সুইটঅ্যালার্ট",
      preferences: "পছন্দসমূহ",
      theme: "থিম",
      language: "ভাষা",
      saveSettings: "সেটিংস সংরক্ষণ করুন",
      saving: "সংরক্ষণ করা হচ্ছে...",
      success: "সেটিংস সফলভাবে আপডেট হয়েছে!",
      error: "কিছু ভুল হয়েছে!",
    },
  },
  es: {
    translation: {
      profileInfo: "Información del perfil",
      updateAccount: "Actualiza los detalles de tu cuenta",
      name: "Nombre",
      email: "Correo electrónico",
      phone: "Teléfono",
      newPassword: "Nueva contraseña",
      alertMode: "Modo de alerta",
      toast: "Toast",
      sweetalert: "SweetAlert",
      preferences: "Preferencias",
      theme: "Tema",
      language: "Idioma",
      saveSettings: "Guardar configuración",
      saving: "Guardando...",
      success: "¡Configuración actualizada con éxito!",
      error: "¡Algo salió mal!",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
