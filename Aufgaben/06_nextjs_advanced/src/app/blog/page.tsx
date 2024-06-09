import globalStyles from '../page.module.css';

export const dynamic = "force-dynamic";

export default async function Blog() {

    // TODO 1: Posts aus API laden und in Variable posts speichern
    return (
        <main className={globalStyles.main}>
            <h1>Blog</h1>
            <p>Das ist die Blog-Seite welche im Rahmen des Next.js Workshops erstellt wurde.</p>
            <div>
                <h2>Blog Posts</h2>
                // TODO 2: Posts mit Hilfe der BlogGrid Komponente anzeigen
            </div>
        </main>
    );
}