import type { Metadata } from "next";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Gabarito, Plus_Jakarta_Sans, Fira_Code } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/app/11-use-context/ThemeProvider";

const gabaritoSans = Gabarito({
  variable: "--font-gabarito-sans",
  subsets: ["latin"],
});

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Bladjar",
    default: "Bladjar",
  },
  description: "Kangen Ngoding Biar Gak Boring",
  icons: {
    icon: "/main-logo.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${gabaritoSans.variable} ${jakartaSans.variable} ${firaCode.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col ">
        <ThemeProvider>
          <Header />
          <main className="dark:bg-[#030303] dark:text-white">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
