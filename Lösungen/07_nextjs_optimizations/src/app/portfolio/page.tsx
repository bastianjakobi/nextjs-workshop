import { Metadata } from 'next';
import styles from '../page.module.css';

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Das ist die Portfolio-Seite welche im Rahmen des Next.js Workshops erstellt wurde.",
};

export default function Portfolio() {
    return (
        <main className={styles.main}>
            <h1>Portfolio</h1>
            <p>Das ist die Portfolio-Seite welche im Rahmen des Next.js Workshops erstellt wurde.</p>
        </main>
    );
}