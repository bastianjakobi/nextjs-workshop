import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

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
            Next.js Advanced
          </Link>
          <ul className={styles.headerMenu}>
            <li>
              <Link href="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/portfolio">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/about">
                Über mich
              </Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
