import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className={styles.header}>
          <Link href="/">
            Next.js Basics
          </Link>
          <ul className={styles.headerMenu}>
            <li>
              Blog
            </li>
            <li>
              Portfolio
            </li>
            <li>
              Über mich
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
