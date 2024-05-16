import { Poppins } from "next/font/google";
import { NextUIProvider } from '@nextui-org/react'
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ['100','200','300','400','500','600','700','800','900'],
  subsets: ["latin"] 
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextUIProvider style={{background: "linear-gradient(157.87deg, #151836 0%, #0E0F14 100%)"}} className="text-primary">
          <Nav/>
          {children}
          <Footer/>
        </NextUIProvider>
      </body>
    </html>
  );
}
