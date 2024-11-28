import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clario sign up form",
  description: "Made on next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full`}>
    <head>
      <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'/>
    </head>
    <body
        className={`antialiased bg-gradient-to-br from-[#F4F9FF] to-[#E0EDFB] h-full`}
      >
        {children}
      </body>
    </html>
  );
}
