import { useEffect, useState } from 'react';
export function ShowAllButton() {
    const [hiddenPosts, setHiddenPosts] = useState<number[]>([]);

    useEffect(() => {
        const storedHiddenPosts = JSON.parse(localStorage.getItem('hiddenPosts') || '[]');
        setHiddenPosts(storedHiddenPosts);
    }, []);

    return (
        <>
            {
                hiddenPosts.length === 6 &&
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '1.5rem' }}>
                    <a
                        style={{ cursor: 'pointer', textDecoration: 'underline', marginTop: '1rem' }}
                        onClick={() => {
                            localStorage.setItem('hiddenPosts', '[]');
                            window.location.reload();
                        }}>Alle Posts anzeigen</a>
                </div>
            }
        </>
    );
}