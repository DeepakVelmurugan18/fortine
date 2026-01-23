import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
    title: "Sign In | Fortine",
};

export default function SignInPage() {
    return (
        <div className={styles.container}>
            <div className={styles.formCard}>
                <h1 className={styles.title}>Sign In</h1>
                <form className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email or mobile phone number</label>
                        <input type="email" id="email" className={styles.input} />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className={styles.input} />
                    </div>
                    <button type="button" className={styles.signInBtn}>Sign In</button>
                </form>

                <div className={styles.divider}>
                    <span>Or</span>
                </div>

                <div className={styles.socialButtons}>
                    <button className={styles.socialBtn}>
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" width="20" height="20" />
                        Continue with Google
                    </button>
                    <button className={styles.socialBtn}>
                        <img src="https://www.svgrepo.com/show/475640/apple-black.svg" alt="Apple" width="20" height="20" />
                        Continue with Apple
                    </button>
                </div>
            </div>
        </div>
    );
}
