import Link from 'next/link';
import styles from './page.module.css';

export default function NotFound() {
    return (
        <div className={styles.main}>
            <div className="container" style={{ textAlign: 'center', padding: '4rem' }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404</h2>
                <p style={{ marginBottom: '2rem' }}>Could not find requested resource</p>
                <Link href="/" className="btn btn-primary">Return Home</Link>
            </div>
        </div>
    );
}
