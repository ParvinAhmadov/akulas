import type { Metadata } from "next";
import "./globals.scss";
import Layout from "@/featured/Layout/Layout";
import UpButton from "@/components/UpButton";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout>
          {children}
          <UpButton />
        </Layout>
      </body>
    </html>
  );
}
