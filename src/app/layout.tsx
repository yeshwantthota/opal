import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs"
import "./globals.css";
import { ThemeProvider } from "next-themes";
import ReactQueryProvider from "@/react-query";

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Opal",
  description: "Shared AI powered videos with your friends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${manrope.className} bg-[#171717]`}
          >
          <ThemeProvider
           attribute="class"
           defaultTheme="dark"
           disableTransitionOnChange
          >
            <ReactQueryProvider>
            {children}
            </ReactQueryProvider>
            
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
