import type { Metadata } from "next";

import "./globals.css";

import { Nunito } from "next/font/google";
import NavBar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientlyOnly";
import IsLoading from "./components/Loading";
export const metadata: Metadata = {
  title: "Hotel Booking App",
  description: "this is hotel booking app clone by create next app",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <IsLoading />
        <ClientOnly>
          <NavBar />
        </ClientOnly>
        <br />
        <div>{children}</div>
      </body>
    </html>
  );
}
