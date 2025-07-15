import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Welcome to QuantumEdge Jobs",
  description: "Find your dream job or post opportunities with our platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-sans`}>
        <div className="max-w-[1500px] mx-auto">
          <Header />
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
