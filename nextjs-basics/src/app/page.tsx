import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Next.js Basics</h1>
      <p>Das ist die Hello World-Seite welche im Rahmen des Next.js Workshops von <b>Bastian Jakobi</b> erstellt wurde.</p>
    </main>
  );
}
