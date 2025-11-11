import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Moods - Flavor of Tradition",
    description: "Discover traditional Moroccan foods: argan oil, saffron, spices, olives, and more.",
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${inter.className} bg-white text-[#2E4A35]`}>{children}</body>
        </html>
    );
}
