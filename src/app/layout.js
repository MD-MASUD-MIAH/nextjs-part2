import { Geist, Geist_Mono,Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import NextAuthSessionProviders from "@/provider/NextAuthSessionProviders";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins =  Poppins({

  weight:['400','600','700'],
    subsets: ["latin"],
})
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
 default: "Learning Nextjs",
template: '%s | Learning Nextjs'  
  },
  keywords: ['Next.js','React','JavaScript',"Learning","playground"],
  description: "Trying to learn Nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <NextAuthSessionProviders>

        <body
        className={`${geistMono.variable} antialiased`}
      >

        <Navbar></Navbar>
        {children}
      </body>
    </NextAuthSessionProviders>
    </html>
  );
}
