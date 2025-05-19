import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { UserProvider } from "@/context/UserContext";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Hiresense",
  description: "AI powered Recruiter!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark">
        <UserProvider>
          <Toaster />
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
