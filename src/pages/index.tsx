import Image from "next/image";
import { Inter } from "next/font/google";
import RootLayout from "@/components/layouts";
import HomePage from "@/components/pages/home_page";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <RootLayout>
      <HomePage />
    </RootLayout>
  );
}
