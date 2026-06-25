import "./globals.css";
import { Geist } from "next/font/google";
import ReduxProvider from "@/redux/Provider";
import Navbar from "@/components/layout/Navbar";
const geist = Geist({
  subsets: ["latin"],
});

export const metadata = {
  title: "ShopSphere",
  description: "Next Generation Ecommerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <ReduxProvider>
          <Navbar />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}