import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header/Header";

export const metadata: Metadata = {
  title: "Tiendanimal",
  description: "Tech House Challenge | TODO - CRUD | Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href='/favicon.ico' />
      </head>
      <body suppressHydrationWarning={true}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
