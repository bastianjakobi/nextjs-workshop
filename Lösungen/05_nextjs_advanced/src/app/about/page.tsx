import styles from '../page.module.css';

export default function About() {
    return (
        <main className={styles.main}>
            <h1>Über mich</h1>
            <p>Das ist die Über mich Seite welche im Rahmen des Next.js Workshops von <b>Bastian Jakobi</b> erstellt wurde.</p>
        </main>
    );
}