"use client";

import React, { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/shadcn/card";
import { Button } from "../ui/shadcn/button";
import { Input } from "../ui/shadcn/input";
import { Textarea } from "../ui/shadcn/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/shadcn/form";
// ----- zod -----
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// ----- schemas -----
import { formSchema } from "@/lib/schemas";

// ----- emailjs -----
import { email_js } from "@/lib/email";
import emailjs from "@emailjs/browser";
// ----- toast -----
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const contactForm = useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitting(true);

    try {
      await emailjs.sendForm(
        email_js.SERVICE_ID!,
        email_js.TEMPLATE_ID!,
        contactForm.current!,
        email_js.PUBLIC_KEY
      );
      toast.success("Message sent successfully!");
      form.reset();
    } catch (error) {
      toast.error("⚠️ An error has occurred. Please try again later!");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Card className="bg-transparent border-purple-500/10 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 transition-shadow duration-300">
      <CardHeader>
        <CardTitle>Send me a message</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            ref={contactForm}
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <div className="space-y-3">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-3">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="your.email@example.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-3">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        id="message"
                        placeholder="Tell us how we can help you..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              className="w-full cursor-pointer"
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Send message"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
