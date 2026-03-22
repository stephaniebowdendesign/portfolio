import type { Metadata } from "next";
import { Navbar } from "./components/Navbar/Navbar";
import { SocialBar } from "./components/SocialBar/SocialBar";
import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navbar />
          <SocialBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
