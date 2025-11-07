import type { Metadata } from "next";

import { rubik } from "@/lib/fonts";

import "@/styles/globals.css";

import { ThemeProvider } from "@/components/features/theme/theme-provider";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "@/components/custom/ScrollToTop";

import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Nuno Fernandes | Portfolio",
  description:
    "Nuno Fernandes | Full-Stack Developer React & React Native. I transform your ideas into high-performance mobile apps and modern websites. Explore my projects and let's discuss your vision to create a tailor-made solution.",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={rubik.variable}
      data-scroll-behavior="smooth"
    >
      <body className={`${rubik.className} antialiased overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          {/* ----- background fixed ----- */}
          <ScrollToTop />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
