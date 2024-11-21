import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
//import Footer from "@/components/Home/Footer/Footer";
//import   AnimatedCursor  from "react-animated-cursor";


const font = Sora({
  weight: [ "100", "200","300" ,"400","500","600","700","800"],
  subsets: ["latin"],
})

//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ARMY ARTZ",
  description: "Hire Me for your graphic designs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-scrollbar">
      <body className={font.className}>
        
        <ResponsiveNav /> 
        {children}
        {/*Footer*/}
        
        </body>
    </html>
  );
}