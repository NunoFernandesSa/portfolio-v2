import React from "react";
import z from "zod";

export default function getContactFormSchema(tv?: (key: string) => string) {
  return z.object({
    name: z
      .string()
      .min(2, {
        message: tv
          ? tv("nameError")
          : "The name must be at least 2 characters.",
      })
      .max(50),
    email: z.email({
      message: tv ? tv("emailError") : "Invalid email address",
    }),
    message: z.string().min(20, {
      message: tv
        ? tv("messageError")
        : "The message must be at least 20 characters long.",
    }),
  });
}

export type ContactFormValues = z.infer<
  Awaited<ReturnType<typeof getContactFormSchema>>
>;
