"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  company: string;
  inquiryType: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message?: string;
}

export function ContactForm() {
  const t = useTranslations("contact.form");

  const inquiryTypes = [
    { value: "discovery", label: t("discoveryCall") },
    { value: "project", label: t("projectInquiry") },
    { value: "partnership", label: t("partnership") },
    { value: "other", label: t("other") },
  ];

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    inquiryType: "discovery",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>({ type: "idle" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus({
        type: "success",
        message: t("successMessage"),
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        inquiryType: "discovery",
        message: "",
      });
    } catch {
      setStatus({
        type: "error",
        message: t("errorMessage"),
      });
    }
  };

  const inputStyles = cn(
    "w-full px-4 py-3 rounded-xl",
    "bg-slate/50 border border-slate-light/20",
    "text-white placeholder:text-gray-500",
    "focus:outline-none focus:border-electric-blue/50 focus:ring-1 focus:ring-electric-blue/50",
    "transition-all duration-200"
  );

  const labelStyles = "block text-sm font-medium text-gray-300 mb-2";

  if (status.type === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-emerald/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="text-emerald" size={32} />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{t("successTitle")}</h3>
        <p className="text-gray-400 mb-6">{status.message}</p>
        <Button
          variant="secondary"
          onClick={() => setStatus({ type: "idle" })}
        >
          {t("sendAnother")}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className={labelStyles}>
            {t("name")} {t("required")}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder={t("namePlaceholder")}
            className={inputStyles}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelStyles}>
            {t("email")} {t("required")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder={t("emailPlaceholder")}
            className={inputStyles}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Company */}
        <div>
          <label htmlFor="company" className={labelStyles}>
            {t("company")}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder={t("companyPlaceholder")}
            className={inputStyles}
          />
        </div>

        {/* Inquiry Type */}
        <div>
          <label htmlFor="inquiryType" className={labelStyles}>
            {t("inquiryType")}
          </label>
          <select
            id="inquiryType"
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
            className={cn(inputStyles, "appearance-none cursor-pointer")}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1rem center",
              backgroundSize: "1rem",
            }}
          >
            {inquiryTypes.map((type) => (
              <option key={type.value} value={type.value} className="bg-slate">
                {type.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelStyles}>
          {t("message")} {t("required")}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder={t("messagePlaceholder")}
          className={cn(inputStyles, "resize-none")}
        />
      </div>

      {/* Error Message */}
      {status.type === "error" && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
          <AlertCircle className="text-red-400 shrink-0" size={20} />
          <p className="text-red-400 text-sm">{status.message}</p>
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        className="w-full"
        disabled={status.type === "loading"}
      >
        {status.type === "loading" ? (
          <>
            <Loader2 className="animate-spin mr-2" size={20} />
            {t("sending")}
          </>
        ) : (
          <>
            <Send className="mr-2" size={20} />
            {t("send")}
          </>
        )}
      </Button>

      <p className="text-center text-gray-500 text-xs">
        {t("responseTime")}
      </p>
    </form>
  );
}
