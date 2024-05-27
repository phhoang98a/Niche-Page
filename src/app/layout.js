import { Poppins } from "next/font/google";
import { NextUIProvider } from '@nextui-org/react'
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Favicon from '../../public/favicon.ico';

const poppins = Poppins({
  weight: ['100','200','300','400','500','600','700','800','900'],
  subsets: ["latin"] 
});

export const metadata = {
  title: "NicheTensor",
  description: "The NicheTensor API supports cutting edge models such as JuggernautX, DreamShaperXL, Llama 3 70B and many more",
  icons: [{ rel: 'icon', url: Favicon.src }],
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
