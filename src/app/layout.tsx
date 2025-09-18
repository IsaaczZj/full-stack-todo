import type { Metadata } from "next";
import { Cairo, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/lib/query-provider";
import {Toaster} from '@/components/ui/sonner'
const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "My tasks",
  description: "Aplicação monolítica com next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${cairo.variable} antialiased font-sans bg-gray-100`}>
        <Toaster richColors position="top-right"/>
          <QueryProvider>{children}</QueryProvider>
        
      </body>
    </html>
  );
}
