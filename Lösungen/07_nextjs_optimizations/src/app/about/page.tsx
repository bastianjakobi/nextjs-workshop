import { Metadata } from 'next';
import styles from '../page.module.css';

export const metadata: Metadata = {
    title: "Über mich",
    description: "Das ist die Über mich Seite welche im Rahmen des Next.js Workshops erstellt wurde.",
};

export default function About() {
    return (
        <main className={styles.main}>
            <h1>Über mich</h1>
            <p>Das ist die Über mich Seite welche im Rahmen des Next.js Workshops erstellt wurde.</p>
        </main>
    );
}