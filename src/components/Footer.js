import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.backToTop}>
                <a href="#">Back to top</a>
            </div>

            <div className={styles.content}>
                <div className={styles.column}>
                    <h3>Get to Know Us</h3>
                    <ul>
                        <li><Link href="#">About Us</Link></li>
                        <li><Link href="#">Careers</Link></li>
                        <li><Link href="#">Press Releases</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3>Connect with Us</h3>
                    <ul>
                        <li><Link href="#">Facebook</Link></li>
                        <li><Link href="#">Twitter</Link></li>
                        <li><Link href="#">Instagram</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3>Make Money with Us</h3>
                    <ul>
                        <li><Link href="#">Sell on Fortine</Link></li>
                        <li><Link href="#">Affiliate Program</Link></li>
                        <li><Link href="#">Advertise Your Products</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3>Let Us Help You</h3>
                    <ul>
                        <li><Link href="#">Your Account</Link></li>
                        <li><Link href="#">Returns Centre</Link></li>
                        <li><Link href="#">Help</Link></li>
                    </ul>
                </div>
            </div>

            <div className={styles.bottom}>
                <p>&copy; {new Date().getFullYear()} Fortine, Inc. or its affiliates</p>
            </div>
        </footer>
    );
}
