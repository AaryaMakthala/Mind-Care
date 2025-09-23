import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./contents/Navbar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MindCare",
  description: "Student Health Care Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <Navbar />
            {children}
            <script src="https://cdn.botpress.cloud/webchat/v3.3/inject.js"></script>
            <script src="https://files.bpcontent.cloud/2025/09/18/01/20250918012512-DHHMIBXM.js" defer></script>
          </body>
        </html>
        );
}
