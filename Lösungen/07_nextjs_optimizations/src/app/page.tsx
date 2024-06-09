import { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Next.js Optimierungen",
  description: "Das ist die fortgeschrittene und optimierte Blog App welche im Rahmen des Next.js Workshops erstellt wurde.",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Next.js Optimierungen</h1>
      <p>Das ist die fortgeschrittene und optimierte Blog App welche im Rahmen des Next.js Workshops erstellt wurde.</p>
    </main>
  );
}
